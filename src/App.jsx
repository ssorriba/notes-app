import { useState } from "react";

import Nav from "./components/Nav";
import NewNote from "./components/NewNote";
import NotesContainer from "./components/NotesContainer";

function App() {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [deletedView, setDeletedView] = useState(false);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Nav deletedView={deletedView} setDeletedView={setDeletedView} />
      {!deletedView ? <NewNote notes={notes} setNotes={setNotes} /> : null}

      {notes.length > 0 && deletedView == false ? (
        <NotesContainer
          notes={notes}
          setNotes={setNotes}
          deletedView={deletedView}
          deletedNotes={deletedNotes}
          setDeletedNotes={setDeletedNotes}
          deleteNote={deleteNote}
        />
      ) : null}

      {}
    </div>
  );
}

export default App;
