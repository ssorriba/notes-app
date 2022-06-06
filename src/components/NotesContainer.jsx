import Note from "./Note";

const NotesContainer = ({
  notes,
  deletedView,
  deletedNotes,
  setDeletedNotes,
  deleteNote,
}) => {
  return (
    <div className="mt-8 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deletedNotes={deletedNotes}
          setDeletedNotes={setDeletedNotes}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NotesContainer;
