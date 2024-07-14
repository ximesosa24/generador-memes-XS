//Variables//
const btn = document.querySelector('#btnDark'); //btn dark
const body = document.querySelector('body'); //body 
const header = document.querySelector('#dark-mode'); //id mode dark
const url = document.getElementById('url-link'); //Input de la URL
const brightness = document.getElementById('brightness'); //Filter brightness
const opacity = document.getElementById('opacity'); //Filter opacity
const contrast = document.getElementById('contrast'); //Filter constrast
const blur = document.getElementById('blur'); //Filter blur
const grayscale = document.getElementById('grayscale'); //Filter grayscale
const sepia = document.getElementById('sepia'); //Filter sepia
const hue = document.getElementById('hue'); //Filter hue
const saturated = document.getElementById('saturation'); //Filter saturated
const Hue = document.getElementById('HUE'); //Filter hue
const negative = document.getElementById('negative') //Filter negative
const resetFilters = document.getElementById('reset-filters'); //Btn reset filters


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
  canvaMeme.style.backgroundImage = `url('${valueUrl}')`;
  canvaMeme.style.backgroundPosition = 'center';
  canvaMeme.style.backgroundRepeat = 'no-repeat';
  canvaMeme.style.backgroundSize = 'contain';
});

//Apply filters
// function applyFilters() {
//   const filters = `
//     brightness(${brightness.value}%)
//     opacity(${opacity.value}%)
//     contrast(${contrast.value}%)
//     blur(${blurFilter.value}px)
//     grayscale(${grayscale.value}%)
//     sepia(${sepia.value}%)
//     hue(${hue.value}deg)
//     saturate(${saturated.value}%)
//     hue(${hue.value}%)
//     brightness(${100 - negative.value}%)
//   `;
//   canvaMeme.style.filter = filters;
// }

// Reset filters
resetFilters.addEventListener('click', () => {
  brightness.value = 100;
  opacity.value = 100;
  contrast.value = 100;
  blurFilter.value = 0;
  grayscale.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturated.value = 100;
  invert.value = 0;
  negative.value = 0;
  applyFilters();
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