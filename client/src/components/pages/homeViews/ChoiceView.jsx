import styles from "../../../style/choiceView.module.css"

const ChoiceView = ({ setMode }) => {
    return (
        <div className={styles.choiceView}>
            <button onClick={() => setMode("create")}>Create</button>
            <button onClick={() => setMode("join")}>Join</button>
        </div>
    )
}

export default ChoiceView;