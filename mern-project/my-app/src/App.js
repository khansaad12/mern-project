
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import Form  from './Components/form';
// import Table from './Components/table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Edit from './Components/edit';

// import Redux from './Components/reduxtool';
// import Carousal from './Components/caras';
// import NavFunction from './Components/nav';
// import Service from './Components/Service';
// import About from './Components/about';
// import Cart from './Components/cart';
// import BasicExample from './Components/navbar';
// import Example from './Components/navbaro';
// import Back from './Components/background';
// import Foot from './Components/footer';
// import MemoHook from './Components/usememo';

// function App() {
//   const[values,setValues]=useState('');
//   function getSearch(values){
//        setValues(values);
//        console.log(values);
//   }
//   return (
    
//     // <>
//     // {/* <Example></Example>
//     // <BasicExample></BasicExample>
//     // <Back></Back>
//     // <Foot></Foot> */}
//     // <MemoHook></MemoHook>
//     // </>
    
//   <BrowserRouter >
  
//     <NavFunction get = {getSearch}></NavFunction>
    
   
//     <Routes>
//     <Route path='/about' element = {<About></About>}></Route>
//     <Route path='/Service' element = {<Service getValues = {values}></Service>}></Route>
//     <Route path='/Cart' element = {<Cart></Cart>}></Route>
//     </Routes>
    
//     </BrowserRouter> 
   
    
    
   
//     // <div className="container">
//     //   <BrowserRouter>   
//     //     <Routes>
//     //       <Route path='/' element = {<Table></Table>}></Route>
//     //       <Route path='/form' element = {<Form></Form>}></Route>  
//     //       <Route path='/update' element = {<Edit></Edit>}></Route>
//     //   </Routes>
//     //   </BrowserRouter>
 
//     // </div>
//   );
// }

// export default App;
import Carousal from './Components/caras';
import ProductList from './Components/productlist';
import TextControlsExample from './Components/productform';
import UpdateProduct from './Components/updateProduct';
import PageNotFound from './Components/pageNotFound';
function App(){
  return(
    <>
     <BrowserRouter>   
    <Routes>
     <Route path='/' element = {<ProductList></ProductList>}></Route>
     <Route path='/form' element = {<TextControlsExample></TextControlsExample>}></Route>
     <Route path='/update/:id' element = {<UpdateProduct></UpdateProduct>}></Route>
     <Route path='*' element = {<PageNotFound></PageNotFound>}></Route>
   </Routes>
     </BrowserRouter>
      {/* <Carousal></Carousal> */}
    </>
  )
}
export default App;