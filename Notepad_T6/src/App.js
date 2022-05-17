import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import Split from "react-split"
import Editor from './components/Editor';
import {nanoid} from 'nanoid'

export default function App(){
		const [notes, setNotes]=React.useState( () => JSON.parse(localStorage.getItem("Mynotes") ) || [])
		
		const [currentNoteId, setCurrentNoteId]=React.useState( (notes[0] && notes[0].id) || ""	 )
		
		React.useEffect(() => {
        localStorage.setItem("Mynotes", JSON.stringify(notes))
		}, [notes])
		
		function createNewNote(){
					const newNote={ id:nanoid(), body:"Welcome to Richie Notes..." }
					setNotes( prevNotes => [newNote, ...prevNotes])
					setCurrentNoteId(newNote.id)
		}
		
		function findCurrentNote(){
					return notes.find( note => { return note.id === currentNoteId }) || notes[0]
		}
		
		function updateNote(text){
		
			setNotes( oldNotes => oldNotes.map( oldNote => { return oldNote.id === currentNoteId ? { ...oldNote, body:text} : oldNote
			}) )
		
		}
		
		return(
				
				<main>
				{
					notes.length > 0 ?
						<Split sizes={[25,75]} direction="horizontal" className="split">
							<Sidebar notes={notes} currentNote={findCurrentNote()} setCurrentNoteId={setCurrentNoteId}	newNote={createNewNote} />
							{
								currentNoteId && 
								notes.length > 0 &&
								<Editor currentNote={findCurrentNote()}  updateNote={updateNote}/>
							}
						</Split>
					:
						<div className="welcomePage">
							<h1>Welcome to Richie Notes</h1>
							<button className="createNoteButton" onClick={createNewNote} >Create a Note </button>
						</div>
						
				}
				</main>
		);
}