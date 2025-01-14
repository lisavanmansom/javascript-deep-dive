// Immutability: We treat the emojis array as immutable.
let emojis = ["😊", "😂", "🥺", "❤️", "😎", "🌟", "🌈", "🔥", "💡", "😜"];
const createEmojiBtn = document.getElementById('generate-btn')
const emojiForm = document.getElementById('emoji-form');
const emojiInput = document.getElementById('emoji-input');
const message = document.querySelector('.message');

// Event Handling: Attach an event listener to generate a new emoji on button click.
createEmojiBtn.addEventListener('click', function() {
  updateDisplay(getFormattedEmojiEmoji()); // Passing the callback function for formatting
});

// Defensive Programming: Add event listener to the form
emojiForm.addEventListener('submit', function(event) {
  try {
    const newEmoji = emojiInput.value.trim() // Get emoji input value

    if (!newEmoji) throw new Error('Emoji input is empty') // Handle empty input case

    // Validate if the input is a valid emoji
    if (!isEmoji(newEmoji)) throw new Error('Invalid emoji. Please enter a valid emoji') // Handle invalid emoji case

    // If no errors are thrown, add the emoji
    addEmoji(newEmoji)
    emojiInput.value = '' // Clear the input field after adding
    message.textContent = 'Emoji added successfully'
  } catch (error) {
    message.textContent = String(error.message) // Provide feedback to the user with an alert
  } finally {
    event.preventDefault() // Always prevent default form submission after handling the logic
  }
});

// Function declarations
function getRandomEmoji() {
  // Pure Functions: getRandomEmoji is a pure function; it only relies on the input and does not cause side effects.
  if (!emojis || !emojis.length) {
    throw new Error('Emojis array is empty or null');
  }
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex]; // Pure function returns a random emoji
}

function getEmojiInfo() {
  // Object Destructuring: Destructuring example - destructure an emoji object to access its value.
  const emoji = getRandomEmoji();
  return { emoji, description: "Random Emoji" }; // Return an object with the emoji and description
}

function getFormattedEmojiEmoji() {
  // First-Class Functions: Returning a function that formats the emoji with additional info.
  return (emojiObject) => `Emoji: ${emojiObject.emoji} - Description: ${emojiObject.description}`; // using a string literal for formatting the emoji + description
}

function updateDisplay(callback) {
  // Callback Functions: Pass a callback to format the emoji
  try {
    const emojiInfo = getEmojiInfo();
    const formattedEmoji = callback(emojiInfo);
    const emojiDisplay = document.getElementById('emoji-display');
    emojiDisplay.textContent = formattedEmoji;
  } catch (error) {
    console.error(error);
    const emojiDisplay = document.getElementById('emoji-display');
    emojiDisplay.textContent = 'Error: ' + error.message;
  }
}

function addEmoji(newEmoji) {
  // Immutability: Using the spread operator to create a new array with the new emoji added
  emojis = [...emojis, newEmoji]; // Spread the existing emojis and add the new emoji
}

// Function to check if a string is an emoji
function isEmoji(inputStr) {
  // Regular expression to match a wide range of emojis
  const emojiRegex = /[\p{Emoji}\u200B\uFE0F]/gu;
  return emojiRegex.test(inputStr);
}
