function addNote() {
    var noteInput = document.getElementById('note-input').value;
    if (noteInput.trim() === '') {
        alert('Please enter a note.');
        return;
    }

    var notesContainer = document.getElementById('notes-container');
    var stickyNote = document.createElement('div');
    stickyNote.className = 'sticky-note';
    
    var noteContent = document.createElement('div');
    noteContent.className = 'note-content';
    noteContent.textContent = noteInput;
    
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteNote(this);
    };
    
    stickyNote.appendChild(noteContent);
    stickyNote.appendChild(deleteButton);
    
    notesContainer.appendChild(stickyNote);
    
    // Clear the input field after adding the note
    document.getElementById('note-input').value = '';
}

function deleteNote(button) {
    var note = button.parentNode;
    note.parentNode.removeChild(note);
}


