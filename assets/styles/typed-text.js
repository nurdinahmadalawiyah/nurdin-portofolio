const textToType = "I'm Fullstack Developer";
const typedTextElement = document.getElementById("typed-text");

function typeText() {
  let index = 0;

  function updateText() {
    const targetText = textToType.slice(0, index + 1);
    typedTextElement.textContent = targetText;

    if (index === textToType.length) {
      return;
    }

    setTimeout(updateText, 100);
    index++;
  }
  setTimeout(updateText, 0);
}

typeText();
