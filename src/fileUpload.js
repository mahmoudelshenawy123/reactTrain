import {useState} from 'react'
import { useNavigate } from 'react-router';
function FileUpload(){
    // const [fileUploaded,setFileUploaded]= useState(null)
    const [fileUploaded,setFileUploaded]= useState(null)
    const navigat = useNavigate()

    const FileHandler =(e)=>{
        // console.log()
        const fd =new FormData();
        fd.append('image',e.target.files[0] ,e.target.files[0].name)
        console.log(fd)
        let url =URL.createObjectURL(e.target.files[0])
        setFileUploaded(url)
    }
    const navigate = ()=>{
        navigat('/about' ,{replace:true})
    }
    return (
        <div>
            <input type='file' onChange={(e)=>{FileHandler(e)}}/>
            <img src={fileUploaded} alt='adasd'/>
            <button className='' onClick={navigate}>Navugate</button>
        </div>
    )
}
export default FileUpload;