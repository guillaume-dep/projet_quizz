const ChoiceView = ({setMode}) => {
    return (
        <div>
            <button onClick={() => setMode("create")}>Create</button>
            <button onClick={() => setMode("join")}>Join</button>
        </div>
    )
}

export default ChoiceView;