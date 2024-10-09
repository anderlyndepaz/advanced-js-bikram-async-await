//DESARROLLA AQUI TUS SOLUCIONES
// ejercicio 1 
async function getRandomPokemon() {

    let pokemonAleatorio = Math.floor(Math.random() * 20) + 1;

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`)
        if (!response.ok) {
           
        }
        let data = response.json();

        return data

    } catch {
        console.log('Error');
    };
    {

    }
}



// ejercicio 2 
async function getImageAndName(pokemon) {
try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    if (!response.ok) {
           
    }
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }
} catch {
    console.log('Error');
} }

//Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar 
//la imagen y el nombre del pokemon en el DOM de la siguiente forma:

//  async function printImageAndName(pokemon)  {
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     let data = await response.json();
//     let name = data.name;
//     let img = data.sprites.front_default;
//     return {name, img}
//  }

//   printImageAndName().then((usuario) => {
//     const imgElement = document.createElement("img");
//     imgElement.src = usuario.img;
//     imgElement.alt = `Avatar de ${usuario.name}`;

//     const nameElement = document.createElement("h3");
//     nameElement.textContent = usuario.name;

//     const container = document.getElementById("ejercicio 3");
//     container.innerHTML = "";
//     container.appendChild(imgElement);
//     container.appendChild(nameElement);

//     console.log(usuario.img);
//   });
async function printImageAndName(pokemon) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok) {
           
        }

        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;

        // Devolver la estructura HTML requerida
        return `
        <section>
          <img src="${img}" alt="${name}">
          <h1>${name}</h1>
        </section>
      `;
    } catch (error) {
        console.error('Error:', error);
        // En caso de error, devuelve un HTML con valores por defecto
        return `
        <section>
          <img src="" alt="Unknown">
          <h1>Unknown</h1>
        </section>
      `;
    }
}

printImageAndName('pikachu')
    .then((html) => {
        const container = document.getElementById("ejercicio-3");
        container.innerHTML = html;  // Insertar el HTML directamente en el contenedor
    });


//Ejercicio 4.- Declara una función getRandomDogImage 
//que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage(params) {
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        if (!response.ok) {
           
        }
        const data = await response.json();

        const img = data.message;
        return img;
    } catch (error) {
        console.error('Error:', error);
    }
}

//Ejercicio 5.- Declara una función getRandomPokemonImage 
//que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
    try {
        // Genera un número aleatorio entre 1 y 1010 (PokeAPI tiene 1010 Pokémones)
        const randomPokemonId = Math.floor(Math.random() * 1025) + 1;

        // Haz la solicitud a la API con el ID aleatorio
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);

        if (!response.ok) {
            throw new Error('Error al obtener el Pokémon');
        }

        const data = await response.json();

        // Obtener la imagen desde data.sprites.front_default
        const img = data.sprites.front_default;
        return img;

    } catch (error) {
        console.error('Error:', error);
        return '';  // Retorna una cadena vacía en caso de error
    }
}

getRandomPokemonImage()
    .then((imgUrl) => {
        // Crear el HTML con la imagen del Pokémon
        const html = `
        <section>
          <img src="${imgUrl}" alt="Pokemon Aleatorio">
          <h1>Pokemon Aleatorio</h1>
        </section>
      `;

        const container = document.getElementById("ejercicio-5");
        container.innerHTML = html;  // Insertar el HTML directamente en el contenedor
    });


//Ejercicio 6.- Declara una función printPugVsPikachu que 
//pinte la batalla entre "Pug" y "Pikachu" (no se testea)


async function printPugVsPikachu() {
    try {
      // Obtener la imagen de Pikachu
      const responsePikachu = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      if (!responsePikachu.ok) {
      }
      
      const dataPikachu = await responsePikachu.json();
      const imgPikachu = dataPikachu.sprites.front_default; // Imagen de Pikachu
  
      // Obtener la imagen aleatoria del Pug
      const responsePug = await fetch('https://dog.ceo/api/breed/pug/images/random');
      if (!responsePug.ok) {

      }
      
      const dataPug = await responsePug.json();
      const imgPug = dataPug.message; // URL de la imagen del Pug
  
      // Crear el HTML con ambas imágenes
      const html = `
        <section>
          <img src="${imgPikachu}" alt="Pikachu" style="width: 400px;">
          <img src="${imgPug}" alt="Pug" style="width: 400px;">
          <h1>Pikachu vs Pug</h1>
        </section>
      `;
  
      // Insertar el HTML directamente en el contenedor
      const container = document.getElementById("ejercicio-6");
      container.innerHTML = html;
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Llamar a la función
  document.addEventListener("DOMContentLoaded", () => {
    printPugVsPikachu();
  });
  
 // ejercicio 8
  
//  async function getRandomCharacterInfo() {
//     const randomId = Math.floor(Math.random() * 826) + 1; // ID aleatorio entre 1 y 826

//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
//         if (!response.ok) {
//             throw new Error('Error al obtener el personaje');
//         }
//         const character = await response.json();
//         return character; // Retorna el objeto del personaje
//     } catch (error) {
//         console.error('Error:', error);
//         return null; // Devuelve null en caso de error
//     }
// }

// // Función para mostrar el personaje en el DOM
// function displayCharacter(character) {
//     const container = document.getElementById("character-container");
//     container.innerHTML = ""; // Limpiar el contenedor

//     if (character) {
//         const html = `
//             <section>
//                 <h1>${character.name}</h1>
//                 <p>Especie: ${character.species}</p>
//                 <p>Estado: ${character.status}</p>
//                 <img src="${character.image}" alt="${character.name}" style="width: 200px;">
//             </section>
//         `;
//         container.innerHTML = html; // Insertar el HTML en el contenedor
//     } else {
//         container.innerHTML = "<p>No se pudo obtener un personaje.</p>";
//     }
// }

// // Ejemplo de uso
// document.addEventListener("DOMContentLoaded", () => {
//     getRandomCharacterInfo().then(character => {
//         displayCharacter(character); // Mostrar el personaje en el DOM
//     });
// });

// ejercicio 7 



async function getRandomCharacter() {

    let personajeAleatorio = Math.floor(Math.random() * 20) + 1;

    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${personajeAleatorio}`)
        if (!response.ok) {
           
        }
        let data = response.json();

        return data

    } catch {
        console.log('Error');
    };
    {

    }
} getRandomCharacter().then(datos => console.log(datos));

//ejercicio 8

async function getRandomCharacterInfo() {
    const randomId = Math.floor(Math.random() * 826) + 1;

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
        if (!response.ok) {
            throw new Error('Error al obtener el personaje');
        }
        const character = await response.json();

        if (character.episode.length === 0) {
            throw new Error('Este personaje no tiene episodios asociados');
        }

        const firstEpisodeUrl = character.episode[0];
        const episodeResponse = await fetch(firstEpisodeUrl);
        if (!episodeResponse.ok) {
            throw new Error('Error al obtener el episodio');
        }
        const episode = await episodeResponse.json();

        return {
            img: character.image,  
            name: character.name,
            episodes: character.episode,
            firstEpisode: episode.name,  
            dateEpisode: episode.air_date  
        };

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

//Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)

getRandomCharacterInfo().then(personaje => {
const section = document.getElementById("ejercicio-9") 
section.innerHTML = ` <section>
          <img src="${personaje.img}" alt="Personaje aleatorio">
          <h1>Nomrbre = ${personaje.name}</h1>
          <p>Episodios: ${personaje.episodes}</p>
          <p>Primer Episodio: ${personaje.firstEpisode}</p>
          <p>Fecha: ${personaje.dateEpisode}</p>
        </section> `
}) 
document.addEventListener("DOMContentLoaded", () => {
    getRandomCharacterInfo();
  });
