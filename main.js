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
