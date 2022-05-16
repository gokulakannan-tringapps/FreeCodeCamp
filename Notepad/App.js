import React from 'react'

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Split from "react-split"
import nanoid from nanoid;

import './App.css';

function App() {
        const [notes, setNotes]= React.useState(
          () => JSON.parse(localStorage.getItem("notes")) || []
        )
        const [currentNoteId, setCurrentNoteId]= React.useState(
          (notes[0] && notes[0].id) || ""
        )

        React.useEffect( () => {
            localStorage.setItem("notes", JSON.stringify(notes))
        }, [notes])

        function createNewNote() {
          const newNote ={
            id : nanoid(),
            body: "#Type your note's title ..."
          }

          setNotes( prevNotes => [newNote, ...prevNotes])
          setCurrentNoteId(newNote.id)
        }

        function updateNote(text) {
            setNotes( oldnotes => oldnotes.map(oldNote))
        }
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
