//Grabbing html elements
let fetchBtn = document.getElementById('fecthBtn');
let appendDIX = document.getElementById('appendHere') //Get the joke?

//
const renderImage = ({img}) => {
    if (!img) {
        console.log("No Image Found")
    }

    else {
        let listElement = document.createElement("li");
        let image = document.createElement("img");
        image.setAttribute("src", `${img}`);
        listElement.append(image);

        appendDIX.appendChild(listElement);
    }
};


//
fetchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => response.json())
    .then(humorObject => renderImage(humorObject))
})