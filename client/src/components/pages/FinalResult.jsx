
import { ROLE } from "../../../../shared/utils/role.js";

const FinalResult = ({ scores }) => {

    const renderFinalResult = scores
        .filter(player => player.domain !== "")
        .map(({ name, score, domain }, index) => (
            <div key={index}>
                <p>Name : {name}</p>
                <p>score : {score}</p>
                <p>domain : {domain}</p>
            </div>
        ))

    return (
        <div className="FinalResult">
            Final results :
            {renderFinalResult}
        </div>
    )
}

export default FinalResult