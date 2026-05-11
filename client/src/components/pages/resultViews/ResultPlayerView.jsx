const ResultPlayerView = ({ answer }) => {

    if (answer === null) return;

    console.log("Reponse du joueur : ", answer.correct)
    return (
        <div className="ResultPlayerView">
            <h2>{answer.correct ? "Right answer !" : "Bad answer !"}</h2>
            <p>Actual number of points : {answer.score} </p>
        </div>
    )
}

export default ResultPlayerView;