/* --- CSS --- */
import styles from "../../style/finalResult.module.css"

const FinalResult = ({ scores, scoresToShow, currentPlayerScore, currentPlayerRank }) => {

    console.log(scoresToShow);
    console.log(scores)
    console.log(currentPlayerRank)
    console.log("score", currentPlayerScore)

    /* RANK : 0 pour HOST */

    const renderFinalResult = scoresToShow
        .filter(player => player.domain !== "")
        .map(({ name, score, domain }, index) => (
            <div key={index}>
                <p>Name : {name}</p>
                <p>score : {score}</p>
                <p>domain : {domain}</p>
            </div>
        ))

    return (
        <div className={styles.finalResult}>
            Final results :
            {renderFinalResult}
        </div>
    )
}

export default FinalResult

/*
J'ai besoin de réaliser l'écran des résultats finaux.
Il doit être sous la forme de podium: 
    - un podium avec 3 personnes: des rectangles qui vont du bas vers le haut, plus petit pour le 3eme, plus grand que le 3e mais plus petit que le premier pour le 2e
    - Pour le premier un plus grand rectangle. Même largeur pour les 3 la hauteur change. En haut du rectangle (pas dedans mais au dessus du bord haut, le nom et le score du joueur.)
    - Pour le 4e et 5e simplement le nom en bas de l'écran.
    - Pour le reste des joueurs afficher le rang de chacun dans un rectangle (vertical) à droite et montrer le rang de chacun.

Pour les écrans sur téléphone simplement afficher le score total du joueur et si possible son rang personnel.
*/