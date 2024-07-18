//VARIABLES//
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
const botonDescarga = document.getElementById('button-descarga'); // btn download meme
const contenedorMeme = document.getElementById('canvaMeme');// div download meme
const imgMeme = document.getElementById('img-meme'); // div img
const btnClose = document.getElementById ('btnClose'); //btn to close aside img
const btnCloseTxt = document.getElementById('btnCloseTxt') ; //btn to close aside txt
const selectFont = document.getElementById('select-font');//btn fonts 
const titleAside = document.getElementById('titleAside');//title aside
const textArea = document.getElementById('text-area');//input textarea aside
const topText = document.getElementById('topText');// h5 top text
const bottomText =  document.getElementById('bottomText'); // h5 bottom text
const textarea = document.getElementById('text-Area');// text area inferior
const pickerColor = document.getElementById ('selectColor')//color picker
const selectMenu = document.getElementById('select-menu');//menu selector
const checkbox = document.getElementById ('checkbox.txt');  // checkbox aside img
const fontNumber = document.getElementById('font-number');//input size font
const alignLeft = document.querySelector('.align-left-btn');//btn align left
const alignJustify = document.querySelector('.align-justify-btn');// btn align justify
const alignRight = document.querySelector('.align-right-btn');// btn align right
const textColor = document.getElementById('textColor'); // input text color
const bgColor = document.getElementById('input-bg-color'); //bg color



//Event dark mode //
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


//Function to close aside img and txt

btnClose.addEventListener('click', function() {
  btnClose.closest('aside').classList.add('hidden');
});

btnCloseTxt.addEventListener('click', function(){
  btnCloseTxt.closest('aside').classList.add('hidden');
});


// ASIDE IMG//

//Function de URL
url.addEventListener("change", function() {
  imgMeme.setAttribute("src", url.value);
  imgMeme.setAttribute("alt", "image.png");
}
);

 fontNumber.addEventListener('input', function() {
    const fontSize = this.value;
    topText.style.fontSize = fontSize + 'px';
    bottomText.style.fontSize = fontSize + 'px';
});


// Picker color 
pickerColor.addEventListener('change', function() {
    const selectedColor = this.value;
    divMeme.style.backgroundColor = selectedColor;
});

//Event mixer img
selectMenu.addEventListener('change', function() {
  const selectedBlendMode = this.value;
  imgMeme.style.mixBlendMode = selectedBlendMode;
});


//Function add filters
function addFilters() {
  const brillo = `brightness(${brightness.value} ) `;
  const desenfoque = `blur(${blurFilter.value}px) `;
  const contraste = `contrast(${contrast.value}%) `;
  const grises = `grayscale(${grayscale.value}%) `;
  const sepia2 = `sepia(${sepia.value}%) `;
  const hue2 = `hue-rotate(${hue.value}deg) `;
  const saturado = `saturate(${saturated.value}%) `;
  const negativo = `invert(${negative.value}) `;

  const filtros = brillo + desenfoque + contraste + grises + sepia2 + hue2 + saturado + negativo;

  if (imgMeme != null) {
    imgMeme.style.filter = filtros;
    imgMeme.style.opacity = opacity.value;

  }
}

// Add event listeners to each input
brightness.addEventListener("input", addFilters);
blurFilter.addEventListener("input", addFilters);
contrast.addEventListener("input", addFilters);
grayscale.addEventListener("input", addFilters);
sepia.addEventListener("input", addFilters);
hue.addEventListener("input", addFilters);
saturated.addEventListener("input", addFilters);
negative.addEventListener("input", addFilters);
opacity.addEventListener("input", addFilters);

//Event reset filters
resetFilters.addEventListener("click", function() {
    imgMeme.style.filter = "none";

    opacity.value = 1;
    brightness.value = 1;
    blurFilter.value = 0;
    contrast.value = 0;
    grayscale.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturated.value = 100;
    negative.value = 0;

    resetFilters();
});


// ASIDE TXT //


//Event textarea replace top text
textArea.addEventListener('input', function() {
  const text = textArea.value;
  const title = titleAside.textContent.replace('texto', '');
  topText.textContent = text; 
});
  
//Event textArea replace bottom text
textarea.addEventListener('input',  function(){
  const text2 = textarea.value;
  const title2 = bottomText.textContent.replace('texto', '');
  bottomText.textContent = text2;
});

//Event change font family - it doesn't work correctly
  selectFont.addEventListener('change', function() {
    const selectedFont = selectFont.value;
    topText.style.fontFamily = selectedFont.value;
    bottomText.style.fontFamily = selectedFont.value;
  });


//Event for change the font size
 fontNumber.addEventListener('input', function() {
    const fontSize = this.value;
    topText.style.fontSize = fontSize + 'px';
    bottomText.style.fontSize = fontSize + 'px';
});

// Events to align text
alignLeft.addEventListener('click', function () {
    topText.style.justifyContent = 'left';
    bottomText.style.justifyContent = 'left';
});

alignJustify.addEventListener('click', function(){
  topText.style.justifyContent = 'center';
  bottomText.style.justifyContent = 'center';
});

alignRight.addEventListener('click', function(){
  topText.style.justifyContent = 'right';
  bottomText.style.justifyContent = 'right';
});

// Change text color 
textColor.addEventListener('change', function() {
  const selectedColor = this.value;
  topText.style.color = selectedColor;
  bottomText.style.color = selectedColor;
});

//Change to background text color 
bgColor.addEventListener('change', function(){
  const selectedColor = this.value;
  topText.style.backgroundColor = selectedColor;
  bottomText.style.backgroundColor = selectedColor;
});

//spacing

bgColor.addEventListener('change', function() {
    let textSpacing = this.value;
    topText.style.padding = textSpacing + "px";
    bottomText.style.padding = textSpacing + "px";
});






//Download Meme//

function descargarMeme () {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
    }
    )
}

botonDescarga.addEventListener('click', descargarMeme);
