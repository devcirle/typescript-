import React from "react";

type NotesBtnProps = {
  text: string;
};

export default function NotesBtn({ text }: NotesBtnProps) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
