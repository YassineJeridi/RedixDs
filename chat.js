document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const closeButton = document.querySelector('.close-chat');
    const chatForm = document.getElementById('chatForm');
    
    // Toggle chat modal
    chatButton.addEventListener('click', function(e) {
      e.stopPropagation();
      chatModal.style.display = chatModal.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close modal
    closeButton.addEventListener('click', function() {
      chatModal.style.display = 'none';
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!chatModal.contains(e.target)) {
        chatModal.style.display = 'none';
      }
    });
    
    // Form submission
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(chatForm);
      const data = Object.fromEntries(formData);
      
      // Here you would send to your backend/Discord/Telegram
      console.log('Form submitted:', data);
      
      // Show confirmation
      const originalContent = chatModal.innerHTML;
      chatModal.innerHTML = `
        <div class="chat-modal-content" style="text-align: center; padding: 40px 20px">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style="color: #4BB543">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
          </svg>
          <h3>Thank you!</h3>
          <p>We'll contact you soon.</p>
          <button class="btn-send" id="closeSuccess" style="margin: 20px auto 0">
            <span>Close</span>
          </button>
        </div>
      `;
      
      document.getElementById('closeSuccess').addEventListener('click', function() {
        chatModal.style.display = 'none';
        chatModal.innerHTML = originalContent;
        chatForm.reset();
      });
    });
    function showWelcomeMessage() {
        const welcomeMsg = document.querySelector('.chat-welcome');
        if (welcomeMsg) {
          welcomeMsg.style.animation = 'none';
          void welcomeMsg.offsetWidth; // Trigger reflow
          welcomeMsg.style.animation = 'messageAppear 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
          
          // Make typing indicator stop after 3 seconds
          setTimeout(() => {
            const typing = document.querySelector('.typing-indicator');
            if (typing) typing.style.display = 'none';
          }, 3000);
        }
      }
      
      // Call this when opening modal
      chatButton.addEventListener('click', function() {
        chatModal.style.display = 'block';
        showWelcomeMessage();
      });
  });
  // Add this to your existing JavaScript
