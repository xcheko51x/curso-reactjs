const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC'; // Key generada desde el portal de GIFs

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() ) // Regresa una promesa
    .then( ({ data }) => { // Recibe y trata la promesa anterior
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );