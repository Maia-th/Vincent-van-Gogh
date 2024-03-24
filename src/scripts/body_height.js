// Ajustar a altura inicialmente ao carregar a página
window.addEventListener("load", function () {
  document.body.style.height = window.innerHeight + "px";
});

// Ajustar a altura do body quando a janela é redimensionada
window.addEventListener("resize", function () {
  document.body.style.height = window.innerHeight + "px";
});
