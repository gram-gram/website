class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>
            <div class="footer-content-wrapper">
              <div class="footer-items-wrapper">
                <div class="footer-item-wrapper">
                    <p>Contact</p>
                    <h4 class="footer-link"><a href="mailto: info@gramgram.ch" target="_blank">info@gramgram.ch</a></h4>
                </div>
                <div class="footer-item-wrapper">
                    <p>Overview</p>
                    <h4 class="footer-link"><a href="${webRootPath}product-design.html">Product Design</a></h4>
                    <h4 class="footer-link"><a href="${webRootPath}consulting.html">Consulting</a></h4>
                    <!-- <h4 class="footer-link"><a href="${webRootPath}social-media.html">Social Media</a></h4> -->
                    <h4 class="footer-link"><a href="${webRootPath}work.html">Work</a></h4>
                    <h4 class="footer-link"><a href="${webRootPath}community.html">Community</a></h4>
                    <h4 class="footer-link"><a href="${webRootPath}team.html">Team</a></h4>

                </div>
                <div class="footer-item-wrapper">
                    <p>Social Links</p>
                    <h4 class="footer-link"><a href="https://instagram.com/gramgram.ch" target="_blank">Instagram</a></h4>
                    <h4 class="footer-link"><a href="https://ch.linkedin.com/company/gramgram-ch" target="_blank">LinkedIn</a></h4>
                    <h4 class="footer-link"><a href="https://open.spotify.com/playlist/4QzFtvHE8TaSPDYvCNYqN8?si=182ac0029712441c" target="_blank">Spotify</a></h4>
                </div>
              </div>
              <div class="below-footer-wrapper">
                  <p>© 2023 – developed during a cold shower🚿</p>
                  <a href="${webRootPath}impressum.html">Impressum</a>
              </div>
            </div>
        </footer>
      `;
    }
  }

  customElements.define('main-footer', Footer);