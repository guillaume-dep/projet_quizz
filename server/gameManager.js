/* Imports */
/* import questions from "./data/questions.js" */
import Player from "./utils/player.js"
import { GAME_STATE } from "./utils/gameState.js"
import { DIFFICULTY } from "../client/src/components/utils/difficulty.js";
import { AnswerStatus } from "./utils/answerStatus.js"
import { shuffle } from "./utils/utils.js";

/**
 * GameManager manages the state according to the rules of the quizz game
 */
export default class GameManager {
    #game_state;
    #host_id;
    #players_map;
    #current_question_index;
    #questions;
    #numberOfQuestionsToPlayWith;
    #difficulty;

    constructor(questions, numberOfQuestionsToPlayWith, difficulty) {
        this.#game_state = GAME_STATE.LOBBY;
        this.#host_id = null;

        this.#players_map = new Map(); /* socket_id: Player*/
        this.#current_question_index = 0;

        this.#difficulty = difficulty;
        this.#numberOfQuestionsToPlayWith = this.computeSafeNbQuestions(
            numberOfQuestionsToPlayWith,
            questions
        );

        this.#questions = this.buildQuestions(questions, difficulty);
    }

    /* ----- Questions ----- */

    /**
     * Return the minimum between the length of questions and the number of questions entered
     * @param {Number} numberOfQuestionsToPlayWith 
     * @param {Array} questions 
     * @return {Number} 
     */
    computeSafeNbQuestions(numberOfQuestionsToPlayWith, questions) {
        return Math.min(
            numberOfQuestionsToPlayWith ?? questions.length,
            questions.length
        );
    }

    /**
     * Return the array of questions according to a difficulty
     * @param {Array} questions 
     * @param {String} difficulty 
     * @return {Array} 
     */
    filterByDifficulty(questions, difficulty) {
        return questions.filter(
            (question) => question.difficulty === difficulty
        );
    }

    buildQuestions(questions, difficulty) {
        const filtered = shuffle(this.filterByDifficulty(questions, difficulty))

        return shuffle(filtered
            .slice(0, this.#numberOfQuestionsToPlayWith))
    }

    /* ----- State ----- */

    getGameState() { return this.#game_state };

    /* ----- Players ----- */

    getPlayers() {
        return [...this.#players_map.values()].map(player => ({
            name: player.name,
            score: player.score,
            domain: player.domain
        }));
    }

    getPlayer(socket_id) {
        return this.#players_map.get(socket_id)
    }

    removePlayer(socket_id) {
        this.#players_map.delete(socket_id);
    }

    getNumberOfPlayers() {
        return this.#players_map.size;
    }

    getPlayersMap() {
        return this.#players_map;
    }

    setHost(socket_id) { this.#host_id = socket_id };
    isHost(socket_id) { return this.#host_id === socket_id }

    /**
     * Add a player to the map of players if not already in
     * @param {string} socket_id 
     * @param {string} name 
     * @param {string} player_domain
     */
    addPlayer(socket_id, name, player_domain) {
        if (this.#players_map.has(socket_id) || this.#game_state !== GAME_STATE.LOBBY) return;

        this.#players_map.set(socket_id, new Player(name, player_domain, socket_id))
    }

    /* ----- Game ----- */

    /**
     * Start the game if the input comes from the host
     * Modify the state of the game to : QUESTION
     * @param {string} socket_id 
     */
    startGame(socket_id) {
        if (socket_id !== this.#host_id) return;

        this.#game_state = GAME_STATE.QUESTION;
    }

    /**
     * Return if the game can start
     * @return {boolean} true if it can else false
     */
    canStart() {
        return this.getNumberOfPlayers() >= 2;
    }

    /**
     * End the game if the input comes from the host
     * Modify the state of the game to : FINISHED
     */
    endGame() {
        this.#game_state = GAME_STATE.FINISHED;
    }

    /**
     * End the game by the host
     * @param {string} socket_id 
     */
    endGameByHost(socket_id) {
        if (socket_id !== this.#host_id) return;
        this.endGame();
    }

    /**
     * Reset the players' boolean condition for submitting again
     */
    resetAnsweredPlayers() {
        this.#players_map.forEach(player => player.resetAnswered());
    }

    /* ----- Questions ----- */

    /**
     * @return {Object} question object
     */
    getCurrentQuestion() {
        return this.#questions[this.#current_question_index]
    }

    /**
     * @return {Number} question number
     */
    getCurrentQuestionIndex() {
        return this.#current_question_index;
    }

    /**
     * @param {Number} answerIndex 
     * @param {Object} question
     * @return {boolean} true if the answer is the right one else false
     */
    isRightAnswer(answerIndex, question) {
        return question.correctIndex === answerIndex;
    }

    /**
     * @return {Object} the next question object if it exists else null
     */
    getNextQuestion() {

        if (this.isLastQuestion()) {
            this.endGame();
            return null;
        }

        this.#current_question_index += 1;
        this.resetAnsweredPlayers()
        this.#game_state = GAME_STATE.QUESTION;

        return this.getCurrentQuestion();
    }

    /**
     * Mark as answered every player that haven't answered
     */
    markAnsweredEveryPlayer() {
        this.#players_map.forEach((player) => {
            if (!player.hasAnswered()) {
                player.markAnswered();
            }
        })
    }

    /**
     * Return true if last question else false
     * @returns {boolean}
     */
    isLastQuestion() {
        return this.#current_question_index >= this.getNumberOfQuestions() - 1;
    }

    /**
     * Return the number of questions
     * @returns {boolean}
     */
    getNumberOfQuestions() {
        return this.#questions.length
    }

    /* ----- Submitting ----- */

    static invalidAnswer(player = null) {
        return {
            valid: false,
            status: AnswerStatus.NO_ANSWER,
            answerIndex: null,
            correctIndex: null,
            isCorrect: false,
            pointsGained: 0,
            previousScore: player?.score ?? 0,
            totalScore: player?.score ?? 0
        };
    }

    /**
     * @return {Number} remaining number of player to play
    */
    getNumberPlayersNotAnswered() {
        return [...this.#players_map.values()].reduce((acc, player) => (!player.hasAnswered()) ? acc += 1 : acc, 0)
    }

    /**
     * @return {boolean} true if every player has answered else false
     */
    hasEveryPlayerAnswered() {
        return this.getNumberPlayersNotAnswered() === 1 /* Host doesn't answer */
    }

    /**
     * Submit the answer of the player
     * @param {string} socket_id the socket_id of the player
     * @param {Number} answerIndex the index of the answer
     * @return {Object} the object with the informations of the answer state
     */
    submitAnswer(socket_id, answerIndex) {
        if (this.#game_state !== GAME_STATE.QUESTION)
            return GameManager.invalidAnswer();

        const question = this.getCurrentQuestion();
        const player = this.#players_map.get(socket_id);

        if (!player)
            return GameManager.invalidAnswer();

        if (player.hasAnswered()) {
            return player.getLastAnswer();
        }

        const previousScore = player.score;

        player.markAnswered();

        const isCorrect = this.isRightAnswer(answerIndex, question);

        if (isCorrect) {
            player.incrementScoreDomain(
                question.value,
                question.coef,
                question.theme
            );
        }

        const status =
            answerIndex === null
                ? AnswerStatus.NO_ANSWER
                : isCorrect
                    ? AnswerStatus.CORRECT
                    : AnswerStatus.WRONG;

        const answer = {
            valid: true,
            answerIndex,
            correctIndex: question.correctIndex,
            isCorrect,
            status,
            pointsGained: player.score - previousScore,
            totalScore: player.score,
            previousScore
        };

        player.setLastAnswer(answer);

        return answer;
    }

    getAnswerDetails() {
        const details = Array(this.getCurrentQuestion().answers.length).fill(0)
        this.#players_map.forEach(player => {
            let lastAnswer = player.getLastAnswer()
            if (lastAnswer !== null && lastAnswer.answerIndex !== null) {
                details[lastAnswer.answerIndex] = (details[lastAnswer.answerIndex] ?? 0) + 1;
            }
        })
        return details
    }

    /* ----- Connection ----- */

    /**
     * @return {boolean} true if the game can be joined else false
     */
    canJoin() {
        return this.#game_state === GAME_STATE.LOBBY
    }

    /**
     * Set the game state to RESULT
     */
    setResultState() {
        this.#game_state = GAME_STATE.RESULT;
    }

    /* ----- Scores ----- */

    getScores() {
        return [...this.#players_map.values()]
            .filter(player => !this.isHost(player.id))
            .map(player => ({
                id: player.id,
                name: player.name,
                score: player.score,
                domain: player.domain
            })).sort((a, b) => b.score - a.score)
    }

}