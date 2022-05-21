const texts = document.querySelector(".textStorage");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives results as the user is talking

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result=>result[0]).map(result=>result.transcript).join('');
    console.log(text);
})

recognition.start();