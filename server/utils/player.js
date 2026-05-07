/**
 * Player class to represent a player in the quizz game
 */
export default class Player {
    #name
    #score
    #domain
    #hasAnswered

    constructor(name, domain) {
        this.#name = name;
        this.#score = 0;
        this.#domain = domain;
        this.#hasAnswered = false;
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
    }

    hasAnswered() {
        return this.#hasAnswered;
    }

    /**
     * Increment the score of a player
     * @param {Number} value to increment the score with
     */
    incrementScore(value) {
        this.#score += value;
    }

    /**
     * Increment the score of a player according to a domain
     * @param {Number} value to increment the score with
     * @param {Number} coef the coef of the question
     * @param {string} domain the domain of the question
     */
    incrementScoreDomain(value, coef, domain) {
        if (this.domain === domain) {
            this.incrementScore(value);
            return;
        }

        this.incrementScore(value * coef)
    }
}