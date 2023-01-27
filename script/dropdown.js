function getStyle(id, styleType) {
  var element = document.getElementById(id);
  return element.currentStyle
    ? element.currentStyle[styleType]
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue(styleType)
    : null;
}

function dropdown() {
  const dropdown = document.getElementById("dropdown-container");
  const currentStyle = getStyle("dropdown-container", "display");

  if (currentStyle == "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}
