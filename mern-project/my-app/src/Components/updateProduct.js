import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios  from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
function UpdateProduct() {
    const {id} = useParams();
    const navigate = useNavigate();
    const[product,setProduct] = useState({});
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value});
      
    }

    const getProduct = async()=>{
        try{
        const res = await axios.get(`/products/${id}`);
        console.log(res.data);
        setProduct(res.data)
        }
        catch(err){
            console.log(err);
        }
    }
    //console.log(id);
    useEffect(()=>{
        getProduct();
    },[])
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        console.log(product);
        updateProduct(product);
        
    }
    const updateProduct=async(product)=>{
      try{
         const res = await axios.patch(`/products/${id}`,product);
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
        <Form.Control type="text" placeholder="title" name='title' value={product.title}  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price" name='price' value={product.price} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>brand</Form.Label>
        <Form.Control type="text" placeholder="brand" name='brand' value={product.brand} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control type="text" placeholder="Thumbnail" name='thumbnail' value={product.thumbnail}  onChange={handleChange}/>
      </Form.Group>
      <Form.Select aria-label="Default select example" name='category' value={product.category} onChange={handleChange}>
      <option value="laptop" >Laptop</option>
      <option value="smartphone" >smartphone</option>
    </Form.Select>
    <Button variant="primary" value = "submit" type='submit'>submit</Button>
    </Form>
  );
}

export default UpdateProduct;