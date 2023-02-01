// get page name
var path = window.location.pathname;
var page = path.split("/").pop();

// set line color
const line = document.getElementsByClassName("page-button-line");

if (page == "index.html") {
  line[0].classList.add("line-color");
} else if (page == "my-work.html") {
  line[1].classList.add("line-color");
} else if (page == "about-me.html") {
  line[2].classList.add("line-color");
} else if (page == "contact.html") {
  line[3].classList.add("line-color");
}

// set button in dropdown color
const buttonDropdown = document.getElementsByClassName("page-button-dropdown");

if (page == "index.html" || page == "/") {
  buttonDropdown[0].style.color = "#0066ff";
} else if (page == "my-work.html") {
  buttonDropdown[1].style.color = "#0066ff";
} else if (page == "about-me.html") {
  buttonDropdown[2].style.color = "#0066ff";
} else if (page == "contact.html") {
  buttonDropdown[3].style.color = "#0066ff";
}
