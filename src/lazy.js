const isIntersecting = (entry)=> entry.isIntersecting // true si esta dentro de la pantalla

const loadImage = (entry)=>{
    const container = entry.target;
    const img = container.firstChild;
    img.src = img.dataset.src;
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    if(isIntersecting(entry)) loadImage(entry)
    // entries.filter(isIntersecting).forEach(accion);
    // console.log(entries)
});

export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    observer.observe(image);
}
