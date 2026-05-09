import { socket } from "../../../socket/socket.js";
import { SOCKET_EVENTS as SK } from "../../../../../shared/socketEvents.js";
import { ROLE } from "../../../../../shared/utils/role.js";
import { useState, useEffect } from "react";

const Host_view = ({ question }) => {

    const { id, text, theme, answers, correctIndex, value, coef } = question;
    return (
        <div>
            {theme}
            {text}
        </div>

    )
}

export default Host_view;