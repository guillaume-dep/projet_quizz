import { DIFFICULTY } from "../../client/src/components/utils/difficulty.js";
import { STUDY_DOMAIN } from "../utils/studyDomain.js";

const questions = [
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
        information: "PHP voulait auparavant dire Personal Home Page, crée par Rasmus Lerdorf en 1994 pour suivre les visites sur son site"
    },

    {
        id: 1,
        text: "Quel est le meilleur langage pour débuter ?",
        theme: STUDY_DOMAIN.INFORMATIQUE,
        answers: [
            "Python",
            "C",
            "Kotlin",
            "Haskell"
        ],
        correctIndex: 0,
        value: 1,
        coef: 1,
        difficulty: DIFFICULTY.EASY
    },

    {
        id: 1,
        text: "Quel est le meilleur langage pour déprimer ?",
        theme: STUDY_DOMAIN.INFORMATIQUE,
        answers: [
            "Python",
            "C++",
            "PHP",
            "COQ"
        ],
        correctIndex: 2,
        value: 1,
        coef: 1,
        difficulty: DIFFICULTY.MEDIUM
    },

    {
        id: 1,
        text: "Quel est le meilleur langage pour le backend ?",
        theme: STUDY_DOMAIN.INFORMATIQUE,
        answers: [
            "Java",
            "Javascript",
            "PHP",
            "Python"
        ],
        correctIndex: 1,
        value: 1,
        coef: 1,
        difficulty: DIFFICULTY.HARD
    },
];

export default questions;

/*
Avec quelle ville Paris est jumelée | ROME
*/