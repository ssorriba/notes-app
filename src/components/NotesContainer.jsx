import Note from "./Note";

const NotesContainer = () => {
  return (
    <div className="mt-8 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <Note />
      <Note />
      {/* {notes.map((note) => (
        <Note key={note.id} notes={notes} setNotes={setNotes} note={note} />
      ))} */}
    </div>
  );
};

export default NotesContainer;
