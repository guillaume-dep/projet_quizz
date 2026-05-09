import { STUDY_DOMAIN } from "../../../../../server/utils/studyDomain";

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
    setErrorMessage

}) => {

    const isNameValid = name.trim().length > 0;
    const isDomainValid = domain.trim().length > 0;
    const isInputGameCodeValid = inputGameCode.trim().length == 4;

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

    return (
        <div className="formView">
            <input
                className="input"
                placeholder="Pseudo..."
                required
                type="text"
                value={name}
                onChange={handleSetName}
            />

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

            {mode === "join" && (
                <input
                    className="input"
                    placeholder="Code..."
                    required
                    type="text"
                    value={inputGameCode}
                    onChange={handleSetInputGameCode}
                />
            )}

            {errorMessage && (
                <div className="error_message">
                    {errorMessage}
                </div>
            )}

            <div className="buttonBloc">
                {mode === "create" && <button onClick={handleCreateGame} disabled={!(isNameValid && isDomainValid)}>Create game</button>}
                {mode === "join" && <button onClick={handleJoinGame} disabled={!(isNameValid && isDomainValid && isInputGameCodeValid)}>Join game</button>}
            </div>

        </div>
    )
}

export default FormView;