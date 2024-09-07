import React, { useEffect, useState } from "react";
import NoteList from "./NoteList";
import NotesBtn from "../components/NotesBtn";
import NotesForm from "./NoteForm";
import { Link } from "react-router-dom";

type Note = { id: number; title: string; content: string; category: string };

function Note() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Link to={"/"} className="hover:text-red-500">
        Back to Home
      </Link>
      <section className="grid grid-cols-2 mx-auto max-w-[96rem]">
        <section>
          <h1>All notes</h1>
          {notes.length !== 0 ? (
            <NoteList notes={notes} deleteNote={deleteNote} />
          ) : (
            <p className="text-center text-[0.75rem]">
              <span className="text-[1rem]">No notes</span>
              Tap the Add button to create a note
            </p>
          )}
        </section>
        <NotesForm addNote={addNote} />
      </section>
    </div>
  );
}

export default Note;
