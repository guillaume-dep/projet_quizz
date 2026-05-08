const FormView = ({
    mode,
    name,
    domain,
    gameCode,
    setName,
    setDomain,
    setGameCode,
    handleCreateGame,
    handleJoinGame
  
}) => {
    return (
        <div className="formView">
            <div className="inputBloc">
            <input 
                className="input"
                placeholder="Pseudo..."
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />

            <input 
                className="input"
                placeholder="Domaine..."
                required
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)} 
                />
            
            {mode === "join" && (
                <input 
                    className="input"
                    placeholder="Code..."
                    required
                    type="text"
                    value={gameCode}
                    onChange={(e) => setGameCode(e.target.value)} 
                />
            )}
            </div>

            <div className="buttonBloc">
                {mode === "create" && <button onClick={handleCreateGame}>Create</button>}
                {mode === "join" && <button onClick={handleJoinGame}>Join</button>}
            </div>

        </div>
    )
}

export default FormView;