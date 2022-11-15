import React from "react";

const NoteItem = (props) => {
  const note = props.notes;
  console.log(note);
  const title = note.title;
  const description = note.description;
  return (
    <>
    <div className="col-md-7">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda provident quibusdam eos fuga, minima nam consequuntur, mollitia, fugit deserunt porro vitae blanditiis nemo. Voluptatum velit repellat veniam laborum culpa suscipit?</p>
          <i class="fa-solid fa-trash mx-2"></i>
          <i class="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
      <br />
    </>
  );
};

export default NoteItem;
