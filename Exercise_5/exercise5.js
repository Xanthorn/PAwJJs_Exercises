const textColors = ["#ff0000", "#0040ff", "#ff00ff", "#00ff00"]
const borderColors = ["#00bfff", "#00ff00", "#ff8000"]
const backgroundColors = ["#ebebeb", "#5b5b5b"]
let isParagraphClicked = false;
let paragraphClicked = -1;

function runOnLoad() {
    let paragraphs = document.getElementsByTagName("p");

    setTextColorOnLoad(paragraphs);
    addTitlesOnLoad(paragraphs);
}

function setTextColorOnLoad(paragraphs) {
    min = Math.ceil(0);
    max = Math.floor(paragraphs.length - 1);

    for (let i = 0; i < paragraphs.length; i++) {
        let colorIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        paragraphs[i].style.color = textColors[colorIndex];
    }
}

function addTitlesOnLoad(paragraphs) {
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraphLength = paragraphs[i].textContent.length;
        paragraphs[i].title = `Długość paragrafu: ${paragraphLength}`;
    }
}

function paragraphClick(paragraphId) {
    let paragraphs = document.getElementsByTagName("p");

    if (isParagraphClicked) {
        if (paragraphClicked > 0) {
            paragraphs[paragraphClicked - 1].style.border = "";
        }

        paragraphs[paragraphClicked].style.border = "";

        if (paragraphClicked + 1 < paragraphs.length) {
            paragraphs[paragraphClicked + 1].style.border = "";
        }

        paragraphs[paragraphClicked].style.backgroundColor = "";

        isParagraphClicked = false;
    }

    let i = 0;
    for (i; i < paragraphs.length; i++) {
        if (paragraphs[i].id === paragraphId) {
            if (i > 0) {
                paragraphs[i - 1].style.border = `solid ${borderColors[0]}`
            }

            paragraphs[i].style.border = `solid ${borderColors[1]}`

            if (i + 1 < paragraphs.length) {
                paragraphs[i + 1].style.border = `solid ${borderColors[2]}`
            }

            if ((i + 1) % 2 === 0) {
                paragraphs[i].style.backgroundColor = `${backgroundColors[0]}`;
            } else {
                paragraphs[i].style.backgroundColor = `${backgroundColors[1]}`;
            }

            isParagraphClicked = true;
            paragraphClicked = i;
            return;
        }
    }
}

function headerClick(headerId) {
    let headers = document.getElementsByTagName("h2");
    let paragraphs = document.getElementsByTagName("p");
    let index;

    for(let i = 0; i < headers.length; i++) {
        if(headers[i].id === headerId) {
            index = i;
            break;
        }
    }

    if (paragraphs[index].style.display === "none") {
        paragraphs[index].style.display = "block";
      } else {
        paragraphs[index].style.display = "none";
      }
}