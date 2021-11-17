const textColors = ["#ff0000", "#0040ff", "#ff00ff", "#00ff00"]

function setTextColorOnLoad() {
    let paragraphs = document.getElementsByTagName("p");

    min = Math.ceil(0);
    max = Math.floor(paragraphs.length - 1);

    for(let i = 0; i < paragraphs.length; i++) {
        let colorIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        paragraphs[i].style.color = textColors[colorIndex];
    }
}