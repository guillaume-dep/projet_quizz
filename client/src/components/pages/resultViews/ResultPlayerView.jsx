const ResultPlayerView = ({ answer }) => {

    console.log("Reponse du joueur : ", answer)

    const renderAnswer = () => {
        if (answer === null) {
            return "No answer given !"
        }
        return answer.correct ? "Right answer !" : "Bad answer !"
    }

    const renderScore = () => {
        if (answer === null) {
            return "0 point"
        }
        return `Actual number of points : ${answer.score}`
    }

    return (
        <div className="ResultPlayerView">
            <h2>{renderAnswer()}</h2>
            <p>{renderScore()}</p>
        </div>
    )
}

export default ResultPlayerView;