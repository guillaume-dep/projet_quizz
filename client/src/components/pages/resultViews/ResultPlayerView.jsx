const ResultPlayerView = ({ answer }) => {

    if (answer === null) return;

    console.log("Reponse du joueur : ", answer.correct)
    return (
        <div className="ResultPlayerView">
            <h2>{answer.correct ? "Right answer !" : "Bad answer !"}</h2>
            <p>Points won : {answer.score} </p>
        </div>
    )
}

export default ResultPlayerView;