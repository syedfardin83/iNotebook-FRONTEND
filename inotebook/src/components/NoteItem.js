import React, { useContext } from "react";
import NoteContext from "../context/noteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNote} = context;

  const note = props.notes;
  // console.log(note);
  const title = note.title;
  const description = note.description;
  return (
    <>
      <div className="col-md-7">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default NoteItem;
