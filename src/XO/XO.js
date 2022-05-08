
import './XO.css'
import XOGridElement from './XOGridElement.js'
import PlayerStateMent from './playerStateMent.js'
import CheckGameState from './checkGameState.js'
import ResetGame from './resetGame.js'
import {useState} from 'react'
function XO(){
    const gameSheetConst = [
        {id:0,checked:false ,whoseChecked:null},
        {id:1,checked:false ,whoseChecked:null},
        {id:2,checked:false ,whoseChecked:null},
        {id:3,checked:false ,whoseChecked:null},
        {id:4,checked:false ,whoseChecked:null},
        {id:5,checked:false ,whoseChecked:null},
        {id:6,checked:false ,whoseChecked:null},
        {id:7,checked:false ,whoseChecked:null},
        {id:8,checked:false ,whoseChecked:null},
    ]
    const loops = [...Array(9).keys()]

    const winingCases = [[0,1,2] ,[3,4,5],[6,7,8] ,[0,3,6],[1,4,7],[2,5,8] ,[0,4,8] ,[2,4,6]]
    const [currentTurn ,setCurrentTurn] = useState(true) // true for X  &&&&&&&&& false for O
    const [gameState , setGameState] = useState(0) // o for playing &&&&&&&&&& 1 for draw &&&&&&&&&& 2 for X Side Win &&&&&&&&& 3 for O Side Win
    const [gameSheet ,setGameSheet] =useState(gameSheetConst);
    const [playerMoves, setPlayerMoves] =useState([]);

    const changeCurrentTurn =(gridNUmber,e)=>{
        let currentTurnVar = currentTurn === true ? 'x' :'o'
        setCurrentTurn(!currentTurn)
        finishGame(gridNUmber ,currentTurnVar)
        PlayerMove(gridNUmber ,currentTurnVar)
        e.target.setAttribute('disabled',true)
        
        e.target.textContent = currentTurnVar
    }

    const PlayerMove=(gridNUmber ,currentTurnVar)=>{
        let playerMove=playerMoves;
        playerMove.push({place:gridNUmber ,player:currentTurnVar})
        setPlayerMoves(playerMove)
    }

    const finishGame =(gridNUmber ,currentTurnVar)=>{
        let newGameSheet = gameSheet;
        newGameSheet[gridNUmber].checked =true;
        newGameSheet[gridNUmber].whoseChecked =currentTurnVar;
        setGameSheet(newGameSheet)
        checkWining()
    }
    
    const checkWining =()=>{
        let newGameSheet= gameSheet;
        winingCases.forEach(val=>{
            if(newGameSheet[val[0]].whoseChecked!=null){
                if((newGameSheet[val[0]].whoseChecked === newGameSheet[val[1]].whoseChecked )&&( newGameSheet[val[1]].whoseChecked === newGameSheet[val[2]].whoseChecked )){
                    setGameState(newGameSheet[val[0]].whoseChecked =='x' ?2 :3);
                    diableRestGame(true)
                }
            }
        })
        let restCheckes = gameSheet.filter(val=>{
            return !val.checked 
        })
        
        restCheckes.length==0&& setGameState(1)
    }

    const diableRestGame = (state)=>{
        let gamingBoxes = document.querySelectorAll('.react-grid__item')
        gamingBoxes.forEach(val=>{
            if(state ==true){
                val.setAttribute('disabled' ,state)
            }
            if(state ==false){
                val.removeAttribute('disabled')
                val.textContent =''
                setGameSheet(gameSheetConst)
                setGameState(0);
                setCurrentTurn(true);
                setPlayerMoves([])
            }
        })
    }

    return(
        <div className='XO-container'>
            <h1>React - Tic Tac Toe</h1>
            <CheckGameState gameState ={gameState} currentTurn={currentTurn}/>
            <ResetGame diableRestGame ={diableRestGame}/>
            <div className="game-container">
                {
                    <PlayerStateMent player='x' playerMoves ={playerMoves}/>
                }
                <div className='react-grid'>
                    {
                        loops.map((loop,index)=>(
                            <XOGridElement changeCurrentTurn={changeCurrentTurn} id={loop} key={index}></XOGridElement>
                        ))
                    }
                </div>
                {
                    <PlayerStateMent player='o' playerMoves ={playerMoves}/>
                }
            </div>
        </div>        
    )
}
export default XO;