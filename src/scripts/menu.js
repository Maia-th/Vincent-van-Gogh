function menuShow() {
  let menuArea = document.getElementById("Menu-Open");

  if (menuArea.style.width == "60vw") {
    menuArea.style.width = "0vh";
  } else {
    menuArea.style.width = "60vw";
  }
}
