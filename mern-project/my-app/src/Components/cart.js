import { useContext, useEffect, useState } from "react";
import { Button, Row,Col, Container } from "react-bootstrap";
import { productContext} from "../context/context";

function Cart(){
    const gstate = useContext(productContext);
    const state = gstate.state;
    const dispatch = gstate.dispatch;
    var total = state.reduce((total1,item)=> {
        return total1 + (item.price * item.quantity)},0);
    
    return(
        <>
        <Container >
                    <Row style={{paddingTop: '30px'}}>
                        <Col>
                        <div>
                        {
                            state.map((item)=>{
                                return(
                                <div key={item.id}>
                                    <img src={item.image} alt={item.title} width="50px" height="50px"></img>
                                    <p>{item.category}</p>
                                    <h5>{item.price * item.quantity}</h5>
                                    <h4>{item.quantity}</h4>
                                    <Button variant="success" onClick={()=>{
                                    dispatch({type:"INC", payload:item})
                                    }}>+</Button>
                                    <Button variant="danger" onClick={()=>{
                                        if(item.quantity > 1){
                                        dispatch({type:"DEC", payload:item})
                                    }
                                    else{
                                        dispatch({type:"DEL", payload:item})
                                    }
                                    }}>-</Button>
                                    <Button variant="danger" className="pl-4px" onClick={()=>{
                                    dispatch({type:"DEL", payload:item})
                        
                                    }}>X</Button>
                             </div>
                
                );
                
            })
        }
            {state.length > 0 && 
            <h2>total price is : {total.toFixed(2)}</h2>}
        </div>
        {/* <div>
            {state.length > 0 ? state.map((item)=>{
                return(
                    <Button variant="danger" className="pl-4px" onClick={()=>{
                        dispatch({type:"DEL", payload:item})}}>total</Button>
                )
            })
            :null
            }
        </div> */}
      </Col>
                    </Row>
                    </Container>
        </>
    )
}
export default Cart;