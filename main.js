const input = document.getElementById('input');
const chat = document.getElementById('chat');

// Fake intelligent replies
const responses = {
  "who are you": "I am X909 AI, your underground assistant.",
  "what is hacking": "Hacking is the art of exploring the limits of what is possible.",
  "how to hack wifi": "Sorry, I can't assist with illegal activities.",
  "hello": "Greetings, agent. Awaiting your command.",
  "help": "Available commands: who are you, what is hacking, hello, help, clear",
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const userInput = input.value.trim().toLowerCase();
    if (userInput === '') return;

    chat.innerHTML += `\n> ${userInput}`;

    if (userInput === 'clear') {
      chat.innerHTML = '';
      input.value = '';
      return;
    }

    let reply = responses[userInput] || "I am not sure about that. Try something else.";
    setTimeout(() => {
      chat.innerHTML += `\nAI: ${reply}\n`;
      input.value = '';
      chat.scrollTop = chat.scrollHeight;
    }, 500);
  }
});