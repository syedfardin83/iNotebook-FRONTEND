import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6370cf7034c33a1da40d54d6",
      user: "636faf418f133491876cf78c",
      title: "New Title",
      description: "This is my description",
      tag: "new",
      date: "2022-11-13T11:05:20.238Z",
      __v: 0,
    },
    {
      _id: "637398720bb15e569f63edb1",
      user: "636faf418f133491876cf78c",
      title: "This Title",
      description: "Very amazing description",
      tag: "new",
      date: "2022-11-15T13:47:30.250Z",
      __v: 0,
    },{
        _id: "637398720bb15e569f63edb1",
        user: "636faf418f133491876cf78c",
        title: "This Title",
        description: "Very amazing description",
        tag: "new",
        date: "2022-11-15T13:47:30.250Z",
        __v: 0,
      },{
        _id: "637398720bb15e569f63edb1",
        user: "636faf418f133491876cf78c",
        title: "This Title",
        description: "Very amazing description",
        tag: "new",
        date: "2022-11-15T13:47:30.250Z",
        __v: 0,
      },{
        _id: "637398720bb15e569f63edb1",
        user: "636faf418f133491876cf78c",
        title: "This Title",
        description: "Very amazing description",
        tag: "new",
        date: "2022-11-15T13:47:30.250Z",
        __v: 0,
      },{
        _id: "637398720bb15e569f63edb1",
        user: "636faf418f133491876cf78c",
        title: "This Title",
        description: "Very amazing description",
        tag: "new",
        date: "2022-11-15T13:47:30.250Z",
        __v: 0,
      },{
        _id: "637398720bb15e569f63edb1",
        user: "636faf418f133491876cf78c",
        title: "This Title",
        description: "Very amazing description",
        tag: "new",
        date: "2022-11-15T13:47:30.250Z",
        __v: 0,
      },
  ];
  
  const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
