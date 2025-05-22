let currentUser = 'user1'; // Start with user1

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message === '') return;

  const chatBox = document.getElementById('chatBox');
  const messageElem = document.createElement('div');
  messageElem.className = `message ${currentUser}`;
  messageElem.textContent = message;
  chatBox.appendChild(messageElem);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  input.value = '';

  // Toggle user to simulate 2-way chat
  currentUser = currentUser === 'user1' ? 'user2' : 'user1';
}