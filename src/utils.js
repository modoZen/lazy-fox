const fetchUrl = async (API)=> {
    const response          = await fetch(API);
    // const data      = await response.json();
    // const url       = data.image;
    const { image : url }   = await response.json();
    return url;
}

export const createImageNode = async (API)=>{
    const container = document.createElement("div");
    container.classList.add('p-4');
    const image = document.createElement("img");
    image.dataset.src = await fetchUrl(API);
    // image.classList.add('mx-auto');
    image.className = "mx-auto rounded-md bg-gray-300";
    image.width = 320;
    container.append(image);
    return [container,image]
}