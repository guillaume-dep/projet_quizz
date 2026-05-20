export const SOCKET_EVENTS = {
    /* CLIENT -> SERVER | SERVER -> CLIENT */
    CONNECT: "connect",
    DISCONNECT: "disconnect",

    CREATE_GAME: "create_game",
    GAME_CREATED: "game_created",

    JOIN_GAME: "join_game",
    PLAYER_JOINED: "player_joined",
    PLAYER_REMOVED: "player_removed",
    HOST_LEFT: "host_left",
    REQUEST_LEAVE_GAME: "request_leave_game",
    PLAYER_LEFT: "player_left",

    START_GAME: "start_game",
    GAME_STARTED: "game_started",

    REQUEST_NEW_QUESTION: "request_new_question",
    QUESTION_SENT: "question_sent",

    SUBMIT_ANSWER: "submit_answer",
    ANSWER_PROGRESS: "answer_progress",
    SUBMITTED_ANSWER: "submitted_answer",

    REQUEST_SHOW_LEADERBOARD: "request_show_leaderboard",
    SHOWN_LEADERBOARD: "shown_leaderboard",
    REQUEST_SHOW_RESULTS: "request_show_results",
    SHOWN_RESULTS: "shown_results",
    GAME_OVER: "game_over",

    ERROR: "error",
    REQUEST_SYNC_STATE: "request_sync_state",
    SYNC_STATE: "sync_state"
};