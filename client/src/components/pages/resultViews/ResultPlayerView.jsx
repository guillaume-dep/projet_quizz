const ResultPlayerView = ({ answer }) => {
    return (
        <div className="ResultPlayerView">
            <h2>{answer.correct ? "Right answer !" : "Bad answer !"}</h2>
            <p>Won points : {answer.score} </p>

        </div>
    )
}

export default ResultPlayerView;