import { useState,useEffect } from "react";
import axios  from "axios";
import Button from "react-bootstrap/esm/Button";
import {Link} from 'react-router-dom';
function ProductList(){
    const [products,setProducts] = useState([]);
    const getProducts= async()=>{
       const res = await axios.get("/products")
       console.log(res.data);
       setProducts(res.data);
    }
    useEffect(()=>{
        getProducts()
    },[]);
   
    const handleClick = async(id)=>{
      console.log(id);
      const res = await axios.delete(`/products/${id}`)
       console.log(res.data);
       if(res.data._id){
          setProducts(products.filter(p=>p._id !==res.data._id));
       }
       
    }
    return(
            
            <>
            <section className="text-black body-font overflow-hidden ">
            {products.map((product,index)=>{
                return(<div className="container px-5 py-24 mx-auto bg-gray-800" key={index}>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.thumbnail} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font  tracking-widest mb-3">{product.brand}</h2>
              <h1 className=" text-3xl title-font font-medium mb-3">{product.title}</h1>
              
              <p className="leading-relaxed text-large mb-3">Category
              </p>
            <h3 className=" text-3xl title-font font-medium mb-3">{product.category}</h3>
            <p className="leading-relaxed text-large mb-3">price
            </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl ">₹{product.price}</span>
                
                  
              </div>
              <Link className="btn btn-primary" to={`/update/${product._id}`}>update data</Link>
              <Button variant="danger" onClick={()=>handleClick(product._id)}>delete product</Button>

            </div>
          </div>
        </div>
                )})}
      </section>
            

            
            </>
    )
}
export default ProductList;