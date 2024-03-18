import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
function Table(){
const[data,setData] = useState([]);
function getdata(){
    axios.get('https://64e63f3f09e64530d17fc936.mockapi.io/crud')
    .then((response)=>{
        setData(response.data);
    }).catch((response)=>{
        console.log(response);
    });
}
const handleClick=(id)=>{
    axios.delete(`https://64e63f3f09e64530d17fc936.mockapi.io/crud/${id}`)
    .then(()=>{
        getdata();
    }).catch((response)=>{
        console.log(response)
    });
    
}
const handleUpdate=(id,name,age,email)=>{
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('email',email);
}
useEffect(()=>{
    getdata();
},[])
    return(
        <>
        <div className=" Row">
            <div className="col-md-12">  
            <div className="mb-4 mt-3">
                <Link to='/form'><button className="btn btn-success">Create</button></Link>
            </div>  
            <table className="table table-bordered table-striped table-dark table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            data.map((item)=>(
                                <tr key={item.id}>
                                     <td>{item.id}</td>
                                    <td>{item.ename}</td>
                                    <td>{item.eage}</td>
                                    <td>{item.eemail}</td>
                                    <td><Link to='/update'> <button className="btn btn-info" onClick={()=>handleUpdate(item.id,item.ename,item.eage,item.eemail)}>edit</button></Link></td>
                                    
                                    <td><button className="btn btn-danger" onClick={()=>{if(window.confirm('are you sure you want to delete this record?')){handleClick(item.id)}}}>Delete</button></td>
                                </tr>
                            ))
                        }
                       
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}
export default Table;