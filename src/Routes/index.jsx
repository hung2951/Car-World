import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from '../components/Layouts'
import HomePage from '../components/Pages/home/HomePage'

const RootRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
        </Route>
    </Routes>
  )
}

export default RootRoutes
