const texts = document.querySelector(".textStorage");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives results as the user is talking

let p = document.createElement('p');
recognition.continuous = true; // avoids repeated confirmation of microphone usage in chrome

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result=>result[0]).map(result=>result.transcript).join('');
    p.innerText = text;
    texts.appendChild(p);
    if(e.results[0].isFinal) {
        if(text.includes('keister new tab')) {
            p=document.createElement('p');
            p.innerText='opening channel';
            window.open("https://youtube.com");
        }
        p=document.createElement('p');
    }
    console.log(stringArray.slice(-5));
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();
