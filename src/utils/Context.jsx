import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import instant from './Axios'

export const ProductContext=createContext()


function Context(props) {
  const[Product,setProduct]=useState(null)

  const getProduct=async()=>{
    try{
      const {data} =await instant.get("/products"); 
      setProduct(data); 
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getProduct();
  },[])
  return (
    <ProductContext.Provider value={[Product,setProduct]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context;