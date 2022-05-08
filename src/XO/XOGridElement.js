

function XOGridElement(props){
    const changeCurrentTurn = (e) =>{props.changeCurrentTurn(props.id,e)}
    return(
        <button className='react-grid__item' onClick={changeCurrentTurn}></button>
    )
}
export default XOGridElement;