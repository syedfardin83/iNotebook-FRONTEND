import React, {useContext, useEffect} from 'react';
import NoteContext from "../context/noteContext";
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const navigate = useNavigate();
    const context = useContext(NoteContext);
    const {notes, getNote} = context;

    // code to fetch all notes from mongo
    useEffect(() => {
      if(localStorage.getItem('token')){
        getNote();
      }else{
        navigate('/login')
      }
      console.log("Token is: "+localStorage.getItem('token'));
    }, []);
    
    // console.log(notes);
  return (
    <>
    <div className="container">
    <h2 className="my-5">Your notes</h2>
        {
            notes.map((notes)=>{
                return <NoteItem key={notes._id} notes={notes}/>;
            })
        }
    </div>
    </>
  )
}

export default Notes