// 1. **Constructor Function**: We define a constructor function for the EmojiGenerator.
function EmojiGenerator() {
  // 2. **Encapsulation**: Store the emoji list inside the instance object.
  this.emojis = ["😊", "😂", "🥺", "❤️", "😎", "🌟", "🌈", "🔥", "💡", "😜"];
}

// 3. **Prototypal Inheritance**: We add methods to the prototype so all instances of EmojiGenerator can access them.
EmojiGenerator.prototype.getRandomEmoji = function() {
  const randomIndex = Math.floor(Math.random() * this.emojis.length); // 4. **Randomization** - Select a random emoji from the list.
  return this.emojis[randomIndex]; // Return the randomly selected emoji.
};

// 5. **Prototypal Method**: Add the updateDisplay method to the prototype for displaying the emoji.
EmojiGenerator.prototype.updateDisplay = function(emoji) {
  const emojiDisplay = document.getElementById('emoji-display');
  emojiDisplay.textContent = emoji; // Set the emoji text content to the selected emoji.
};

// 6. **Event Binding**: Add an event listener to the prototype for binding the event.
EmojiGenerator.prototype.bindEvents = function() {
  // 7. **Event Handling**: Attach an event listener to the button.
  document.getElementById('generate-btn').addEventListener('click', () => {
    const randomEmoji = this.getRandomEmoji(); // Get a random emoji.
    this.updateDisplay(randomEmoji); // Update the display with the random emoji.
  });
};

// 8. **Instantiating the Constructor Function**: Create an instance of EmojiGenerator.
const emojiGenerator = new EmojiGenerator();
emojiGenerator.bindEvents(); // Bind events to trigger the functionality.
