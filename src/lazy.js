
const isIntersecting = (entry)=>{
    return entry.isIntersecting // true si esta dentro de la pantalla
}

const loadImage = (entry)=>{
    const img = entry.target;
    console.log(img.nodeName);
    img.src = img.dataset.src;
    observer.unobserve(img);
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    observer.observe(image);
}