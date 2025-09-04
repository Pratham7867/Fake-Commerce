import React from 'react'
import VerticalNav from './component/VerticalNav'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './component/Details'
import AddProduct from './component/AddProduct'

export default function App() {
  return (
   
      <div className="">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/AddProduct" element={<AddProduct/>}></Route>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </div>
  
  )
}

