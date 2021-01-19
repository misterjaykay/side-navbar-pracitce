// giphy API_KEY
// ytPEtjWO1fEuTZdj7QR40EthDOE7kAUE
const apiKey = "ytPEtjWO1fEuTZdj7QR40EthDOE7kAUE";
const queryURLiu = "http://api.giphy.com/v1/gifs/search?q=아이유&limit=5&api_key=";
const queryURLty = "http://api.giphy.com/v1/gifs/search?q=태연&limit=5&api_key=";

const iuClick = document.querySelector(".iu-giphy");
const tyClick = document.querySelector(".ty-giphy");

let firstGIF = "";
let secondGIF = "";
let thirdGIF = "";
let fourthGIF = "";
let fifthGIF = "";

const firstDiv = document.querySelector(".first-gif");
const secondDiv = document.querySelector(".second-gif");
const thirdDiv = document.querySelector(".third-gif");
const fourthDiv = document.querySelector(".fourth-gif");
const fifthDiv = document.querySelector(".fifth-gif");

iuClick.addEventListener("click", () => {
    fetch(queryURLiu + apiKey)
    .then(res => {
        return res.json();
    })
    .then(json => {
        firstGIF = json.data[0].embed_url;
        secondGIF = json.data[1].embed_url;
        thirdGIF = json.data[2].embed_url;
        fourthGIF = json.data[3].embed_url;
        fifthGIF = json.data[4].embed_url;
    })
    .then(data => {
        createNewGIF();
    })
})

tyClick.addEventListener("click", () => {
    fetch(queryURLty + apiKey)
    .then(res => {
        return res.json();
    })
    .then(json => {
        firstGIF = json.data[0].embed_url;
        secondGIF = json.data[1].embed_url;
        thirdGIF = json.data[2].embed_url;
        fourthGIF = json.data[3].embed_url;
        fifthGIF = json.data[4].embed_url;
    })
    .then(data => {
        createNewGIF();
    })
})

function createNewGIF() {
    const newEmbed1 = document.createElement("embed");
    const newEmbed2 = document.createElement("embed");
    const newEmbed3 = document.createElement("embed");
    const newEmbed4 = document.createElement("embed");
    const newEmbed5 = document.createElement("embed");

    if (firstDiv.childElementCount === 1) {
        firstDiv.removeChild(firstDiv.childNodes[0]);
    } 

    if (secondDiv.childElementCount === 1) {
        secondDiv.removeChild(secondDiv.childNodes[0]);
    } 

    if (thirdDiv.childElementCount === 1) {
        thirdDiv.removeChild(thirdDiv.childNodes[0]);
    } 

    if (fourthDiv.childElementCount === 1) {
        fourthDiv.removeChild(fourthDiv.childNodes[0]);
    } 

    if (fifthDiv.childElementCount === 1) {
        fifthDiv.removeChild(fifthDiv.childNodes[0]);
    } 

    newEmbed1.setAttribute("src", firstGIF);
    firstDiv.appendChild(newEmbed1);

    newEmbed2.setAttribute("src", secondGIF);
    secondDiv.appendChild(newEmbed2);

    newEmbed3.setAttribute("src", thirdGIF);
    thirdDiv.appendChild(newEmbed3);

    newEmbed4.setAttribute("src", fourthGIF);
    fourthDiv.appendChild(newEmbed4);

    newEmbed5.setAttribute("src", fifthGIF);
    fifthDiv.appendChild(newEmbed5);
}

