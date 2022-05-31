const isIntersecting = (entry)=> entry.isIntersecting // true si esta dentro de la pantalla

const accion = (entry)=>{
    const nodo = entry.target;
    console.log('holis');
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    if(isIntersecting(entry)) accion(entry)
    // entries.filter(isIntersecting).forEach(accion);
    console.log(entries)
});

export const registerImage = (image) =>{
    // IntersectactionObservador -> observer(image)
    observer.observe(image);
}
