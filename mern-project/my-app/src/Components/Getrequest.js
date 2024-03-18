import {useEffect, useState} from 'react';
// import  'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function GetRequest(){
    const abc = 'https://jsonplaceholder.typicode.com/posts';
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(abc).then((msg)=>{
                setData(msg.data)
        });
    },[])
    return(
        <>
            {
                data.map((d)=>(
                    <div style = {{border:'3px solid red'}} className='bg-success'  key={d.id}>
                        <h2>{d.id}</h2>
                        <h2>{d.title}</h2>
                        <p>{d.body}</p>
                    </div>
                ))
            } 
        </>
    )
}
export default GetRequest;