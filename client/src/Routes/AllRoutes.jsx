import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../componets/Login'
import Notes from '../componets/Notes'
import Register from '../componets/Register'
 
function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Notes/>}/>
    </Routes>
      
    </>
  )
}

export default AllRoutes
