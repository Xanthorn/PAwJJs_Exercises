const textColors = ["#ff0000", "#0040ff", "#ff00ff", "#00ff00"]

function runOnLoad() {
    let paragraphs = document.getElementsByTagName("p");

    setTextColorOnLoad(paragraphs);
    addTitlesOnLoad(paragraphs);
}

function setTextColorOnLoad(paragraphs) {
    min = Math.ceil(0);
    max = Math.floor(paragraphs.length - 1);

    for(let i = 0; i < paragraphs.length; i++) {
        let colorIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        paragraphs[i].style.color = textColors[colorIndex];
    }
}

function addTitlesOnLoad(paragraphs) {
    for(let i = 0; i < paragraphs.length; i++) {
        let paragraphLength = paragraphs[i].textContent.length;
        paragraphs[i].title = `Długość paragrafu: ${paragraphLength}`;
    }
}