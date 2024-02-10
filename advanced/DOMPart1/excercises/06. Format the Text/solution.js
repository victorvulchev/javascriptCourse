function solve() {
  document.querySelector('#formatItBtn').addEventListener('click', onClick);
  const textRef = document.querySelector("#input");
  const outputRef = document.querySelector("#output");

  function onClick() {
      outputRef.innerHTML = ""; // Clear previous content

      let text = textRef.value.trim(); // Trim extra whitespaces

      if (text.length === 0) {
          return; // Exit if there's no text
      }

      let sentences = text.split(/[.!?]/).filter(Boolean); // Split sentences

      for (let i = 0; i < sentences.length; i += 3) {
          let paragraph = sentences.slice(i, i + 3).join('. ') + '.'; // Include dot at the end
          let pTag = document.createElement("p");
          pTag.textContent = paragraph;
          outputRef.appendChild(pTag);
      }
  }
}

