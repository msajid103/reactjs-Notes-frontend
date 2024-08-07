import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = () => {
  return (
    <>
    <NavBar/>
    <ToastContainer autoClose={2000}/>
    <Outlet/>
    </>
  )
}

export default MainLayouts