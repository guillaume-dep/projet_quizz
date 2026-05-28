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
        value: 1,
        coef: 2,
        information: "PHP est un langage serveur créé en 1994 par Rasmus Lerdorf qui voulait auparavant dire Personal Home Page. Rasmus a créé ce langage dans le but de traquer les visites sur son site."
    },
    {
        id: 1,
        text: "Qu'est-ce qu'un choupisson ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Un bébé hérisson", "Une variété de cucurbitacée", "Une recette de chou farci", "Un Pokémon"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Terme informel popularisé sur Internet pour désigner un bébé hérisson."
    },
    {
        id: 2,
        text: "En quelle année la majorité à 18 ans a-t-elle été instaurée en France ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1914", "1945", "1974", "1789"],
        correctIndex: 2,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "La majorité civile est passée de 21 à 18 ans en 1974 sous la présidence de Valéry Giscard d'Estaing."
    },
    {
        id: 3,
        text: "Qu'est-ce que la cuniculiculture ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["L'élevage de lapins", "La culture de concombre", "L'élevage d'escargots", "La culture de riz"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "C'est l'élevage de lapins domestiques. Le mot vient du latin cuniculus qui signifie lapin."
    },
    {
        id: 4,
        text: "Quelle est la tranche d'âge d'un nourrisson ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["De 0 à 28 jours", "De 1 à 3 mois", "De 1 à 24 mois", "De 1 à 36 mois"],
        correctIndex: 2,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "La période du nourrisson couvre généralement l'enfant de 1 mois à 2 ans (24 mois). Avant 28 jours, c'est un nouveau-né."
    },
    {
        id: 5,
        text: "Dans la Marseillaise officielle, quelle suite de cette phrase est correcte : « Ils viennent jusque dans vos bras égorger... » ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "vos fils et vos compagnes",
            "vos fils, vos compagnes",
            "vos filles et vos compagnes",
            "vos filles, vos compagnes"
        ],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Le texte officiel écrit par Rouget de Lisle comporte une virgule : « égorger vos fils, vos compagnes ! » sans le « et »."
    },
    {
        id: 6,
        text: "Quel est le nom anatomique du gros orteil ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["L'hallux", "Le callux", "Le gros jules", "Le gros doigt de pied"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "En anatomie, le gros orteil est appelé hallux. Sa déformation fréquente s'appelle l'hallux valgus."
    },
    {
        id: 7,
        text: "Avec quelle ville Paris est-elle jumelée ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Londres", "Tokyo", "Berne", "Rome"],
        correctIndex: 3,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Paris n'est jumelée qu'avec Rome depuis 1956 avec le slogan : « Seule Paris est digne de Rome ; seule Rome est digne de Paris »."
    },
    {
        id: 8,
        text: "Les monuments présents sur les billets de banque en euros existent-ils réellement ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: ["Vrai", "Faux"],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Faux. Les ponts et monuments sont fictifs pour éviter les jalousies entre pays, représentant simplement des styles architecturaux."
    },
    {
        id: 9,
        text: "Quel inventeur français a donné son nom à une écriture en relief pour les aveugles ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Louis Braille", "Aimé Paris", "Jean-François Champollion", "David Guetta"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Louis Braille a développé son système de points en relief en 1824 alors qu'il était lui-même aveugle."
    },
    {
        id: 10,
        text: "Jean-Baptiste Poquelin est-il un grand dramaturge français ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Vrai", "Faux"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Vrai. Jean-Baptiste Poquelin est le véritable nom de Molière."
    },
    {
        id: 11,
        text: "Combien d'os possède un être humain à l'âge adulte ?",
        theme: STUDY_DOMAIN.CORPS_HUMAIN,
        answers: ["250", "280", "270", "206"],
        correctIndex: 3,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Nous naissons avec environ 270 os, mais beaucoup fusionnent durant la croissance pour n'en laisser que 206 à l'âge adulte."
    },
    {
        id: 12,
        text: "En quelle année le mur de Berlin est-il tombé ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1985", "1987", "1989", "1991"],
        correctIndex: 2,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "La chute du mur de Berlin a lieu en 1989."
    },
    {
        id: 13,
        text: "Quel est le symbole chimique de l’or ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Ag", "Au", "Al", "Go"],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Le symbole Au vient du latin aurum."
    },
    {
        id: 14,
        text: "Quel est le vrai nom de Heisenberg dans la série Breaking Bad ?",
        theme: STUDY_DOMAIN.CINEMA,
        answers: ["Walter White", "Jimmy McGill", "Tuco Salamanca", "Gus Fring"],
        correctIndex: 0,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Son pseudonyme fait référence au physicien Werner Heisenberg."
    },
    {
        id: 15,
        text: "Combien de pattes possède une araignée ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["6 pattes", "8 pattes", "10 pattes", "12 pattes"],
        correctIndex: 1,
        difficulty: DIFFICULTY.EASY,
        value: 1,
        coef: 2,
        information: "Les araignées sont des arachnides et possèdent 8 pattes, contrairement aux insectes qui en ont 6."
    },

    /* ===================== MEDIUM (15) ===================== */

    {
        id: 16,
        text: "Qui a prononcé la célèbre phrase « Paris vaut bien une messe » ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Henri IV", "Charles de Gaulle", "Louis XIV", "Napoléon Ier"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Attribuée à Henri IV, cette phrase justifie sa conversion au catholicisme en 1593 pour pouvoir accéder au trône de France."
    },
    {
        id: 17,
        text: "Quel est le nom le plus donné en France qui est en tête du classement à la fois pour un chat et pour un chien ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Simba", "Nala", "Pépito", "Rio"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Incroyable mais vrai, Nala occupe simultanément la première place des noms les plus attribués aux chiens et aux chats."
    },
    {
        id: 18,
        text: "Combien de pays dans le monde ont un drapeau officiel qui n'est pas rectangulaire ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["5", "3", "2", "1"],
        correctIndex: 3,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Seul le Népal possède un drapeau non quadrilatère (deux triangles empilés). Le Vatican et la Suisse ont des drapeaux carrés."
    },
    {
        id: 19,
        text: "Qu'est-ce qu'un Kakapo ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Un perroquet", "Une fiente d'oiseau", "Un lézard", "Un singe"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Le kakapo est un grand perroquet nocturne originaire de Nouvelle-Zélande qui a la particularité de ne pas savoir voler."
    },
    {
        id: 20,
        text: "Qu'est-ce qu'une saïga ?",
        theme: STUDY_DOMAIN.NATURE,
        answers: ["Une grande plaine", "Une antilope", "Une grande liane", "Un type de tempête"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "La saïga est une antilope eurasienne reconnaissable à son museau long et gonflé qui filtre la poussière."
    },
    {
        id: 21,
        text: "Qu'est-ce que la nomophobie ?",
        theme: STUDY_DOMAIN.PSYCHOLOGIE,
        answers: ["La peur d'être seul", "La peur de parler en public", "La peur d'être critiqué", "La peur d'être séparé de son téléphone"],
        correctIndex: 3,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Contraction de 'no mobile phobia', elle désigne la peur ou l'anxiété excessive à l'idée d'être séparé de son smartphone."
    },
    {
        id: 22,
        text: "Qui est Édith Cresson ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Une journaliste politique", "La première femme Première ministre en France", "Le vrai nom d'Édith Piaf", "La première française à gagner l'Eurovision"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Édith Cresson est nommée Première ministre par François Mitterrand en 1991, devenant la première femme à occuper ce poste en France."
    },
    {
        id: 23,
        text: "Qui est la dernière artiste à avoir remporté l'Eurovision pour la France ?",
        theme: STUDY_DOMAIN.MUSIQUE,
        answers: ["France Gall", "Marie Myriam", "Édith Piaf", "Barbara Pravi"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "La dernière victoire de la France remonte à 1977 avec la chanson 'L'Oiseau et l'Enfant' interprétée par Marie Myriam."
    },
    {
        id: 24,
        text: "Quel événement a déclenché la Première Guerre mondiale ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: [
            "L’attentat de Sarajevo",
            "La crise des missiles de Cuba",
            "La révolution russe",
            "La bataille de Verdun"
        ],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "L’assassinat de l’archiduc François-Ferdinand à Sarajevo en 1914 a déclenché l'engrenage des alliances."
    },
    {
        id: 25,
        text: "Quel État américain a le plus de frontières avec d'autres États ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Le Tennessee", "Le New Jersey", "Le Texas", "Le New York"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Le Tennessee et le Missouri possèdent chacun 8 États voisins, le record absolu aux États-Unis."
    },
    {
        id: 26,
        text: "Quel pays est à l'origine de la fabrication de la bière ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["La Mésopotamie", "L'Égypte", "La Chine", "La Grèce"],
        correctIndex: 0,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Les Sumériens en Mésopotamie buvaient déjà de la bière (appelée sikaru) il y a plus de 5 000 ans."
    },
    {
        id: 27,
        text: "Quelle est la guerre la plus courte de l’histoire ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["La guerre des Six Jours", "La guerre anglo-zanzibarienne", "La guerre de Crimée", "La guerre de Corée"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "En 1896, la guerre anglo-zanzibarienne a duré entre 38 et 45 minutes avant la reddition de Zanzibar."
    },
    {
        id: 28,
        text: "Quelle est la fosse océanique la plus深度 de monde ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["La fosse des Tonga", "La fosse des Philippines", "La fosse des Mariannes", "La fosse de Porto Rico"],
        correctIndex: 2,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "La fosse des Mariannes descend à près de 11 000 mètres de profondeur dans l'océan Pacifique."
    },
    {
        id: 29,
        text: "En quelle année la peine de mort a-t-elle été officiellement abolie en France ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["1979", "1981", "1985", "2000"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "L'abolition a été votée le 30 septembre 1981, portée par le garde des Sceaux Robert Badinter."
    },
    {
        id: 30,
        text: "Quelle est la capitale du Pérou ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Bogota", "Lima", "Santiago", "La Paz"],
        correctIndex: 1,
        difficulty: DIFFICULTY.MEDIUM,
        value: 1,
        coef: 2,
        information: "Lima est la capitale historique et économique du Pérou, fondée en 1535."
    },

    /* ===================== HARD (10) ===================== */

    {
        id: 31,
        text: "Qui a écrit le célèbre recueil de poèmes « Les Fleurs du Mal » ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: ["Émile Zola", "Charles Baudelaire", "Voltaire", "Honoré de Balzac"],
        correctIndex: 1,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "Publié en 1857, ce chef-d'œuvre de Baudelaire valut à son auteur un procès pour outrage aux bonnes mœurs."
    },
    {
        id: 32,
        text: "De quel conte traditionnel provient la réplique : « Tire la chevillette, la bobinette cherra » ?",
        theme: STUDY_DOMAIN.ARTS,
        answers: ["Alice au pays des merveilles", "Blanche-Neige", "Cendrillon", "Le Petit Chaperon rouge"],
        correctIndex: 3,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "C'est la phrase que dit le loup déguisé en grand-mère au Petit Chaperon rouge dans le conte de Charles Perrault."
    },
    {
        id: 33,
        text: "Qu'est-ce qu'un clavilogiste ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Un réparateur de claviers", "Un collectionneur de vins", "Un collectionneur de clés anciennes", "Un médecin spécialiste"],
        correctIndex: 2,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "Du latin 'clavis' (clé), le clavilogiste est une personne qui collectionne les clés anciennes."
    },
    {
        id: 34,
        text: "Qu'est-ce qu'un arénophile ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Un amateur de jeux anciens", "Un collectionneur de sable", "Un fan du film Gladiator", "Un collectionneur d'arêtes de poissons"],
        correctIndex: 1,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "L'arénophile est un collectionneur de sables issus de différentes plages ou déserts du monde."
    },
    {
        id: 35,
        text: "La coulrophobie désigne la peur... ?",
        theme: STUDY_DOMAIN.PSYCHOLOGIE,
        answers: ["Des clowns", "De l'eau qui coule", "De courir en public", "Des miroirs"],
        correctIndex: 0,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "La coulrophobie est la peur panique et persistent des clowns, très courante chez les enfants et certains adultes."
    },
    {
        id: 36,
        text: "Est-ce qu'un kilo de plumes est plus lourd qu'un kilo de plomb au sommet du Mont Saint-Michel ?",
        theme: STUDY_DOMAIN.SCIENCES,
        answers: ["Vrai", "Faux"],
        correctIndex: 1,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "Faux. Un kilo reste un kilo."
    },
    {
        id: 37,
        text: "Dans quel pays est né le révolutionnaire Che Guevara ?",
        theme: STUDY_DOMAIN.HISTOIRE,
        answers: ["Cuba", "Mexique", "Chili", "Argentine"],
        correctIndex: 3,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "Ernesto Guevara est né à Rosario, en Argentine, avant de rejoindre la révolution cubaine."
    },
    {
        id: 38,
        text: "Quelle est la capitale officielle de l’Inde ?",
        theme: STUDY_DOMAIN.GEOGRAPHIE,
        answers: ["Mumbai", "New Delhi", "Bangalore", "Calcutta"],
        correctIndex: 1,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "New Delhi est la capitale administrative du pays, bien que Mumbai soit la plus grande ville."
    },
    {
        id: 39,
        text: "Qu'est-ce qu'un agélaste ?",
        theme: STUDY_DOMAIN.PSYCHOLOGIE,
        answers: ["Une personne qui ne rit jamais", "Un collectionneur de pierres", "Un adepte d'une secte ancienne", "Un amateur de cuisine épicée"],
        correctIndex: 0,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "Du grec ancien, un agélaste désigne une personne qui est incapable de rire ou qui refuse de le faire."
    },
    {
        id: 40,
        text: "Temps de développement de l'application ?",
        theme: STUDY_DOMAIN.PSYCHOLOGIE,
        answers: ["50h", "10h", "40h", "60h"],
        correctIndex: 3,
        difficulty: DIFFICULTY.HARD,
        value: 1,
        coef: 2,
        information: "Réalisé en 60 heures de développement pendant 14 jours, le projet avait pour but d'apprendre les communications en temps réel avec WebSocket et d'utiliser React. CSS principalement générée par IA mais maquetté au préalable, merci Claude."
    },


];

export default questions;