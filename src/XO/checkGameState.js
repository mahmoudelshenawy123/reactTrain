function checkGameState(props){
    const gameState = props.gameState
    const currentTurn = props.currentTurn
    return(
        <>
            {
                gameState === 0 && <h2>Next Player <span className='next-player__span'>{currentTurn ===true ? 'X' :'O'}</span> </h2>
            }
            {
                gameState === 1 && <h2>Game is Draw</h2>
            }
            {
                gameState === 2 &&  <h2>X won</h2>
            }
            {
                gameState === 3 &&  <h2>O won</h2>
            }
        </>
    )
}
export default checkGameState;