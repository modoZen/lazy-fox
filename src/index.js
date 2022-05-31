import { registerImage } from "./lazy";

const API = 'https://randomfox.ca/floof/';
const mountNode = document.querySelector('#images')
const btnAdd = document.getElementById('addImg');
const btnClean = document.getElementById('clean');

const fetchUrl = async ()=> {
    const response          = await fetch(API);
    // const data      = await response.json();
    // const url       = data.image;
    const { image : url}    = await response.json();
    return url;
}

const createImageNode = async ()=>{
    const container = document.createElement("div");
    container.classList.add('p-4');
    const image = document.createElement("img");
    image.dataset.src = await fetchUrl();
    image.classList.add('mx-auto');
    image.width = 320;
    container.append(image);
    return container
}

const addImage = async ()=>{
    const newImage = await createImageNode()
    registerImage(newImage);
    mountNode.append(newImage);
}

btnAdd.addEventListener('click', addImage);

btnClean.addEventListener('click', ()=>{
    mountNode.innerHTML = "";
})
    