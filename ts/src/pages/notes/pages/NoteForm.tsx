import React, { useState } from "react";

type NoteFormProps = {
  addNote: (note: {
    id: number;
    title: string;
    content: string;
    category: string;
  }) => void;
};

export default function NotesForm({ addNote }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNOte = {
      id: Math.random(),
      title,
      content,
      category,
    };
    addNote(newNOte);
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <>
      <form className="note__form" onSubmit={handleSubmit}>
        <input
          type="radio"
          id="cat_1"
          name="categories"
          value="1"
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="cat_1">Category 1</label>
        <input
          type="radio"
          id="cat_2"
          name="categories"
          value="2"
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="cat_2">Category 2</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
