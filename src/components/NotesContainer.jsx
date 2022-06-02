import Note from "./Note";

const NotesContainer = ({
  notes,
  setNotes,
  deletedView,
  deletedNotes,
  setDeletedNotes,
}) => {
  return (
    <div className="mt-8 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {!deletedView
        ? notes.map((note) => (
            <Note
              key={note.id}
              notes={notes}
              setNotes={setNotes}
              note={note}
              deletedNotes={deletedNotes}
              setDeletedNotes={setDeletedNotes}
            />
          ))
        : deletedNotes.map((note) => (
            <Note
              key={note.id}
              notes={notes}
              setNotes={setNotes}
              note={note}
              deletedNotes={deletedNotes}
              setDeletedNotes={setDeletedNotes}
            />
          ))}
    </div>
  );
};

export default NotesContainer;
