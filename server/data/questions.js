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

    {
        id: 1,
        text: "Qu'est-ce qu'un choupisson ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: [
            "Un bébé hérisson",
            "Une variété de cucurbitacée",
            "Une recette de chou farci",
            "Un Pokémon"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le terme 'choupisson' est un mot informel popularisé sur Internet pour désigner un bébé hérisson, bien qu'il ne soit pas scientifiquement officiel."
    },
    {
        id: 2,
        text: "En quelle année la majorité civile à 18 ans a-t-elle été instaurée en France ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "1914",
            "1945",
            "1974",
            "1789"
        ],
        correctIndex: 2,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "L'abaissement de la majorité civile de 21 à 18 ans en France a été décidé en 1974 sous la présidence de Valéry Giscard d'Estaing."
    },
    {
        id: 3,
        text: "Qu'est-ce que la cuniculiculture ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: [
            "L'élevage de lapins",
            "La culture de concombres",
            "L'élevage d'escargots",
            "La culture du riz"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le mot 'cuniculiculture' vient du latin 'cuniculus', qui signifie lapin."
    },
    {
        id: 4,
        text: "Quelle est la tranche d'âge d'un nourrisson ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: [
            "0-28 jours",
            "1-3 mois",
            "1-24 mois",
            "1-36 mois"
        ],
        correctIndex: 2,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "En médecine, la période dite 'nourrisson' couvre généralement la première année et peut s'étendre jusqu'à 24 mois selon les classifications."
    },
    {
        id: 5,
        text: "Dans la version officielle de La Marseillaise, quelle est la suite correcte de : « Ils viennent jusque dans vos bras égorger... » ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "vos fils et vos compagnes",
            "vos fils, vos compagnes",
            "vos filles et vos compagnes",
            "vos filles, vos compagnes"
        ],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La Marseillaise, écrite en 1792 par Rouget de Lisle, est devenue l'hymne national français en 1795."
    },
    {
        id: 6,
        text: "Quel est le nom anatomique du gros orteil ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: [
            "Hallux",
            "Callux",
            "Gros jules",
            "Le gros doigt du pied"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le terme 'hallux' est utilisé en anatomie pour désigner le gros orteil, aussi appelé premier orteil du pied."
    }

    /* ---------- END-EASY ---------- */

    /* ---------- MEDIUM ---------- */

    /* ---------- END-MEDIUM ---------- */

    /* ---------- HARD ---------- */

    /* ---------- END-HARD ---------- */
]

export default questions;

