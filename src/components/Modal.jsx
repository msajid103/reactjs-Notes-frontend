import React from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Modal = ({handlIsopen, deleteNote}) => {

    const navigate = useNavigate();
   const handlDeleteNote = ()=>{
    deleteNote()
    navigate('/')
    toast.success("Note Deleted Successfully!"); 
   }
  return (
    <div className="c-modal-overlay">
      <div className="c-modal">
        <button className="close-button" onClick={handlIsopen}>×</button>
        <div className="c-modal-content">
          <h2>Delete Note</h2>
          <p>Are you you want to Delete this note?</p>
          <span className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={handlDeleteNote}>Delete</button>
            <button className="btn btn-primary"
            onClick={handlIsopen}
            >Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;