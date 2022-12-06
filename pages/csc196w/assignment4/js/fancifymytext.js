function enlargeButton() {
    document.getElementById("fancifyTextArea").style.fontSize = "24pt";
}

function fancifyText() {
    document.getElementById("fancifyTextArea").style.fontWeight = "BOLD";
    document.getElementById("fancifyTextArea").style.color = 'BLUE';
    document.getElementById("fancifyTextArea").style.textDecoration = "UNDERLINE";
}

function unfancifyText() {
    document.getElementById("fancifyTextArea").style.fontWeight = "NORMAL";
    document.getElementById("fancifyTextArea").style.color = "BLACK";
    document.getElementById("fancifyTextArea").style.textDecoration = "NONE";
}

function mooFunction() {
    var fancyTextArea = document.getElementById("fancifyTextArea");
    var text = fancyTextArea.value;
    var uppercaseText = text.toUpperCase();
    var parts = uppercaseText.split(".");  
    var mooAppenededString = parts.join("-Moo.");
    fancyTextArea.value = mooAppenededString;
}

function alert() {
    alert("Hello, world!");
}