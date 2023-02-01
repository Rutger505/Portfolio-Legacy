// custom header element
class MyFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <div class="footer-container">
  <p>06 46540375</p>
  <p>© 2023 All rights reserved.</p>
  <nav>
    <a href="https://facebook.com" target="_blank">
      <img class="footer-img" src="./img/facebook icon.png" alt=""
    /></a>
    <a href="https://twitter.com" target="_blank">
      <img class="footer-img" src="./img/twitter icon.png" alt=""
    /></a>
    <a href="https://instagram.com" target="_blank">
      <img class="footer-img" src="./img/instagram icon.png" alt=""
    /></a>
    <a href="https://linkedin.com" target="_blank">
      <img class="footer-img" src="./img/linkedin icon.png" alt=""
    /></a>
  </nav>
</div>  
    `;
  }
}
customElements.define("custom-footer", MyFooter);
