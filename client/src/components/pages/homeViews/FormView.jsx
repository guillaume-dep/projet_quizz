import { STUDY_DOMAIN } from "../../../../../server/utils/studyDomain";
import { VIEWS } from "../../utils/views";

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
    setView

}) => {

    const isNameValid = name.trim().length > 0;
    const isDomainValid = domain.trim().length > 0;
    const isInputGameCodeValid = /^\d{4}$/.test(inputGameCode.trim());

    const domainOptions = Object.values(STUDY_DOMAIN);

    const handleSetName = (event) => {
        setName(event.target.value)
    }

    const handleSetDomain = (event) => {
        setDomain(event.target.value)
    }

    const handleSetInputGameCode = (event) => {
        setInputGameCode(event.target.value)
        setErrorMessage("")
    }

    const handleReturnToHome = () => {
        setView(VIEWS.HOME);
    }

    return (
        <div className="formView">

            <button onClick={handleReturnToHome}>Retour</button>
            <input
                className="input"
                placeholder="Pseudo..."
                required
                type="text"
                value={name}
                onChange={handleSetName}
            />

            {mode === "join" && (

                <div>
                    <select
                        className="select"
                        placeholder="Domaine..."
                        required
                        type="text"
                        value={domain}
                        onChange={handleSetDomain}>
                        <option value="" disabled>Choisissez un domaine...</option>
                        {domainOptions.map(domainOption => (
                            <option key={domainOption} value={domainOption}>
                                {domainOption.toLocaleLowerCase()}
                            </option>
                        ))
                        }

                    </select>

                    <input
                        className="input"
                        placeholder="Code..."
                        required
                        type="text"
                        value={inputGameCode}
                        onChange={handleSetInputGameCode}
                        maxLength={4}
                    />
                </div>

            )}

            {errorMessage && (
                <div className="error_message">
                    {errorMessage}
                </div>
            )}

            <div className="buttonBloc">
                {mode === "create" && <button onClick={handleCreateGame} disabled={!(isNameValid)}>Create game</button>}
                {mode === "join" && <button onClick={handleJoinGame} disabled={!(isNameValid && isDomainValid && isInputGameCodeValid)}>Join game</button>}
            </div>

        </div>
    )
}

export default FormView;