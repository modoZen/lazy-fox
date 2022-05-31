let appendedImages = 0;
let loadedImages = 0;

const printLog = () => {
    console.log(`⚪ Se han agregado ${appendedImages} imágenes`);
    console.log(`🟣 Se han cargado ${loadedImages} imágenes`);
    console.log("---------------------------------------");
}

const isIntersecting = (entry)=> entry.isIntersecting // true si esta dentro de la pantalla

const loadImage = (entry)=>{
    loadedImages++;
    printLog()
    const img = entry.target;
    img.src = img.dataset.src;
    observer.unobserve(img);
}

const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    if(isIntersecting(entry)) loadImage(entry)
});

export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    appendedImages++;
    printLog()
    observer.observe(image);
}

export const resetLogState = ()=>{
    appendedImages = 0;
    loadedImages = 0;
}
