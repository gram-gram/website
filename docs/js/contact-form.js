class contactForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <form action="" class="contact-form-wrapper" method="post">

            <div class="form-label-input-wrapper">
                <label class="form-label" for="topic">Choose a topic</label>
                <select class="form-selection" id="topic" name="topic">
                    <option value="product-design">Product Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="community">Community</option>
                    <option value="something-else">Something else</option>
                </select>
            </div>

            <div class="form-label-input-wrapper top-spacing">
                <label class="form-label" for="company">Company</label>
                <input class="form-input" type="text" id="company" name="company">
            </div>

            <div class="name-wrapper top-spacing">
                <div class="form-label-input-wrapper">
                    <label class="form-label" for="fname">First name*</label>
                    <input class="form-input" type="text" id="fname" name="fname" required>
                </div>

                <div class="form-label-input-wrapper">
                    <label class="form-label" class="form-label" for="lname">Last name*</label>
                    <input class="form-input" type="text" id="lname" name="lname" required>
                </div>
            </div>

            <div class="form-label-input-wrapper top-spacing">
                <label class="form-label" for="email">Email*</label>
                <input class="form-input" type="email" id="email" name="email" required>
            </div>

            <div class="form-label-input-wrapper">
                <label class="form-label" for="phone">Phone</label>
                <input class="form-input" type="tel" id="phone" name="phone">
            </div>

            <div class="form-label-input-wrapper top-spacing">
                <label class="form-label" for="description">Description*</label>
                <textarea class="form-input textarea-input" name="description" id="description" cols="30" rows="10" required></textarea>
            </div>
            
            <div class="form-label-checkbox-wrapper top-spacing">
                <input class="form-input-checkbox" type="checkbox" name="agb-checkbox" id="agb-checkbox" required>
                <label class="form-label" for="agb-checkbox">I confirm the use of my e-mail address for processing my request.*</label>
            </div>
            
            <div class="submit-btn-wrapper top-spacing">
                <input class="submit-button" type="submit" value="Send request">
            </div>

        </form>
      `;
    }
  }

  customElements.define('contact-form', contactForm);