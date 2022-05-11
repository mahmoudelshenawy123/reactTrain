import { useEffect, useState } from "react";
import Blog from './blog.js'
import axios from 'axios'

function Home() {


    const[list ,setList] =useState([])
    const[pending,isPending]=useState(true)
    const [id,setId] = useState(1)

    const deleteBlog =(id)=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(data=>data.json())
        setList([])
        isPending(true)
        getData()
        // const newList = list.filter(val=>{
        //     return val.id != id
        // })
        // setList(newList)
    }
    const getData =() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(res=>{
            // console.log(res.data)
            // setList(res);
            // isPending(false)
        }).catch(err =>{
            console.log(err)
        })
        // fetch('http://localhost:8000/blogs').then(res=>res.json()).then(data=>{setList(data);isPending(false)})
    }
    useEffect(getData,[])
    return(
        <div className="blogs">  
            {pending &&<div>Loading ...</div>}
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
        {
            list ? list.map(lis=>(
                console.log(lis),
                // <Blog title={lis.title} id={lis.id} desc={lis.desc} author={lis.author}></Blog>
                <Blog blog={lis} deleteBlog={deleteBlog}></Blog>
            )):null
        }
        </div>
    )
}

export default Home;