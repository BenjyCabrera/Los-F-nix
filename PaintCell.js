let pos = 1;

function paintCell(url) {
  const box = document.querySelector(`#box${pos}`);
  const imgDOMEl = document.createElement("img");
  imgDOMEl.src = url;
  imgDOMEl.setAttribute('class','animalPhoto')
  box.innerHTML = "";
  box.appendChild(imgDOMEl);
  pos = (pos % 20) + 1; 
}





//   fetch(`https://dog.ceo/api/breeds/image/random`)
//     .then((res) => res.json())
//     .then((data) => {
//       const imgDOMEl = document.createElement("img");
//       imgDOMEl.src = url;
//       imgDOMEl.setAttribute('class','animalPhoto')
//       box.innerHTML = "";
//       box.appendChild(imgDOMEl);
//       pos = (pos % 20) + 1; 
//     });




// fetch('https://dog.ceo/api/breeds/image/random')