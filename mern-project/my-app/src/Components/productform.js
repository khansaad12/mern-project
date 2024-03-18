import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function TextControlsExample() {
    const[product,setProduct] = useState({});
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value});
      
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        console.log(product);
        addProduct(product);
        
    }
    const addProduct=async(product)=>{
      try{
         const res = await axios.post("/products",product);
        console.log(res.data);
        navigate("/");

        // setProduct(res.data);
      }
       catch(err){
        console.log(err);
       }
        
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" name='title'   onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price" name='price'  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>brand</Form.Label>
        <Form.Control type="text" placeholder="brand" name='brand'  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control type="text" placeholder="Thumbnail" name='thumbnail'   onChange={handleChange}/>
      </Form.Group>
      <Form.Select aria-label="Default select example" name='category'  onChange={handleChange}>
      <option value="laptop" >Laptop</option>
      <option value="smartphone" >smartphone</option>
    </Form.Select>
    <Button variant="primary" value = "submit" type='submit'>submit</Button>
    </Form>
  );
}

export default TextControlsExample;