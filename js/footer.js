class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>
            <div class="footer-content-wrapper">
              <div class="footer-items-wrapper">
                <div class="footer-item-wrapper">
                    <p>Contact</p>
                    <h4>hello@gramgram.ch</h4>
                </div>
                <div class="footer-item-wrapper">
                    <p>Overview</p>
                    <h4>Product Design</h4>
                    <h4>Consulting</h4>
                    <h4>Social Media</h4>
                    <h4>Community</h4>
                </div>
                <div class="footer-item-wrapper">
                    <p>Social Links</p>
                    <h4><a href="https://instagram.com/gramgram.ch" target="_blank">Instagram</a></h4>
                    <h4><a href="https://www.linkedin.com/in/gramgram/" target="_blank">LinkedIn</a></h4>
                    <h4><a>Spotify</a></h4>
                </div>
              </div>
              <div class="below-footer-wrapper">
                  <p>© 2023 – developed during a cold shower🚿</p>
                  <a href="">Impressum</a>
              </div>
            </div>
        </footer>
      `;
    }
  }

  customElements.define('main-footer', Footer);