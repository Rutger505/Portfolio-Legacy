class MyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <div class="header-container">
  <div class="header-nav-container">
    <div class="headerpart-1">
      <a class="logo-container" href="index.html">
        <img class="logo-img" src="./img/Logo-P.png" alt="Logo" />
      </a>
    </div>
    <nav class="headerpart-2 pages-container">
      <li><a class="page-button" href="index.html">Home</a></li>
      <li><a class="page-button" href="my-work.html">My Work</a></li>
      <li><a class="page-button" href="about-me.html">About Me</a></li>
    </nav>
    <div class="headerpart-3">
      <a class="page-button" href="contact.html">Contact</a>
      <button id="dropdown-button" data-dropdown-button onclick="dropdown()">
        <img src="./img/dropdown menu.png" alt="" />
      </button>
    </div>
  </div>
  <div
    onclick="document.getElementById('dropdown-container').focus();return false"
    class="dropdown-container line-animation"
  >
    <nav>
      <li><a class="page-button-drop" href="index.html">Home</a></li>
      <li><a class="page-button-drop" href="my-work.html">My work</a></li>
      <li><a class="page-button-drop" href="about-me.html">About me</a></li>
      <li><a class="page-button-drop" href="contact.html">Contact</a></li>
    </nav>
  </div>
  <div class="header-line"></div>
</div>


        `;
  }
}
customElements.define("custom-header", MyHeader);
