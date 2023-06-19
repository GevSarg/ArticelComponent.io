function shareButton() {
  let overlay = document.querySelector(".overlay-button");
  let button = document.getElementById("button");
  let icon = document.getElementById("icon");
  let computedStyle = window.getComputedStyle(overlay);

  if (computedStyle.visibility === "hidden") {
    overlay.style.visibility = "visible";
    button.style.backgroundColor = "hsl(214, 17%, 51%)";
    icon.style.color = "white";
  } else {
    overlay.style.visibility = "hidden";
    button.style.backgroundColor = "hsl(210, 46%, 95%)";
    icon.style.color = "hsl(214, 17%, 51%)";
  }
}
