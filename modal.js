const chatModal = document.getElementById('chatModal');
const chatForm = document.getElementById('chatForm');


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    console.log(modal);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

}

// Open modal
chatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    chatModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  
  // Close modal
  closeModal.addEventListener('click', () => {
    chatModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
