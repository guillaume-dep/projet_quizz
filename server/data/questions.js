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
            "La culture de concombres",
            "L'élevage d'escargots",
            "La culture du riz",
            "L'élevage de lapins"
        ],
        correctIndex: 3,
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
    },

    {
        id: 7,
        text: "Avec quelle ville Paris est-elle jumelée ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: [
            "Londres",
            "Tokyo",
            "Berne",
            "Rome"
        ],
        correctIndex: 3,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Paris est jumelée avec plusieurs grandes villes du monde, mais Rome est l'une des plus symboliques en raison des liens culturels et historiques entre la France et l'Italie."
    },
    {
        id: 8,
        text: "Quel est le prénom le plus donné pour un chat ou un chien en France ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: [
            "Simba",
            "Nala",
            "Pepito",
            "Rio"
        ],
        correctIndex: 3,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Les noms d’animaux de compagnie suivent souvent des tendances culturelles, et certains prénoms se retrouvent aussi bien chez les chats que chez les chiens."
    },
    {
        id: 9,
        text: "Combien de pays utilisent un drapeau non rectangulaire ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: [
            "5",
            "3",
            "2",
            "4"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Le Népal possède un drapeau non rectangulaire unique au monde, tandis que la Suisse et le Vatican ont des drapeaux carrés."
    },
    {
        id: 10,
        text: "Les monuments présents sur les billets de banque en euros sont-ils réels ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: [
            "Vrai",
            "Faux"
        ],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Les ponts et monuments des billets en euros sont des représentations fictives inspirées de styles architecturaux européens, et non des bâtiments existants."
    },
    {
        id: 11,
        text: "Quel inventeur français a donné son nom à l'écriture en relief pour les aveugles ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "Louis Braille",
            "Aimé Paris",
            "Jean-François Champollion",
            "David Guetta"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Louis Braille a inventé le système d'écriture tactile en 1824 à l'âge de 15 ans."
    },
    {
        id: 12,
        text: "Jean-Baptiste Poquelin est-il un grand dramaturge français ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "Vrai",
            "Faux"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Jean-Baptiste Poquelin est le véritable nom de Molière, l’un des plus grands auteurs du théâtre français classique."
    },



    /* ---------- END-EASY ---------- */

    /* ---------- MEDIUM ---------- */

    /* ---------- END-MEDIUM ---------- */

    /* ---------- HARD ---------- */

    /* ---------- END-HARD ---------- */
]

export default questions;

