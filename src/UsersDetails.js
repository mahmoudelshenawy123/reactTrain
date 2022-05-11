import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

function UsersDetails(){
    const parm = useParams()
    const [searchParams,setSearchParams] =useSearchParams()
    const chechFilter=()=>{
        return searchParams.get('filter') ==='active'
    }
    const setSearch=()=>{
        setSearchParams({filter:'active',quesy:'dqwe12321'})
    }
    const resetSearch=()=>{
        setSearchParams('')
    }
    return (
        <div>
            user is {parm.id}
            {chechFilter()&& <h1>activeeee</h1>}
            <button onClick={setSearch}>active filter</button>
            <button onClick={resetSearch}>reset filter</button>
        </div>
    )
}
export default UsersDetails;