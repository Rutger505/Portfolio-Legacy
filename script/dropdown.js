var open = false;

// listen for clicks
document.addEventListener("click", (e) => {
  const button = document.getElementById("dropdown-button");
  const buttonImg = document.getElementById("dropdown-button-img");
  const dropdown = document.getElementById("dropdown-container");

  // if click is button toggle dropdown
  if (e.target == button || e.target == buttonImg) {
    if (open) {
      dropdown.blur();
      open = false;
    } else {
      dropdown.focus();
      open = true;
    }
  }
});
