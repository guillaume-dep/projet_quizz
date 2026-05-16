import styles from "../../../style/choiceView.module.css"

const ChoiceView = ({ setMode, canInstall, handleInstall }) => {

    /* Render the install button */
    const renderButtonInstallation = () => {
        if (canInstall) {
            return <button
                className={styles.installBtn}
                onClick={handleInstall}
            >
                Install app
            </button >
        }
        return (
            <>
                <button onClick={() => setMode("create")}>Create</button>
                <button onClick={() => setMode("join")}>Join</button>
            </>
        );
    }

    return (
        <div className={styles.choiceView}>
            {renderButtonInstallation()}
        </div>
    )
}

export default ChoiceView;