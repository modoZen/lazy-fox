import { registerImage } from './lazy';

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
    image.dataset.src = url;
    image.classList.add('mx-auto');
    image.width = 320;

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.append(image);
    container.append(imageWrapper);
    images.append(container);
    registerImage(container);
}

btnAdd.addEventListener('click', fetchData);

btnClean.addEventListener('click', ()=>{
    [...images.childNodes].forEach(child=>{
        child.remove();
    })
})
