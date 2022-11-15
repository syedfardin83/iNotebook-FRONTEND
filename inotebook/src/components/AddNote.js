import React,{useContext} from 'react';
import NoteContext from "../context/noteContext";


const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
  return (
    <>
    <h2>Add a Note</h2>

<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />{" "}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
    </>
  )
}

export default AddNote