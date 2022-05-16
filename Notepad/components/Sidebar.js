import React from "react"

export default function Sidebar(props){
    
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
                <div className={ 'title ${ note.id === props.currentNote.id ? "selected-note" : ""}' } 
                        onClick= { () => props.setCurrentNoteId(note.id) }>

                    <h3 className="text-snippet"> Notepad {index+1} </h3>
                </div>
        </div>
    ))
    
    return(
            <section className="pane sidebar">
                <div className="sidebar_header">
                    <h4>Notes</h4>
                    <button className="new_note" onClick={props.newNote}> + </button>
                </div>
                {noteElements}
            </section>

    );
}