function playerStateMent(props){
    const playerMovess = props.playerMoves;
    const player = props.player
    return (
        <div  className='XO-player'>
            Player: {player}
            <div>
                { 
                    playerMovess &&playerMovess.filter(val=>val.player==player).map((move,index)=>(
                        <p key={index}>{index} :Move#{JSON.parse(JSON.stringify(move)).place}</p>
                    ))
                }
            </div>
        </div>
    )
}
export default playerStateMent;