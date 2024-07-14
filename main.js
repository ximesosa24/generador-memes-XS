//Variables//
const btn = document.querySelector('#btnDark'); //btn dark
const body = document.querySelector('body'); //body 
const header = document.querySelector('#dark-mode'); //id mode dark
const url = document.getElementById('url-link'); //Input de la URL
const brightness = document.getElementById('brightness'); //Filter brightness
const opacity = document.getElementById('opacity'); //Filter opacity
const contrast = document.getElementById('contrast'); //Filter constrast
const blurFilter = document.getElementById('blur'); //Filter blur
const grayscale = document.getElementById('grayscale'); //Filter grayscale
const sepia = document.getElementById('sepia'); //Filter sepia
const hue = document.getElementById('hue'); //Filter hue
const saturated = document.getElementById('saturation'); //Filter saturated
const negative = document.getElementById('negative') //Filter negative
const resetFilters = document.getElementById('reset-filters'); //Btn reset filters
const imgMeme = document.getElementById('img-meme'); 

//Event modo oscuro//
btn.addEventListener('click', function(){
  if (body.classList.contains('dark-mode')){
    body.classList.remove('dark-mode');
  }else{
    body.classList.add('dark-mode');
  }
  });


//ASIDES//
document.getElementById('btnTxt').addEventListener('click', function() {
  document.getElementById('asideTexto').classList.toggle('hidden');
});

document.getElementById('btnImg').addEventListener('click', function() {
  document.getElementById('asideImg').classList.toggle('hidden');
});

document.querySelector('.btn-close').addEventListener('click', function() {
  document.getElementById('close').classList.add('hidden');
});

//Function de URL
url.addEventListener('keyup', () => {
  const valueUrl = url.value;
  imgMeme.style.backgroundImage = `url('${valueUrl}')`;
  imgMeme.style.backgroundPosition = 'center';
  imgMeme.style.backgroundRepeat = 'no-repeat';
  imgMeme.style.backgroundSize = 'contain';
});

//Function añadir filtros
function addFilters() {
  const brillo = `brightness(${brightness.value}%) `;
  const desenfoque = `blur(${blurFilter.value}px) `;
  const contraste = `contrast(${contrast.value}%) `;
  const grises = `grayscale(${grayscale.value}%) `;
  const sepia2 = `sepia(${sepia.value}%) `;
  const hue2 = `hue-rotate(${hue.value}deg) `;
  const saturado = `saturate(${saturated.value}%) `;
  const negativo = `invert(${negative.value}%) `;

  const filtros = brillo + desenfoque + contraste + grises + sepia2 + hue2 + saturado + negativo;

  if (imgMeme != null) {
    imgMeme.style.filter = filtros;
    imgMeme.style.opacity = opacity.value;

  }
}

// Agregar event listeners a cada input
brightness.addEventListener("input", addFilters);
blurFilter.addEventListener("input", addFilters);
contrast.addEventListener("input", addFilters);
grayscale.addEventListener("input", addFilters);
sepia.addEventListener("input", addFilters);
hue.addEventListener("input", addFilters);
saturated.addEventListener("input", addFilters);
negative.addEventListener("input", addFilters);
opacity.addEventListener("input", addFilters);

//Evento resetear filtros
resetFilters.addEventListener("click", function() {
    imgMeme.style.filter = "none";

    opacity.value = 1;
    brightness.value = 1;
    blurFilter.value = 0;
    contrast.value = 0;
    grayscale.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturation.value = 100;
    negative.value = 0;

    resetFilters();
});


//Download Meme//
const botonDescarga = document.getElementById('button-descarga');
const contenedorMeme = document.getElementById('canvaMeme');

function descargarMeme () {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
    }
    )
}

botonDescarga.addEventListener('click', descargarMeme);