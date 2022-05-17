import React from 'react'

export default function Sidebar(props){
	
		const noteElements = props.notes.map ( (note, index) => (
		
							<div key={note.id}	>
									<div className={ 'title ${note.id === props.currentNoteid ? "selectedNote" : "" }' } 
													  onClick={ () => props.setCurrentNoteId(note.id)}  >
											<h4 className="sidebarNotesTitle"> Notepad {index+1}</h4>
									</div>
							</div>
		
		))

		return(
				<section className="sidebar">
						<div className="sidebarHeader">
							<h3>Your Notes</h3>
							<button className="addNewNoteButton" onClick={props.newNote} >Add Notes</button>
						</div>
						{noteElements}
				
				</section>
		
		);
}