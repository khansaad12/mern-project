// my api link
// https://64e63f3f09e64530d17fc936.mockapi.io/crud

import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
function Form(){
const[obj,setObj]= useState({name:'',email:'',age:0});
const navigate = useNavigate();
const handleChange=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://64e63f3f09e64530d17fc936.mockapi.io/crud',{
        ename:obj.name,
        eage:obj.age,
        eemail:obj.email
    }).then((response)=>{
        window.alert('data inserted Successfully')
        console.log(response.data)
         navigate('/');
    }).catch((response)=>{
        console.log(response.data);
    });
    setObj({name:'',email:'',age:0});
}
    return(
        
        <div className=" Row">
            <div className="col-md-6">  
            <div className="mb-4 mt-3">
                <Link to='/'><button className="btn btn-success">Read</button></Link>
            </div>      
            <form className="bg-light" variant = 'dark' onSubmit={handleSubmit}>
            <h2 className="bg-success text-center p-4">User Data</h2>
            <div className="form-group">
                <label>Enter Name</label>
                <input type="text" name="name" placeholder="user name" className="form-control" value={obj.name}  onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label>Enter Age</label>
                <input type="number" name='age' placeholder="user age" className="form-control" value={obj.age} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label>Enter Email</label>
                <input type="email" name="email" placeholder="user email" className="form-control" value={obj.email} onChange={handleChange}></input>
            </div>
            <div className="d-grid ">
            <button className="bg-success border radius rounded-pill mb-3 mt-2"> submit</button>
            </div>
        </form>
        </div>
        </div>
        
    )
}
export default Form;