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
  new Testemonial('Martin Masch', 'Founder, Mindmesh', 'Gramgram\'s innovative design has transformed our business, making our online presence and customer engagement better than ever.', '/docs/media/images/martinmasch-testimonial.jpg'),
  new Testemonial('Stefanie Werker', 'UX Architect, Traily', 'Gramgram impressed us by translating our vision into a visually stunning and user-friendly digital product. Their expertise in UI/UX design has elevated our brand.', '/docs/media/images/stefaniewerker-testimonial.jpg'),
  new Testemonial('Annalena Rutsch', 'Chief Product Officer, Yadu', 'Thanks to Gramgram\'s impressive design skills and understanding of users, they have created a user-friendly digital product that boosts satisfaction and customer loyalty.', '/docs/media/images/annalenarutsch-testimonial.jpg')
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

