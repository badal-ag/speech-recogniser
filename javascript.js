let micIcon = document.getElementById("micIcon");
let resultElement = document.getElementById("resultElement");
let SpeechRecognition, recognition;
try {
  SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  // set the lang
  recognition.lang = "en-US";

  // display the captured test
  recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    resultElement.innerHTML = transcript;
  };

  // on start, toggle the mic color
  recognition.onstart = () => {
    micIcon.classList.add("active-mic");
    resultElement.innerHTML = "I'm listening!";
  };
  // turn the mic of at the end
  recognition.onend = () => {
    micIcon.classList.remove("active-mic");
  };
} catch (e) {
  resultElement.innerHTML =
    "Your browser is not supported. Please use Chrome or Edge.";
}

function startSpeaking() {
  recognition.start();
}
