/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)');

const API = 'https://randomfox.ca/floof/';
const btnAdd = document.getElementById('addImg');
const btnClean = document.getElementById('clean');


async function fetchData() {
    const response  = await fetch(API);
    const data      = await response.json();
    const url       = data.image;
    
    const container = document.createElement("div");
    container.classList.add('p-4');

    const image = document.createElement("img");
    image.src = url;
    image.classList.add('mx-auto');
    image.width = 320;

    container.append(image);
    images.append(container);
}

btnAdd.addEventListener('click', fetchData);

btnClean.addEventListener('click', ()=>{
    images.innerHTML = "";
})
