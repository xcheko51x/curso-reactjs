const api_key = 'NPxw6sbQccNiGFgG8siR83uRxaIJ2yXH';
const url = 'https://api.giphy.com/v1/gifs/search?';
const limite = '10';

export const getGifs = async(categoria) => {

    const respuesta = await fetch(`${url}q=${categoria}&limit=${limite}&api_key=${api_key}`);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images.downsized_medium.url
        };
    });

    // console.log(gifs);
    // setImagenes(gifs);
    return gifs;
};