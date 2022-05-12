import { useState } from "react";

function FormSubmit(){
    let userData ={username:'',password:'',desc:'',frames:'react'}
    const [formData,setFormData] =useState(userData)
    const changeFormData = (e)=>{
        setFormData(prevState => ({
            ...prevState,
            [`${e.target.getAttribute('data-type')}`]: e.target.value
        }));
    }
    const submitForm =(e)=>{
        e.preventDefault();
        console.log(formData)

    }
    return(
        <div>
            <div>
                <label>username</label>
                <input type='text' value={formData.username} data-type='username' onChange={(e)=>{changeFormData(e)}}/>
            </div>
            <div >
                <label>password</label>
                <input type='password' value={formData.password} data-type='password' onChange={(e)=>{changeFormData(e)}} />
            </div>
            <div >
                <label>desc</label>
                <textarea value={formData.desc} data-type='desc' onChange={(e)=>{changeFormData(e)}}></textarea>
            </div>
            <div >
                <label>frames</label>
                <select value={formData.frames} data-type='frames' onChange={(e)=>{changeFormData(e)}}>
                    <option value='vue'>
                        vue
                    </option>
                    <option value='react'>
                        react
                    </option>
                    <option value='angular'>
                        angular
                    </option>
                </select>
            </div>
            <button type="submit" onClick={(e)=>{submitForm(e)}}>submit</button>
        </div>
    )
}

export default FormSubmit;