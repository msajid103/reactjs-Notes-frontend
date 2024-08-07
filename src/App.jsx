// import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';


const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/notes/')  // Your API endpoint
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  
  const addNote = (data) => {
    axios.post('http://127.0.0.1:8000/notes/', data)
      .then(res => {
        toast.success("A New Note Added!");
        setNotes([...notes, res.data])       
       
      })
      .catch(err => {
        console.log(err.message);
      })

  }

  const deleteNote  = (slug)=>{
    axios.delete(`http://127.0.0.1:8000/notes/${slug}`)
    .then(res =>{
      const filteredData = notes.filter(item => item.slug !== slug);  
      setNotes(filteredData)
    }) 
    .catch(err => {
        console.log(err.message)
    })
}

const editNote = (data, slug)=>{
  axios.put(`http://127.0.0.1:8000/notes/${slug}`,data)
  .then(res =>{
    const filteredData = notes.filter(item => item.slug !== slug);  
    setNotes([...filteredData,res.data])    
    console.log(res.data)
  })
  .catch(err =>{
    console.log(err.message)
  })
}
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<MainLayouts/>}>
      <Route index element={<HomePage data = {notes} />} />
      <Route path='add-note' element={<AddNotePage addNote={addNote}/>} />
      <Route path='notes/:slug' element={<NoteDetailPage deleteNote = {deleteNote} />} />
      <Route path='edit-note/:slug' element={<EditNotePage editNote = {editNote} />} />
    </Route>

  ))
  return <RouterProvider router={router} />
}

export default App