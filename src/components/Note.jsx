import TrashIcon from "../img/trash.svg";
import { useState } from "react";
const Note = ({ notes, setNotes, note, deletedNotes, setDeletedNotes }) => {
  const { id, title, content } = note;
  const [error, setError] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteContent, setNoteContent] = useState(content);

  const handleDelete = () => {
    const answer = confirm("Do you want to delete this note?");

    if (answer) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      const deletedNote = notes.filter((note) => note.id === id);
      setDeletedNotes(...deletedNotes, deletedNote);
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="font-poppins bg-note-turquoise mx-12 mb-6 rounded-2xl min-h-[15rem] grid grid-cols-note grid-rows-note gap-2">
      <textarea
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        className="text-note-brown bg-note-turquoise ml-3 mt-2 pl-2 pt-2 text-xl font-medium focus:outline-none resize-none leading-5"
      />

      <img
        src={TrashIcon}
        alt="trash-icon"
        className="w-9 mt-4 hover:cursor-pointer"
        onClick={handleDelete}
      />
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        className="text-note-brown bg-note-turquoise col-start-1 col-end-3 m-3 mt-0 pl-2  pr-2 font-medium focus:outline-none resize-none leading-5 "
      />
    </div>
  );
};

export default Note;
