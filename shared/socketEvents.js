export const SOCKET_EVENTS = {
    /* CLIENT -> SERVER | SERVER -> CLIENT */
    CONNECT: "connect",
    DISCONNECT: "disconnect",

    CREATE_GAME: "create_game",
    GAME_CREATED: "game_created",

    JOIN_GAME: "join_game",
    PLAYER_JOINED: "player_joined",
    PLAYER_REMOVED: "player_removed",

    START_GAME: "start_game",
    GAME_STARTED: "game_started",

    REQUEST_NEW_QUESTION: "request_new_question",
    QUESTION_SENT: "question_sent",

    SUBMIT_ANSWER: "submit_answer",
    SUBMITTED_ANSWER: "submitted_answer",

    SHOW_RESULTS: "show_results",
    GAME_OVER: "game_over",

    ERROR: "error",
};