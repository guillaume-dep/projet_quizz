/**
 * Player class to represent a player in the quizz game
 */
export default class Player {
    #name
    #score
    #domain
    #hasAnswered
    #lastAnswer

    constructor(name, domain) {
        this.#name = name;
        this.#score = 0;
        this.#domain = domain;
        this.#hasAnswered = false;
        this.#lastAnswer = null;
    }

    /* ----- Player ----- */

    get name() { return this.#name; }
    get score() { return this.#score; }
    get domain() { return this.#domain; }

    markAnswered() {
        this.#hasAnswered = true;
    }

    resetAnswered() {
        this.#hasAnswered = false;
        this.#lastAnswer = null;
    }

    hasAnswered() {
        return this.#hasAnswered;
    }

    getLastAnswer() {
        return this.#lastAnswer;
    }

    setLastAnswer(answer) {
        this.#lastAnswer = answer;
    }

    /* ----- Score ----- */

    incrementScore(value) {
        this.#score += value;
    }

    incrementScoreDomain(value, coef, questionDomain) {
        if (this.domain !== questionDomain) {
            this.incrementScore(value);
            return;
        }

        this.incrementScore(value * coef);
    }
}