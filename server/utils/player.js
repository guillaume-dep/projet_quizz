/**
 * Player class to represent a player in the quizz game
 */
export default class Player {
    #name
    #score
    #domain
    #hasAnswered

    constructor(name, score, domain, hasAnswered) {
        this.#name = name;
        this.#score = score;
        this.#domain = domain;
        this.hasAnswered = false;
    }

    /* ----- Player ----- */

    get name() {
        return this.#name;
    }

    get score() {
        return this.#score;
    }

    get domain() {
        return this.#domain;
    }

    get hasAnswered() {
        return this.#hasAnswered;
    }

    /**
     * Increment the score of a player
     * @param {Number} value to increment the score with
     */
    incrementPlayerScore(value) {
        this.score += value;
    }

    /**
     * Increment the score of a player according to a domain
     * @param {Number} value to increment the score with
     * @param {string} domain the domain of the question
     * @param {Number} coef the coef of the question
     * 
     */
    incrementPlayerScoreDomain(value, domain, coef) {
        if (this.domain === domain) {
            this.incrementPlayerScore(value);
            return;
        }

        this.incrementPlayerScore(value * coef)
    }
}