
const isIntersecting = (entry)=>{
    return entry.isIntersecting // true si esta dentro de la pantalla
}

const accion = (entry)=>{
    const nodo = entry.target;
    console.log('holis');
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    observer.observe(image);
}