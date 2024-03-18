import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit(){
const[obj,setObj] = useState({id : 0,name:'',email:'',age:0});
const navigate = useNavigate();
const handleChange=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value});
}
useEffect(()=>{
    setObj({id:localStorage.getItem('id'),
            name :localStorage.getItem('name'),
            age: localStorage.getItem('age'),
            email:localStorage.getItem('email')})
},[]);
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`https://64e63f3f09e64530d17fc936.mockapi.io/crud/${obj.id}`,{
        ename:obj.name,
        eage:obj.age,
        eemail:obj.email
    }).then(()=>{
        navigate('/');
    }).catch((response)=>{
        console.log(response);
    });
}
    return(
        <>
        <div className="Row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="bg-secondary p-4 text-center">Update Data</h2>
                    </div>
                    <div className="form-group mb-2">
                        <label>Enter Name</label>
                        <input type="text" name="name" value={obj.name} placeholder="User name" className="form-control" onChange={handleChange}></input>
                    </div>
                    <div className="form-group mb-2">
                        <label>Enter Age</label>
                        <input type="text" name="age" value={obj.age} placeholder="User Age" className="form-control" onChange={handleChange}></input>
                    </div>
                    <div className="form-group mb-2">
                        <label>Enter Email</label>
                        <input type="text" name="email" value={obj.email} placeholder="User Email" className="form-control" onChange={handleChange}></input>
                    </div>
                    <div className="d-grid">
                    <button className="btn btn-secondary mt-2 mb-3 border radius rounded-pill">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Edit;