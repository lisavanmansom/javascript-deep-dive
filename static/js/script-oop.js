class EmojiGenerator {
  constructor() {
    // 1. **Encapsulation**: Store the emojis array in the instance.
    this.emojis = ["😊", "😂", "🥺", "❤️", "😎", "🌟", "🌈", "🔥", "💡", "😜"]

    // 9. **Constructor Function Instantiation**: Bind events directly in the constructor.
    document.getElementById('generate-btn').addEventListener('click', this) // Pass 'this' for handleEvent
  }

  // 2. **Constructor Functions & `this`**: `this` is used to refer to the instance of the object.
  getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * this.emojis.length)
    return this.emojis[randomIndex]
  }

  // 3. **Object Destructuring**: Destructuring example - extract emoji and its description from an object.
  getEmojiWithInfo() {
    const emoji = this.getRandomEmoji()
    return { emoji, description: "Random Emoji" } // Return an object with the emoji and description
  }

  // 4. **Returning Functions**: Return a formatted string in a method.
  getFormattedEmoji() {
    return (emojiObject) => `Emoji: ${emojiObject.emoji} - Description: ${emojiObject.description}`
  }

  // 5. **Callback Functions**: Allow a callback to format the emoji.
  updateDisplay(callback) {
    const emojiObject = this.getEmojiWithInfo()
    const formattedEmoji = callback(emojiObject)
    const emojiDisplay = document.getElementById('emoji-display')
    emojiDisplay.textContent = formattedEmoji
  }

  // 6. **Binding (`this`)**: `this` is bound to the instance of the EmojiGenerator class.
  handleEvent(event) {
    if (event.type === 'click') {
      // 7. **Short-Circuiting**: Only run updateDisplay if emojis exist.
      if (!this.emojis.length) return // Early return if no emojis
      this.updateDisplay(this.getFormattedEmoji()) // Passing the callback function for formatting
    }
  }
}

// 9. **Constructor Function Instantiation**: Create an instance of EmojiGenerator, which automatically binds events.
const emojiGenerator = new EmojiGenerator() 
