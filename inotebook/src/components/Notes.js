import React, {useContext, useEffect} from 'react';
import NoteContext from "../context/noteContext";
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, getNote} = context;

    // code to fetch all notes from mongo
    useEffect(() => {
      getNote();
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