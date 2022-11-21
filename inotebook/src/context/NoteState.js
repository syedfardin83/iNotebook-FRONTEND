import NoteContext from "./noteContext";
import React, { useState } from "react";
import toast from "react-hot-toast";


const NoteState = (props) => {
  const host = "http://localhost:1212"
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  const addNote = async (title,description,tag) =>{
    title = title[0];
    description = description[0];
    tag = tag[0];
    if(title===undefined || description===undefined){
      toast.error('Title or description cannot be blank.')
    }
    // console.log(title);
    // console.log(description);
    // console.log(tag);
    else{
      if(tag===undefined) tag="general"
      
      const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
        
      },
      body:JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    setNotes(notes.concat(json));
    toast.success('Note Added.');
  }
  }
  const deleteNote = async (id)=>{
    try{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
          
        }
      });
      const json = await response.json();
      console.log("Deleting "+id);
      const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
      toast.success('Note Deleted');
    }catch(e){
      toast.error('Delete note failed.')
    }
  }

  const editNote = async (id, title, description, tag)=>{
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
          
        },
        body:JSON.stringify({title,description,tag})
      });
      // const json = response.json();
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
        'auth-token':localStorage.getItem('token')
        
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
