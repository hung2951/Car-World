import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from '../components/Layouts'
import HomePage from '../components/Pages/home/HomePage'
import ProductDetail from '../components/Pages/home/products/product'

const RootRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/:id' element={<ProductDetail/>}/>
        </Route>
    </Routes>
  )
}

export default RootRoutes
