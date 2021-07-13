//Grabbing html elements
let fetchBtn = document.getElementById('fecthBtn');
let appendDIX = document.getElementById('appendHere') //Get the joke?

//
const renderImage = ({message}) => {
    if (!message) {
        console.log("No Image Found")
    }

    else {
        let listElement = document.createElement("li");
        let image = document.createElement("img");
        image.setAttribute("src", `${message}`);
        listElement.append(image);

        appendDIX.appendChild(listElement);
    }
};


//
fetchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(image => renderImage(image))
})
