import { STUDY_DOMAIN } from "../../../../../server/utils/studyDomain";
import { DIFFICULTY } from "../../utils/difficulty.js"
import styles from "../../../style/formView.module.css";

const FormView = ({
    mode,
    name,
    domain,
    inputGameCode,
    setName,
    setDomain,
    setInputGameCode,
    handleCreateGame,
    handleJoinGame,
    errorMessage,
    setErrorMessage,
    setMode,
    difficulty,
    setDifficulty,
    nbQuestions,
    setNbQuestions
}) => {

    const isNameValid = name.trim().length > 0;
    const isDomainValid = domain.trim().length > 0;
    const isInputGameCodeValid = /^\d{4}$/.test(inputGameCode.trim());

    const domainOptions = Object.values(STUDY_DOMAIN);

    const handleSetName = (event) => {
        setName(event.target.value);
    };

    const handleSetDomain = (event) => {
        setDomain(event.target.value);
    };

    const handleSetInputGameCode = (event) => {
        setInputGameCode(event.target.value);
        setErrorMessage("");
    };

    const handleReturnToHome = () => {
        setMode(null);
        setErrorMessage("");
        setInputGameCode("");
        setName("");
        setDomain("");
        setDifficulty(null)
    };

    const handleSetDifficulty = (event) => {
        setDifficulty(event.target.value)
    }

    const handleSetNbQuestions = (event) => {
        setNbQuestions(Number(event.target.value))
    }

    const renderJoinFields = () => {
        if (mode !== "join") return null;

        return (
            <>
                <div className={styles.coolinput}>
                    <label className={styles.label}>Domaine</label>

                    <select
                        className={styles.select}
                        value={domain}
                        onChange={handleSetDomain}
                    >
                        <option value="" disabled>
                            Choisissez un domaine...
                        </option>

                        {domainOptions.map((domainOption) => (
                            <option
                                key={domainOption}
                                value={domainOption}
                            >
                                {domainOption.toLowerCase()}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.coolinput}>
                    <label className={styles.label}>Code</label>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Code à 4 chiffres..."
                        maxLength={4}
                        value={inputGameCode}
                        onChange={handleSetInputGameCode}
                    />
                </div>
            </>
        );
    };

    const renderSubmitButton = () => {
        if (mode === "create") {
            return (
                <button
                    onClick={handleCreateGame}
                    disabled={!isNameValid || difficulty === null}
                    className={styles.submitButton}
                >
                    Create game
                </button>
            );
        }

        if (mode === "join") {
            return (
                <button
                    className={styles.submitButton}
                    onClick={handleJoinGame}
                    disabled={!(
                        isNameValid &&
                        isDomainValid &&
                        isInputGameCodeValid
                    )}
                >
                    Join game
                </button>
            );
        }

        return null;
    };

    const renderDifficultyBtn = () => {
        if (mode === "create") {
            return (
                <>
                    <button
                        className={styles.btnDifficulty}
                        onClick={handleSetDifficulty}
                        value={DIFFICULTY.EASY}
                        disabled={difficulty !== null}
                        required>
                        Easy
                    </button>

                    <button
                        className={styles.btnDifficulty}
                        onClick={handleSetDifficulty}
                        value={DIFFICULTY.MEDIUM}
                        disabled={difficulty !== null}>
                        Medium
                    </button>

                    <button
                        className={styles.btnDifficulty}
                        onClick={handleSetDifficulty}
                        value={DIFFICULTY.HARD}
                        disabled={difficulty !== null}>
                        Hard
                    </button>
                </>
            )
        }
    }

    const renderNbQuestionBtn = () => {
        if (mode === "create") {
            return (
                <input
                    type="number"
                    min="1"
                    max="15"
                    value={nbQuestions}
                    onChange={handleSetNbQuestions}
                    className={styles.nbQuestionsInput}
                />
            )
        }
    }

    const renderError = () => {
        if (!errorMessage) return null;

        return (
            <div className={styles.error_message}>
                {errorMessage}
            </div>
        );
    };

    return (
        <div className={styles.formView}>

            <button
                className={styles.backButton}
                onClick={handleReturnToHome}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className={styles.backIcon}
                >
                    <path d="M8.83 6a30.23 30.23 0 0 0-5.62 5.406A.949.949 0 0 0 3 12m5.83 6a30.233 30.233 0 0 1-5.62-5.406A.949.949 0 0 1 3 12m0 0h18" />
                </svg>

                Retour
            </button>

            <div className={styles.coolinput}>
                <label className={styles.label}>Pseudo</label>

                <input
                    className={styles.input}
                    type="text"
                    placeholder="..."
                    value={name}
                    onChange={handleSetName}
                />
            </div>

            {renderJoinFields()}

            {renderError()}

            {renderDifficultyBtn()}
            {renderNbQuestionBtn()}
            <div className={styles.buttonBloc}>
                {renderSubmitButton()}
            </div>

        </div>
    );
};

export default FormView;