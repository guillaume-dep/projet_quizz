import { DIFFICULTY } from "../../client/src/components/utils/difficulty.js";
import { STUDY_DOMAIN } from "../utils/studyDomain.js";

const questions = [

    /* ---------- EASY ---------- */

    {
        id: 0,
        text: "Quel est le meilleur langage pour programmer ?",
        theme: STUDY_DOMAIN.INFORMATIQUE,
        answers: [
            "PHP",
            "Java",
            "Kotlin",
            "Haskell"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "PHP célèbre langage pour gérer la partie serveur d'un site web qui auparavant voulait dire Personal Home Page, crée par Rasmus Lerdorf en 1994 pour suivre les visites sur son site."
    },



    /* ---------- END-EASY ---------- */

    /* ---------- MEDIUM ---------- */

    /* ---------- END-MEDIUM ---------- */

    /* ---------- HARD ---------- */

    /* ---------- END-HARD ---------- */
]

export default questions;

