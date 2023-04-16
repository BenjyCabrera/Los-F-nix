document.getElementById("boton").addEventListener("click", paintCat);
document.querySelector('button').addEventListener('click', paintCat);

function paintCat() {

fetch('https://api.thecatapi.com/v1/images/search')
.then(response=>response.json())

// Gato obtenido e impreso por consola

.then(data=>console.log(data));
};

// Bajo este texto comentado se encuentra la función para pintar un gato en el body del texto

// // .then((data) => {
// // 			data.forEach((img) => {
// // 				const imgDOMEl = document.createElement('img');
// // 				imgDOMEl.src = img.url;

// // 				document.body.append(imgDOMEl);
// // 			});
// // 		});