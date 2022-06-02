import { useState } from "react";
import { generarId } from "../helpers/index";

import SaveIcon from "../img/save.svg";
import GearIcon from "../img/gear.svg";

const NewNote = ({ notes, setNotes }) => {
  const [error, setError] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noteTitle === "" || noteContent === "") {
      setError(true);
      return;
    }

    setError(false);

    const noteObject = {
      id: generarId(),
      title: noteTitle,
      content: noteContent,
    };

    console.log(noteObject);

    setNotes([...notes, noteObject]);
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <div className="border-4 rounded-2xl border-slate-700 m-5 mt-10 h-56 font-poppins sm:mx-32 lg:mx-40">
      <form className="flex flex-col justify-evenly" onSubmit={handleSubmit}>
        <input
          value={noteTitle}
          className="text-xl text-note-brown font-medium m-5 focus:outline-none "
          placeholder="My First Note"
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          value={noteContent}
          className="m-5 mt-0 text-note-brown focus:outline-none resize-none h-20 font-medium"
          placeholder="Your text here"
          onChange={(e) => setNoteContent(e.target.value)}
        />
        <div className="flex justify-end">
          <button type="submit">
            <img src={SaveIcon} alt="icono-gasto" className="w-7 m-3"></img>
          </button>
          <button>
            <img
              src={GearIcon}
              alt="icono-gasto"
              className="w-7 m-3 ml-1"
            ></img>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
