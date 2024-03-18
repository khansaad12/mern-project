import {  useMemo, useState } from "react";
import { Button } from "react-bootstrap";

function MemoHook(){
    const[num,setNum]= useState(0);
    const[value,setValue]= useState(0);
    function handleClick1(){
        
        setNum(num-1);
    }
   
   let momoized = useMemo(()=>{
    let i = 0;
    while(i<1000000000){
        i++;
    }
    return value % 2===0;
   },[value])
   
   function handleClick(){
        setValue(value+1);
   }
    return(
        <>
        <h2> hel </h2>
        <Button variant="success" onClick={handleClick}>increase {value}</Button>
        <p>{momoized? 'even':'odd'}</p>
        <Button variant="success" onClick={handleClick1}>decrease {num}</Button>
        </>
    )
}
export default MemoHook;