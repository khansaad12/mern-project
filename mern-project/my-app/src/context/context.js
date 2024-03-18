import {createContext, useReducer } from "react";

export const productContext = createContext();
const initialState = [];
export const ProdContext =({children})=>{
    function reducer(state,action){
        switch(action.type){
            case 'ADD':
               const temp = state.filter((item)=>{
                    return(action.payload.id ===item.id);
                })
                   if(temp.length > 0){
                     alert('this product is already exist');
                     return state;
                   } 
                   else{
                    return [...state,{...action.payload,quantity:1}];
                   }
               case 'INC':
                const temp1 = state.map((item)=>{
                    if(action.payload.id ===item.id){
                       return {...item,quantity:item.quantity+1}
                    }else{
                        return item;
                    }
            })
            return temp1;
            case 'DEC':
                const temp2 = state.map((item)=>{
                    if(action.payload.id ===item.id){
                       return {...item,quantity:item.quantity-1}
                    }else{
                        return item;
                    }
            })
            return temp2;
            case 'DEL':
                const temp3 = state.filter((item)=>{
                    return(
                        action.payload.id !== item.id
                    )
                })
                return temp3;
                case 'ASCENDING':
                    let sort1 = [...state];
                    let res1 = sort1.sort((a,b)=> a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
                    return res1;
                case 'DESCENDING':
                    let sort2 = [...state];
                    let res2 = sort2.sort((a,b)=> b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
                    // console.log(res2);
                    return res2;
                case 'LOWER':
                    let sort3 = [...state];
                    let res3 = sort3.sort((a,b)=> a.price - b.price);
                    // console.log(res3);
                    return res3;
            default:
                return state;
        }
    };
    const[state,dispatch] = useReducer(reducer,initialState);
    const info = {state,dispatch};
    return (
    <productContext.Provider value={info}>{children}</productContext.Provider>);
};