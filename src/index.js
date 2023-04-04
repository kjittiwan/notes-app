class Notes {
  constructor(_title, _notes){
    this.title = _title;
    this.notes = _notes
  }
  getTitle() {
    return this.title
  }
  setTitle(_title) {
    this.title = _title;
  }
  getNotes() {
    return this.notes;
  }
  setNotes(_notes) {
    this.notes = _notes;
  }
}
const displayController = (() => {
  const addBtn = document.getElementById('addBtn');
  const formModal = document.getElementById('formModal');
  const notesForm = document.getElementById('notesForm');
  addBtn.addEventListener('click', (e) => {
    showModal(formModal);
  })
  notesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateContainerDisplay();
    hideModal(formModal, e.target);
  })
  const showModal = (modal) => {
    modal.style.display = 'block';
  }

  const hideModal = (modal, form) => {
    modal.style.display = 'none'
    form.reset();
  }
  const updateContainerDisplay = () => {
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const cardContainer = document.getElementById('cardContainer');
    const newNote = new Notes(document.getElementById('title').value, document.getElementById('note').value);
    const card = document.createElement('div');
    card.classList.add('card')
    const title = document.createElement('h2');
    title.textContent = `${newNote.getTitle()}`
    const note = document.createElement('p');
    note.textContent = `${newNote.getNotes()}`
    card.appendChild(title)
    card.appendChild(note)
    cardContainer.appendChild(card);  
    card.addEventListener('click', () => {
      document.getElementById('title').value = `${title.textContent}`
      document.getElementById('note').value = `${note.textContent}`
      showModal(formModal);
      card.remove();

    }) 
  }
})();