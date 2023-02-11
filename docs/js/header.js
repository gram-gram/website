var webRootPath = ((new RegExp('^http(s)?\:\/\/127\.0\.0\.1(\:[0-9]{1,5})*\/docs/(?!html/).*$')).test(document.URL) ? "./html/" : "./");

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="nav-wrapper">
            <div class="nav-content-wrapper">
                <div class="nav-left-wrapper">
                    <a href="${((new RegExp('^http(s)?\:\/\/127\.0\.0\.1(\:[0-9]{1,5})*\/docs/html/.*$')).test(document.URL) ? "../" : "./")}index.html" class="logo-link">gramgram&sup2;</a>
                </div>
                <div class="nav-right-wrapper">
                    <div class="nav-links-wrapper">
                        <a href="${((new RegExp('^http(s)?\:\/\/127\.0\.0\.1(\:[0-9]{1,5})*\/docs/html/.*$')).test(document.URL) ? "../" : "./")}index.html" class="nav-link">Home</a>
                        <a href="${webRootPath}product-design.html" class="nav-link">Product Design</a>
                        <a href="${webRootPath}consulting.html" class="nav-link">Consulting</a>
                        <!-- <a href="${webRootPath}social-media.html" class="nav-link">Social Media</a> -->
                        <a href="${webRootPath}work.html" class="nav-link">Work</a>
                        <div class="vertical-header-divider"></div>
                        <a href="${webRootPath}community.html" class="nav-link">Community</a>
                        <a href="${webRootPath}team.html" class="nav-link">Team</a>
                    </div>
                    <a class="contact-button" href="mailto: hello@gramgram.ch" target="_blank">Say hello</a>
                </div>
            </div>
        </nav>
      `;
    }
  }

  customElements.define('main-header', Header);