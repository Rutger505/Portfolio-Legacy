class MyFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `




       <div class="footer-container">
  <p>06 46540375</p>
  <p>© 2023 All rights reserved.​</p>
  <nav>
    <img class="footer-img" src="./img/facebook icon.png" alt="" />
    <img class="footer-img" src="./img/twitter icon.png" alt="" />
    <img class="footer-img" src="./img/instagram icon.png" alt="" />
    <img class="footer-img" src="./img/linkedin icon.png" alt="" />
  </nav>
</div>





            `;
  }
}
customElements.define("custom-footer", MyFooter);
