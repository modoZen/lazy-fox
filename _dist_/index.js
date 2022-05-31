import { registerImage, resetLogState } from "./lazy.js";
import { createImageNode } from "./utils.js";

const API = 'https://randomfox.ca/floof/';
const mountNode = document.querySelector('#images')
const btnAdd = document.querySelector('button[type="submit"]');
const btnClean = document.querySelector('button[type="reset"]');

const addImage = async ()=>{
    const [node, Image] = await createImageNode(API)
    registerImage(Image);
    mountNode.append(node);
}

btnAdd.addEventListener('click', addImage);

btnClean.addEventListener('click', ()=>{
    mountNode.innerHTML = "";
    resetLogState();
})
    