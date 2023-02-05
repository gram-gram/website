class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="nav-wrapper">
            <div class="nav-content-wrapper">
                <div class="nav-left-wrapper">
                    <a href="/index.html" class="logo-link">gramgram²</a>
                </div>
                <div class="nav-right-wrapper">
                    <div class="nav-links-wrapper">
                        <a href="/index.html" class="nav-link">Home</a>
                        <a href="../html/product-design.html" class="nav-link">Product Design</a>
                        <a href="../html/consulting.html" class="nav-link">Consulting</a>
                        <a href="../html/social-media.html" class="nav-link">Social Media</a>
                        <a href="../html/community.html" class="nav-link">Community</a>
                    </div>
                    <a class="contact-button" href="mailto: hello@gramgram.ch" target="_blank">Say hello</a>
                </div>
            </div>
        </nav>
      `;
    }
  }

  customElements.define('main-header', Header);