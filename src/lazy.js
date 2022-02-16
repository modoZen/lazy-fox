let appendedImages = 0;
let loadedImages = 0;

const printLog = () => {

    console.log(`⚪ Se han agregado ${appendedImages} imágenes`);
    console.log(`🟣 Se han cargado ${loadedImages} imágenes`);
    console.log("---------------------------------------");
}

const isIntersecting = (entry)=>{
    return entry.isIntersecting // true si esta dentro de la pantalla
}

const loadImage = (entry)=>{
    const container = entry.target;
    const img = container.querySelector('img');
    img.src = img.dataset.src;
    observer.unobserve(container);
    loadedImages++;
    printLog();
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    appendedImages++;
    printLog()
    observer.observe(image);
}