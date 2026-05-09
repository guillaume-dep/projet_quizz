const FormView = ({
    mode,
    name,
    domain,
    inputGameCode,
    setName,
    setDomain,
    setInputGameCode,
    handleCreateGame,
    handleJoinGame

}) => {

    const isNameValid = name.trim().length > 0;
    const isDomainValid = domain.trim().length > 0;
    const isInputGameCodeValid = inputGameCode.trim().length == 4;

    const handleSetName = (event) => {
        setName(event.target.value)
    }

    const handleSetDomain = (event) => {
        setDomain(event.target.value)
    }

    return (
        <div className="formView">
            <div className="inputBloc">
                <input
                    className="input"
                    placeholder="Pseudo..."
                    required
                    type="text"
                    value={name}
                    onChange={handleSetName}
                />

                <input
                    className="input"
                    placeholder="Domaine..."
                    required
                    type="text"
                    value={domain}
                    onChange={handleSetDomain}
                />

                {mode === "join" && (
                    <input
                        className="input"
                        placeholder="Code..."
                        required
                        type="text"
                        value={inputGameCode}
                        onChange={(e) => setInputGameCode(e.target.value)}
                    />
                )}
            </div>

            <div className="buttonBloc">
                {mode === "create" && <button onClick={handleCreateGame} disabled={!(isNameValid && isDomainValid)}>Create game</button>}
                {mode === "join" && <button onClick={handleJoinGame} disabled={!(isNameValid && isDomainValid && isInputGameCodeValid)}>Join game</button>}
            </div>

        </div>
    )
}

export default FormView;