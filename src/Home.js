import { useEffect, useState } from "react";
import Blog from './blog.js'

function Home() {


    const[list ,setList] =useState(null)
    const[pending,isPending]=useState(true)

    const deleteBlog =(id)=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(data=>data.json())
        setList(null)
        isPending(true)
        getData()
        // const newList = list.filter(val=>{
        //     return val.id != id
        // })
        // setList(newList)
    }
    const getData =() =>{
        fetch('http://localhost:8000/blogs').then(res=>res.json()).then(data=>{setList(data);isPending(false)})
    }
    useEffect(getData,[])
    return(
        <div className="blogs">
            {pending &&<div>Loading ...</div>}
        {
            list ? list.map(lis=>(
                // <Blog title={lis.title} id={lis.id} desc={lis.desc} author={lis.author}></Blog>
                <Blog blog={lis} deleteBlog={deleteBlog}></Blog>
            )):null
        }
        </div>
    )
}

export default Home;