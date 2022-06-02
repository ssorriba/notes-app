import { useState } from "react";

import Nav from "./components/Nav";
import NewNote from "./components/NewNote";
import NotesContainer from "./components/NotesContainer";

function App() {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [deletedView, setDeletedView] = useState(false);

  return (
    <div>
      <Nav deletedView={deletedView} setDeletedView={setDeletedView} />
      <NewNote notes={notes} setNotes={setNotes} />
      {notes.length > 0 ? (
        <NotesContainer
          notes={notes}
          setNotes={setNotes}
          deletedView={deletedView}
          deletedNotes={deletedNotes}
          setDeletedNotes={setDeletedNotes}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
