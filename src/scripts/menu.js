function menuShow() {
  let menuArea = document.getElementById("Menu-Open");

  if (menuArea.style.height == "100vh") {
    menuArea.style.height = "0vh";
  } else {
    menuArea.style.height = "100vh";
  }
}
