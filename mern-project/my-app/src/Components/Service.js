import axios from 'axios';
import {Button, Card, Col, Container,Row,Dropdown, Nav, Navbar} from "react-bootstrap"
import { useContext, useEffect, useState } from 'react';
import './Service.css';
import {productContext} from '../context/context';
function Service({getValues}){
    const [data,setData] = useState([]);
   
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setData(response.data);
            console.log(response.data);
        }).catch((response)=>{
            console.log(response)
        });
    },[])
    const context = useContext(productContext);
    console.log(context.state);
   const dispatch = context.dispatch;
   console.log({getValues});
//    function handleClick1(){
//         let sort1 = [...data];
//         let res = sort1.sort((a,b)=> a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
//         setData(res);
//    }
//    function handleClick2(){
//     let sort1 = [...data];
//     let res = sort1.sort((a,b)=> b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
//     setData(res);
// }
// function handleClick3(){
//     let sort1 = [...data];
//     let res = sort1.sort((a,b)=> (a.price - b.price));
//     setData(res);
// }
    return(
            <Container fluid>
            <Row className='p-control'>
                    
                    {
                        data.filter((item)=>{
                            let temp;
                            if(getValues === ''){
                                console.log(item);
                                temp= item;
                                
                            }
                            else if(item.title.toLowerCase().includes(getValues)){
                               temp= item;
                            }
                           return temp;
                        }).map((item)=>{
                            
                            return(<Col key={item.id} md={6} lg={4} xl = {3}>
                            <Card className='card'>
                                <Card.Img src={item.image} alt={item.title} style ={{width:"200px", height:'200px'}}></Card.Img>
                                <Card.Body>
                                    <Card.Subtitle style={{color:'blue'}}>{item.title}</Card.Subtitle>
                                    <Card.Subtitle style={{color:'green'}}>{item.category}</Card.Subtitle>
                                    <Card.Text style={{color:'red'}}>RS: {item.price}</Card.Text>
                                    <Card.Subtitle>Rating : {item.rating.rate}</Card.Subtitle>
                                    <br></br>
                                    <Button variant='primary' onClick={()=>{
                                        dispatch({type:'ADD',payload: item})
                                    }}>Add To Cart</Button>
                                </Card.Body>
                   </Card>
                   </Col>)
                        })
                    }
                    
                
            </Row>
            </Container>
    )
}
export default Service;