import React,{useContext, useState} from 'react';
import NoteContext from "../context/noteContext";


const AddNote = () => {
  // const host = 'http://localhost:1212'
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:"general"});
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const handleChange = (e)=>{
        setNote({...note,[e.target.name]:[e.target.value]});
    }
  return (
    <>
    <h2>Add a Note</h2>
<form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Title
    </label>
    <input
      type="text"
      className="form-control"
      id="title"
      name="title"
      onChange={handleChange}
      aria-describedby="emailHelp"
    />{" "}
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">
      Description
    </label>
    <input
      type="text"
      className="form-control"
      id="description"
      name="description"
      onChange={handleChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Tag
    </label>
    <input
      type="text"
      className="form-control"
      id="tag"
      name="tag"
      onChange={handleChange}
      aria-describedby="emailHelp"
    />{" "}
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>
    Add Note
  </button>
</form>
    </>
  )
}

export default AddNote