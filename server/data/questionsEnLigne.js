import { DIFFICULTY } from "../../client/src/components/utils/difficulty.js";
import { STUDY_DOMAIN } from "../utils/studyDomain.js";


const questions = [
    // =========================
    // FACILE (1 → 15)
    // =========================
    {
        id: 1,
        text: "Qui a été la première femme à recevoir un prix Nobel en 1903 ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: [
            "Marie Curie",
            "Rosalind Franklin",
            "Ada Lovelace",
            "Lise Meitner"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Marie Curie est la seule personne à avoir reçu deux prix Nobel dans deux sciences différentes (physique et chimie)."
    },
    {
        id: 2,
        text: "En quelle année le mur de Berlin est-il tombé ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La chute du mur de Berlin marque symboliquement la fin de la guerre froide."
    },
    {
        id: 3,
        text: "Quel est l’élément dont le symbole chimique est Au ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Argent", "Or", "Aluminium", "Cuivre"],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le symbole Au vient du latin 'aurum', signifiant or brillant."
    },
    {
        id: 4,
        text: "Quel est le signe opposé au Scorpion dans le zodiaque ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Bélier", "Taureau", "Poissons", "Gémeaux"],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Les signes opposés dans le zodiaque sont situés à 180° sur la roue astrologique."
    },
    {
        id: 5,
        text: "Qui a écrit Their Eyes Were Watching God ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: [
            "Zora Neale Hurston",
            "Toni Morrison",
            "Maya Angelou",
            "Alice Walker"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Le roman est devenu un classique majeur de la littérature afro-américaine."
    },
    {
        id: 6,
        text: "Quel événement a déclenché la Première Guerre mondiale en 1914 ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "L’assassinat de l’archiduc François-Ferdinand",
            "La crise de Cuba",
            "La révolution russe",
            "La bataille de Verdun"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "L’attentat de Sarajevo a été réalisé par Gavrilo Princip."
    },
    {
        id: 7,
        text: "Quelle est la plus petite planète du système solaire ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Mars", "Vénus", "Mercure", "Pluton"],
        correctIndex: 2,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Pluton n’est plus classée comme planète depuis 2006."
    },
    {
        id: 8,
        text: "Quel spectacle de Broadway est le plus lucratif de tous les temps ?",
        theme: STUDY_DOMAIN.CINEMA,
        answers: ["Hamilton", "Le Roi Lion", "Wicked", "Chicago"],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le Roi Lion est adapté du film Disney de 1994."
    },
    {
        id: 9,
        text: "Dans quel bar le soulèvement de 1969 lié aux droits LGBTQ+ a-t-il commencé ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Stonewall Inn", "CBGB", "Studio 54", "The Blue Note"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Les émeutes de Stonewall sont considérées comme le début du mouvement moderne LGBTQ+."
    },
    {
        id: 10,
        text: "Comment s’appellent les 22 premières cartes du tarot ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: [
            "Les Arcanes majeurs",
            "Les figures royales",
            "Les cartes sacrées",
            "Les mystiques"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le tarot est à l’origine un jeu de cartes avant d’être utilisé pour la divination."
    },
    {
        id: 11,
        text: "Quel est le vrai nom de Heisenberg dans Breaking bad ?",
        theme: STUDY_DOMAIN.CINEMA,
        answers: ["Walter White", "Jimmy McGill", "Tuco Salamanca", "Gus Fring"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Walt a emprunté son pseudonyme « Heisenberg » au physicien Werner Heisenberg, lauréat du prix Nobel et chimiste à qui on a diagnostiqué un cancer du poumon."
    },
    {
        id: 12,
        text: "Quelle est la capitale de l’Inde ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Mumbai", "New Delhi", "Bangalore", "Calcutta"],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "New Delhi est officiellement la capitale depuis 1911."
    },
    {
        id: 13,
        text: "Quels États américains partagent le plus de frontières avec d’autres États ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Tennessee et Missouri", "Texas et Californie", "New York et Nevada", "Floride et Utah"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Le Tennessee et le Missouri ont chacun 8 États voisins."
    },
    {
        id: 14,
        text: "Quel est le nom officiel de La Joconde ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: [
            "La Joconde",
            "La Vierge aux rochers",
            "La Belle Florentine",
            "Portrait de Lisa Gherardini"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Peinte par Léonard de Vinci vers 1503."
    },
    {
        id: 15,
        text: "Comment s’appelle la viande de cerf au restaurant ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Bison", "Chevreuil", "Venaison", "Gibier royal"],
        correctIndex: 1,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La venaison désigne plus généralement la viande de gibier."
    },

    // =========================
    // MOYEN (16 → 30)
    // =========================
    {
        id: 16,
        text: "Sous quel pseudonyme publie l'autrice des romans napolitains ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: ["Elena Ferrante", "Isabel Allende", "Jhumpa Lahiri", "Donna Tartt"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "L'identité de l'autrice reste encore débattue."
    },
    {
        id: 17,
        text: "Où a été enregistrée la température la plus élevée sur Terre ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: [
            "Vallée de la Mort",
            "Sahara",
            "Désert d’Atacama",
            "Koweït City"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "134°F ont été enregistrés en 1913."
    },
    {
        id: 18,
        text: "Quel animateur détient un record aux Emmy Awards ?",
        theme: STUDY_DOMAIN.CINEMA,
        answers: ["RuPaul", "Ellen DeGeneres", "Jimmy Fallon", "Oprah Winfrey"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "RuPaul a révolutionné la représentation drag à la télévision."
    },
    {
        id: 19,
        text: "Quel est le premier livre de Balzac ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Les Chouans", "Le Père Goriot", "Eugénie Grandet", "La Peau de chagrin"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Publié en 1829."
    },
    {
        id: 20,
        text: "Quels pays ont la plus longue frontière terrestre ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Canada et États-Unis", "Russie et Chine", "Brésil et Argentine", "Inde et Pakistan"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Elle fait plus de 8 800 km."
    },

    // =========================
    // DIFFICILE (31 → 45)
    // =========================
    {
        id: 31,
        text: "Quel est le plus grand organe du corps humain ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["La peau", "Le foie", "Le cerveau", "Les poumons"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "La peau représente environ 15% du poids corporel."
    },
    {
        id: 32,
        text: "En quelle année le premier iPhone est-il sorti ?",
        theme: STUDY_DOMAIN.INFORMATIQUE,
        answers: ["2005", "2006", "2007", "2008"],
        correctIndex: 2,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Présenté par Steve Jobs en janvier 2007."
    },
    {
        id: 33,
        text: "Quel mammifère est le plus mortel pour l’homme ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Hippopotame", "Lion", "Requin blanc", "Loup"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "L’hippopotame est extrêmement territorial."
    },
    {
        id: 34,
        text: "Quel est l’animal le plus mortel au monde ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Moustique", "Serpent", "Chien", "Crocodile"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le moustique transmet le paludisme."
    },
    {
        id: 35,
        text: "Dans quel pays est né Che Guevara ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Argentine", "Cuba", "Mexique", "Chili"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Il est né à Rosario."
    },
    {
        id: 36,
        text: "Quelle ville est une île-État ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Singapour", "Hong Kong", "Dubaï", "Bahrain"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Singapour est à la fois une ville, un État et une île."
    },
    {
        id: 37,
        text: "Quel est le plus petit pays du monde ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Vatican", "Monaco", "Malte", "Liechtenstein"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Il fait 44 hectares."
    },
    {
        id: 38,
        text: "Quelle est la planète la plus chaude du système solaire ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Vénus", "Mercure", "Mars", "Jupiter"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Effet de serre extrême sur Vénus."
    },
    {
        id: 39,
        text: "Quel pays possède le plus de fuseaux horaires ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["France", "Russie", "États-Unis", "Australie"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.HARD,
        information: "Grâce à ses territoires d’outre-mer."
    },
    {
        id: 40,
        text: "Quel langage a le plus d’alphabet dans le monde ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Khmer", "Arabe", "Hindi", "Japonais"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.HARD,
        information: "Le khmer possède plus de 70 caractères."
    },
    {
        id: 41,
        text: "Combien de touches sur un piano standard ?",
        theme: STUDY_DOMAIN.MUSIQUE,
        answers: ["88", "76", "92", "100"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Standard moderne depuis le XIXe siècle."
    },
    {
        id: 42,
        text: "Quel pays a inventé la bière ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Mésopotamie", "Égypte", "Chine", "Grèce"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Les Sumériens sont les premiers producteurs connus."
    },
    {
        id: 43,
        text: "Quelle est la guerre la plus courte de l’histoire ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "Guerre Anglo-Zanzibar",
            "Guerre des Six Jours",
            "Guerre de Crimée",
            "Guerre de Corée"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Elle a duré 38 minutes."
    },
    {
        id: 44,
        text: "Quel est le seul métal liquide à température ambiante ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Mercure", "Plomb", "Bromine", "Gallium"],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.EASY,
        information: "Le mercure est toxique et lourd."
    },
    {
        id: 45,
        text: "Quel est le plus profond point connu des océans ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: [
            "Fosse des Mariannes",
            "Fosse de Tonga",
            "Mer des Philippines",
            "Dorsale médio-atlantique"
        ],
        correctIndex: 0,
        value: 1,
        coef: 2,
        difficulty: DIFFICULTY.MEDIUM,
        information: "Le point le plus profond est le Challenger Deep."
    }
]

export default questions;
