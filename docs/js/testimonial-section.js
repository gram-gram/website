class Testemonial {
  static idx = 0;
  static instances = [];

  static setAllPassive() {
    for(let inst of Testemonial.instances){
      inst.setPassive();
    }
  }

  static setProfiles() {
    var profiles_str = `
    
    `;


    for(let i = 0; i < Testemonial.instances.length; i++){
      profiles_str += `
      
        ${Testemonial.instances[i].getProfileCard((i == 0))}
      `
    }

    return profiles_str;
  }

  constructor(person, description, quote, img_src='', img_alt=''){
    this.person = person;
    this.description = description;
    this.quote = quote; 
    this.img_src = img_src;
    this.img_alt = img_alt;
    this.idx = Testemonial.idx;
    Testemonial.idx += 1;
    this.id = `testimonial-${this.idx}`;
  }

  setPassive() {
    document.getElementById(this.id).classList.remove('active');
  }

  setActive(){
    Testemonial.setAllPassive();
    document.getElementById(this.id).classList.add('active');
    document.getElementById('testemonial-quote-text').innerHTML = `"${Testemonial.instances[this.idx].quote}"`;
  }

  getQuote() {
    return Testemonial.instances[this.idx].quote;
  }

  getProfileCard(active = false){
    return `
    <a id='${this.id}' class="tablink${(active ? " active" : "")}" data-tab="${this.id}" onclick="Testemonial.instances[${this.idx}].setActive()">
      <div class="pb-picture-testimonial">
          <img src="${this.img_src}" alt="${this.img_alt}">
      </div>
      <div class="testimonial-name-wrapper">
          <h6>${this.person}</h6>
          <p>${this.description}</p>
      </div>
    </a>
    `
  }
}

Testemonial.instances = [
  new Testemonial('Martin Masch', 'Founder, Mindmesh', 'Gramgram is innovative approach to digital product design transformed our business. Their attention to detail and seamless user experience have greatly enhanced our online presence and customer engagement.', '/docs/media/images/noah-img.jpg'),
  new Testemonial('Max Mustermann', 'Senior Developer, Spotify', 'We were blown away by gramgram is ability to translate our vision into a visually stunning and user-friendly digital product. Their team is expertise in UI/UX design has undoubtedly elevated our brand and exceeded our expectations.', '/docs/media/images/noah-img.jpg'),
  new Testemonial('Max Mustermann', 'Senior Developer, Spotify', 'Gramgram is exceptional design skills and deep understanding of user behavior resulted in a highly intuitive and visually appealing digital product. Thanks to their collaboration, we have witnessed a significant increase in user satisfaction and retention.', '/docs/media/images/kilian-img.jpg')
]

class Testimonials extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!-- Testimonial Section -->
      <section class="content-section">
          <div class="top-divider-wrapper">
              <div class="secondary-divider"></div>
              <p>The voice of our customers</p>
          </div>
          <div class="section-secondary-content-wrapper testimonial-wrapper">

              <div id="testimonial-quote" class="testimonial-quote active">
                  <h2 id="testemonial-quote-text">
                      "${Testemonial.instances[0].getQuote()}"
                  </h2>
              </div>

              <div class="testimonial-tabs-wrapper">

                  ${Testemonial.setProfiles()}

              </div>

          </div>
      </section>
      `;
    }
  }

  customElements.define('testimonial-section', Testimonials);

