import axios from "axios";
import { useState } from "react";
let x = {title:'',body:''};
function PostRequest(){
const[obj,setObj] = useState(x);
const changeHandler=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value});
    console.log(e.target.value)
}
const submitHandler=(e)=>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:obj.title,
        body:obj.body
    })
    .then((response)=>{
        console.log(response);
    }).catch((response)=>{
        console.log(response);
    });
}
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter title" name="title" value={obj.title} onChange={changeHandler}></input>
            <br></br><br></br>
            <input type="text" placeholder="enter body" name="body" value={obj.body} onChange={changeHandler}></input>
            <br></br><br></br>
            <input type="submit"></input >
        </form>
        </>
    )
}
 export default PostRequest;