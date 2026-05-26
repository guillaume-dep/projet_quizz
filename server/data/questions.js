import { DIFFICULTY } from "../../client/src/components/utils/difficulty.js";
import { STUDY_DOMAIN } from "../utils/studyDomain.js";

const questions = [

    /* ===================== EASY (15) ===================== */

    {
        id: 0,
        text: "Quel est le meilleur langage pour programmer ?",
        theme: STUDY_DOMAIN.INFORMATIQUE,
        answers: ["PHP", "Java", "Kotlin", "Haskell"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        information: "PHP est un langage serveur créé en 1994 par Rasmus Lerdorf."
    },
    {
        id: 1,
        text: "Qu'est-ce qu'un choupisson ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Un bébé hérisson", "Une cucurbitacée", "Une recette", "Un Pokémon"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        information: "Terme informel popularisé sur Internet pour désigner un bébé hérisson."
    },
    {
        id: 2,
        text: "En quelle année la majorité à 18 ans a-t-elle été instaurée en France ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1914", "1945", "1974", "1789"],
        correctIndex: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La majorité civile est passée de 21 à 18 ans en 1974."
    },
    {
        id: 3,
        text: "Qu'est-ce que la cuniculiculture ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Concombres", "Escargots", "Riz", "Lapins"],
        correctIndex: 3,
        difficulty: DIFFICULTY.EASY,
        information: "Élevage de lapins, du latin cuniculus."
    },
    {
        id: 4,
        text: "Quelle est la tranche d'âge d'un nourrisson ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["0-28 jours", "1-3 mois", "1-24 mois", "1-36 mois"],
        correctIndex: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La période nourrisson couvre généralement jusqu’à 24 mois selon les classifications médicales."
    },
    {
        id: 5,
        text: "Quelle est la suite de la Marseillaise : « Ils viennent jusque dans vos bras égorger... » ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "vos fils et vos compagnes",
            "vos fils, vos compagnes",
            "vos filles et vos compagnes",
            "vos filles, vos compagnes"
        ],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        information: "Hymne écrit en 1792 par Rouget de Lisle."
    },
    {
        id: 6,
        text: "Quel est le nom du gros orteil ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["Hallux", "Callux", "Gros jules", "Doigt du pied"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        information: "En anatomie, le gros orteil est appelé hallux."
    },
    {
        id: 7,
        text: "Quelle ville est jumelée avec Paris ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Londres", "Tokyo", "Berne", "Rome"],
        correctIndex: 3,
        difficulty: DIFFICULTY.EASY,
        information: "Paris est jumelée avec Rome depuis 1956."
    },
    {
        id: 8,
        text: "Les monuments sur les billets en euros sont-ils réels ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: ["Vrai", "Faux"],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        information: "Les monuments sont fictifs et inspirés de styles architecturaux européens."
    },
    {
        id: 9,
        text: "Qui a inventé l’écriture Braille ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Louis Braille", "Aimé Paris", "Champollion", "David Guetta"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        information: "Louis Braille a développé son système en 1824."
    },
    {
        id: 10,
        text: "Jean-Baptiste Poquelin est-il un célèbre dramaturge français ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Vrai", "Faux"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        information: "Jean-Baptiste Poquelin est le vrai nom de Molière."
    },
    {
        id: 11,
        text: "Combien d'os a-t-on à l'âge adulte ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["250", "280", "270", "206"],
        correctIndex: 3,
        difficulty: DIFFICULTY.EASY,
        information: "De nombreux os fusionnent pendant la croissance."
    },
    {
        id: 12,
        text: "En quelle année le mur de Berlin est-il tombé ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La chute du mur de Berlin a lieu en 1989."
    },
    {
        id: 13,
        text: "Quel est le symbole chimique de l’or ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Argent", "Au", "Aluminium", "Cuivre"],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        information: "Le symbole Au vient du latin aurum."
    },
    {
        id: 14,
        text: "Quel est le vrai nom de Heisenberg dans Breaking Bad ?",
        theme: STUDY_DOMAIN.CINEMA,
        answers: ["Walter White", "Jimmy McGill", "Tuco Salamanca", "Gus Fring"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        information: "Son pseudonyme fait référence au physicien Werner Heisenberg."
    },

    /* ===================== MEDIUM ===================== */

    {
        id: 15,
        text: "Qui a prononcé la phrase « Paris vaut bien une messe » ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Henri IV", "Charles de Gaulle", "Louis XIV", "Napoléon Bonaparte"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Henri IV s’est converti au catholicisme pour devenir roi de France."
    },
    {
        id: 16,
        text: "Qu'est-ce qu'un kakapo ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Perroquet", "Fiente", "Lézard", "Singe"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Perroquet nocturne incapable de voler, originaire de Nouvelle-Zélande."
    },
    {
        id: 17,
        text: "Qu'est-ce qu'une saïga ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Plaine", "Antilope", "Liane", "Tempête"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Antilope reconnaissable à son nez filtrant la poussière."
    },
    {
        id: 18,
        text: "Que signifie la nomophobie ?",
        theme: STUDY_DOMAIN.PSYCHOLOGIE,
        answers: ["Solitude", "Public", "Critique", "Téléphone"],
        correctIndex: 3,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Peur d’être séparé de son téléphone mobile."
    },
    {
        id: 19,
        text: "Qui a été la première femme Première ministre française ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Journaliste", "Première ministre", "Piaf", "Eurovision"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Édith Cresson devient Première ministre en 1991."
    },
    {
        id: 20,
        text: "Qui a remporté la dernière victoire française à l’Eurovision ?",
        theme: STUDY_DOMAIN.MUSIQUE,
        answers: ["France Gall", "Marie Myriam", "Édith Piaf", "Barbara Pravi"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Marie Myriam gagne en 1977."
    },
    {
        id: 21,
        text: "Quel événement a déclenché la Première Guerre mondiale ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Sarajevo", "Cuba", "Russie", "Verdun"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "L’attentat de Sarajevo en 1914 déclenche la guerre."
    },
    {
        id: 22,
        text: "Quels États américains ont le plus de frontières avec d'autres États ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Tennessee & Missouri", "Texas", "New York", "Floride"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Tennessee et Missouri ont chacun 8 États voisins."
    },
    {
        id: 23,
        text: "Quelle est l'origine de la bière ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Mésopotamie", "Égypte", "Chine", "Grèce"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Les Sumériens sont les premiers producteurs connus."
    },
    {
        id: 24,
        text: "Quelle est la guerre la plus courte de l’histoire ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Anglo-Zanzibar", "Six Jours", "Crimée", "Corée"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Elle a duré 38 minutes."
    },
    {
        id: 25,
        text: "Quelle est la fosse la plus profonde des océans ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Mariannes", "Tonga", "Philippines", "Atlantique"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Le Challenger Deep est le point le plus profond."
    },
    {
        id: 26,
        text: "Dans quel pays est né Che Guevara ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Argentine", "Cuba", "Mexique", "Chili"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Né à Rosario en Argentine."
    },
    {
        id: 27,
        text: "Quelle est la capitale de l’Inde ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Mumbai", "New Delhi", "Bangalore", "Calcutta"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        information: "New Delhi est la capitale officielle depuis 1911."
    },
    {
        id: 28,
        text: "En quelle année la peine de mort a-t-elle été abolie en France ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1979", "1981", "1985", "2000"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Abolition portée par Robert Badinter."
    },

    /* ===================== HARD ===================== */

    {
        id: 29,
        text: "Qu'est-ce qu'un clavilogiste ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Clavier", "Vin", "Clés anciennes", "Médecin"],
        correctIndex: 2,
        difficulty: DIFFICULTY.HARD,
        information: "Du latin clavis signifiant clé."
    },
    {
        id: 30,
        text: "Qu'est-ce qu'un arénophile ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Jeux anciens", "Sable", "Gladiator", "Arêtes"],
        correctIndex: 1,
        difficulty: DIFFICULTY.HARD,
        information: "Collectionneur de sables du monde entier."
    },
    {
        id: 31,
        text: "Quel est l’animal le plus mortel pour l’homme ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Hippopotame", "Lion", "Requin", "Moustique"],
        correctIndex: 3,
        difficulty: DIFFICULTY.HARD,
        information: "Le moustique transmet le paludisme."
    },
    {
        id: 32,
        text: "Quel est le plus petit pays du monde ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Vatican", "Monaco", "Malte", "Liechtenstein"],
        correctIndex: 0,
        difficulty: DIFFICULTY.HARD,
        information: "Le Vatican fait environ 44 hectares."
    },
    {
        id: 33,
        text: "Que signifie la coulrophobie ?",
        theme: STUDY_DOMAIN.PSYCHOLOGIE,
        answers: ["Clowns", "Eau", "Courir", "Miroirs"],
        correctIndex: 0,
        difficulty: DIFFICULTY.HARD,
        information: "Peur des clowns."
    }
];

export default questions;