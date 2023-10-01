const chatOutput = document.getElementById('chat-output');
const messageInput = document.getElementById('message-input');

function displayMessage(message) {
  const p = document.createElement('p');
  p.textContent = message;
  chatOutput.appendChild(p);
}

function sendMessage() {
  const message = messageInput.value;
  displayMessage(`You: ${message}`);
  // Here you would send the message to the other user using WebSocket or a server.
  // For simplicity, we'll just log it.
  console.log('Sent message:', message);
  messageInput.value = '';
}