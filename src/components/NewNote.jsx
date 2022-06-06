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

    setNotes([...notes, noteObject]);
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <div className="border-[5px] bg-alice-blue rounded-2xl border-yale-blue m-5 mt-14 h-56 font-poppins sm:min-w-80 lg:mx-auto lg:max-w-[61rem] lg:min-h-[15rem] drop-shadow-xl">
      <form className="flex flex-col justify-evenly" onSubmit={handleSubmit}>
        <input
          value={noteTitle}
          className="bg-alice-blue text-xl text-dark-jungle-green font-medium m-5 focus:outline-none "
          placeholder="My First Note"
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          value={noteContent}
          className="bg-alice-blue m-5 mt-0 text-dark-jungle-green focus:outline-none resize-none h-20 font-medium"
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
