import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:1212"
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  const addNote = async (title,description,tag) =>{
    title = title[0];
    description = description[0];
    tag = tag[0];
    // console.log(title);
    // console.log(description);
    // console.log(tag);
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2ZmFmNDE4ZjEzMzQ5MTg3NmNmNzhjIn0sImlhdCI6MTY2ODI2Mzc0NX0.bykEUO1pTzitCpuxl7oo4simowVFUKrVz8jJJEmAmVc"
        
      },
      body:JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  }
  const deleteNote = async (id)=>{
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2ZmFmNDE4ZjEzMzQ5MTg3NmNmNzhjIn0sImlhdCI6MTY2ODI2Mzc0NX0.bykEUO1pTzitCpuxl7oo4simowVFUKrVz8jJJEmAmVc"
        
      }
    });
    const json = await response.json();
    console.log("Deleting "+id);
    const newNotes = notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
  }

  const editNote = async (id, title, description, tag)=>{
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2ZmFmNDE4ZjEzMzQ5MTg3NmNmNzhjIn0sImlhdCI6MTY2ODI2Mzc0NX0.bykEUO1pTzitCpuxl7oo4simowVFUKrVz8jJJEmAmVc"
          
        },
        body:JSON.stringify({title,description,tag})
      });
      const json = response.json();
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
            element.title = title;
            element.description = description;
            element.tag = tag;
        }
    }
  }
  const getNote = async () =>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2ZmFmNDE4ZjEzMzQ5MTg3NmNmNzhjIn0sImlhdCI6MTY2ODI2Mzc0NX0.bykEUO1pTzitCpuxl7oo4simowVFUKrVz8jJJEmAmVc"
        
      }
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  }
  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, getNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
