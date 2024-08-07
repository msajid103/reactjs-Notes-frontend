import React, { useEffect, useState } from 'react'
import './AddNotePage.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const EditNotePage = () => {
  const [title, settitle] = useState("")
  const [body, setbody] = useState("")
  const [category, setcategory] = useState("")
 const {slug} = useParams()

 useEffect(() => {
  axios.get(`http://127.0.0.1:8000/notes/${slug}`)
      .then(res => {
          settitle(res.data.title)
          setbody(res.data.body)
          setcategory(res.data.category)
      })
      .catch(err => {
          console.log(err.message)
      })
}, [slug])
const addUpdatedNote = (data, slug)=>{
  axios.put(`http://127.0.0.1:8000/notes/${slug}`,data)
  .then(res =>{
    toast.success("Note Updated!");
    console.log(res.data)
  })
  .catch(err =>{
    console.log(err.message)
  })
}

const navigate = useNavigate()
const handlSubmit = (e)=>{
  e.preventDefault()
  if (!title && !body && !category)  return;
  addUpdatedNote(updatedNote, slug)
  navigate('/')
}

const updatedNote = {
  title: title,
  body: body,
  category: category

}

  return (
    <form onSubmit={handlSubmit}>
    <h5>Edit Note</h5>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Title
      </label>
      <input       
        className="form-control"
        id="exampleFormControlInput1"
        value={title}
        placeholder="Enter note's title"
        onChange={(e)=> settitle(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Content
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={4}
        value={body}
        onChange={(e)=>setbody(e.target.value)}
        placeholder="Enter note's content"
      ></textarea>
    </div>

    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Note's category
      </label>
    <select value={category} onChange = {(e)=> setcategory(e.target.value)} className="form-select" aria-label="Default select example" style={{height: "40px"}}>
        <option value="">Pick a category</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
    </div>

      


    <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Update Note</button>
  </form>
  )
}

export default EditNotePage