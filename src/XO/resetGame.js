function resetGame(props){
    const diableRestGame = ()=>{ props.diableRestGame(false)}
    return (
        <button onClick={diableRestGame}>Game Rest</button>
    )
}

export default resetGame;