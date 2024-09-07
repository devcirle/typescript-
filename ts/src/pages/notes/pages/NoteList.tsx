type NoteProps = {
  id: number;
  title: string;
  content: string;
  category: string;
};

type NoteListProps = {
  notes: NoteProps[];
  deleteNote: (id: number) => void;
};

function NoteList({ notes, deleteNote }: NoteListProps) {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="bg-[#f5f5f5] text-black p-4">
          <h2>{note.title}</h2>
          <p className="line-clamp-1 max-w-[65ch]">{note.content}</p>
          <p>{note.category}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
