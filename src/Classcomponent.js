
import React ,{Component} from 'react'
import { Outlet, Link } from 'react-router-dom'

class Classcomponent extends Component{
    render (){

        return  (

        <>
            <h1>adsadsads</h1>
            <Link to='New'>New</Link>
            <Link to='Feature'>Feature</Link>
            <Outlet/>
        </>
        )

    }
}

export default Classcomponent