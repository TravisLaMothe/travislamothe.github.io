/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
 
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    document.getElementById("encrypt-it").addEventListener("click", encryptButtonClick);
    document.getElementById("reset").addEventListener("click", resetButtonClick);

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

    function encryptButtonClick() {
      console.log("button clicked");

      var textArea = document.getElementById("input-text");

      var cipherType = document.getElementById("cipher-type").value;
      var shiftedText = textArea.value;
      if (cipherType.toLowerCase() == 'shift') {
        shiftedText = shiftCipher(textArea.value);
      } else if (cipherType.toLowerCase() == 'random') {
        shiftedText = randomizedCipher(textArea.value);
      }

      var capsCheckbox = document.getElementById("all-caps");
      if (capsCheckbox.checked) {
        shiftedText = shiftedText.toUpperCase();
      }

      var textSize = document.querySelector('input[name="text-size"]:checked').value;
      document.getElementById("result").style.fontSize = textSize;

      document.getElementById("result").innerHTML = shiftedText;
    }

    function resetButtonClick() {
      document.getElementById("result").innerHTML = "";
    }

      /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function randomizedCipher(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomShift = Math.floor(Math.random() * alphabet.length);
    console.log("Random shift seed: " + randomShift);
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(((letter- 97 + randomShift) % alphabet.length) + 97);
        result += resultLetter;
      }
    }
    return result;
  }

})();
