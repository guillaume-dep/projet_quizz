import GameManager from "../gameManager.js";

/**
 * IOController class to manage the game connections 
 */
export default class IOController {
    #io
    #gameManager

    constructor(io, gameManager) {
        this.#io = io
        this.#gameManager = gameManager;
    }


}