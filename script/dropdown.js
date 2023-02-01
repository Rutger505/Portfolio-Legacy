var open = false;
document.getElementById("dropdown-button").addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown-container");
  if (open) {
    dropdown.blur();
    open = false;
  } else {
    dropdown.focus();
    open = true;
  }
});
