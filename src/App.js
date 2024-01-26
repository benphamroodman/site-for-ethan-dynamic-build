import './App.css';
import emailjs from '@emailjs/browser';
import React from 'react';
emailjs.init("mgaNBzJe8ztZN05a-");

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  sendmail() {
    
    let fullName = (document.getElementById("name").value);
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
      from_name: fullName,
      from_email: userEmail,
      from_phone: userPhone,
      message: userMessage
    }

    emailjs.send('service_lyth09b', 'template_yn9gvci', contactParams).then(function (res) {});
    alert("Email sent!");
  }
  
  render() {
    return (<>
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
      </script>
      
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#page-top">E<i class="fa-solid fa-seedling"></i>han's G<i class="fa-solid fa-tree"></i>rdens</a>
          <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#services">Services</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Masthead*/}
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <div class="masthead-heading container d-inline-flex align-items-center justify-content-center">
            {/* Masthead Avatar Image*/}
            <img class="masthead-avatar mb-5" src="ethan-logo.png" alt="..." />
            {/* Masthead Text*/}
            <h1 class="masthead-text text-uppercase mb-0">E<i class="fa-solid fa-seedling"></i>han's<br />G<i class="fa-solid fa-tree"></i>rdens</h1>
          </div>
          {/* Icon Divider*/}
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* Masthead Subheading*/}
          <p class="masthead-subheading font-weight-light mb-0">Gardening and Landscaping Consulting Services</p>
        </div>
      </header>

      {/* Services Section*/}
      <section class="page-section services" id="services">
        <div class="container">
          {/* Services Section Heading*/}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Services</h2>
          {/* Icon Divider*/}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* Services Grid Items*/}
          <div class="row justify-content-center">
            {/* Services Item 1*/}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="services-item mx-auto" data-bs-toggle="modal" data-bs-target="#servicesModal1">
                <div class="services-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="services-item-caption-content text-center text-white">Garden Coaching</div>
                </div>
                <img class="img-fluid" src="assets/img/services/cabin.png" alt="..." />
              </div>
            </div>
            {/* Services Item 2*/}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="services-item mx-auto" data-bs-toggle="modal" data-bs-target="#servicesModal2">
                <div class="services-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="services-item-caption-content text-center text-white">Garden Design + Installation</div>
                </div>
                <img class="img-fluid" src="assets/img/services/cake.png" alt="..." />
              </div>
            </div>
            {/* Services Item 3*/}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="services-item mx-auto" data-bs-toggle="modal" data-bs-target="#servicesModal3">
                <div class="services-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="services-item-caption-content text-center text-white">Garden Maintenance</div>
                </div>
                <img class="img-fluid" src="assets/img/services/circus.png" alt="..." />
              </div>
            </div>
            {/* Services Item 4*/}
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div class="services-item mx-auto" data-bs-toggle="modal" data-bs-target="#servicesModal4">
                <div class="services-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="services-item-caption-content text-center text-white">Troubleshooting Consultation</div>
                </div>
                <img class="img-fluid" src="assets/img/services/game.png" alt="..." />
              </div>
            </div>
            {/* Services Item 5*/}
            <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div class="services-item mx-auto" data-bs-toggle="modal" data-bs-target="#servicesModal5">
                <div class="services-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="services-item-caption-content text-center text-white">DIY Project Consulting</div>
                </div>
                <img class="img-fluid" src="assets/img/services/safe.png" alt="..." />
              </div>
            </div>
            {/* Services Item 6*/}
            <div class="col-md-6 col-lg-4">
              <div class="services-item mx-auto" data-bs-toggle="modal" data-bs-target="#servicesModal6">
                <div class="services-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="services-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/services/submarine.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section*/}
      <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
          {/* About Section Heading*/}
          <h2 class="page-section-heading text-center text-uppercase text-white">Ab<i class="fa-solid fa-clover"></i>ut</h2>
          {/* Icon Divider*/}
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* About Section Content*/}
          <div class="row">
            <div class="col-lg-4 ms-auto"><p class="lead">Ethan is an experienced gardener and farmer with over four decades of professional farming and gardening experience. He enjoys planting smiles on faces and nuturing friendships.</p></div>
            <div class="col-lg-4 me-auto"><p class="lead">Ethan's favorite birds are abatrosses due to their loyal nature and importance to their ecosystems.</p></div>
          </div>
          {/* About Section Button*/}
          {/* <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
              <i class="fas fa-download me-2">
                Free Download!
              </i>
            </a>
          </div>*/}
        </div>
      </section>
      {/* Contact Section*/}
      <section class="page-section" id="contact">
        <div class="container">
          {/* Contact Section Heading*/}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Cont<i class="fa-solid fa-tree"></i>ct Me</h2>
          {/* Icon Divider*/}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* Contact Section Form*/}
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}

              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* Name input*/}
                <div class="form-floating mb-3">
                  <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                  <label for="name">Full name</label>
                  <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                {/* Email address input*/}
                <div class="form-floating mb-3">
                  <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <label for="email">Email address</label>
                  <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                {/* Phone number input*/}
                <div class="form-floating mb-3">
                  <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                  <label for="phone">Phone number</label>
                  <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                {/* Message input*/}
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                  <label for="message">Message</label>
                  <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
                {/* Submit success message*/}
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                {/* Submit Button*/}
                <button class="btn btn-primary btn-xl" id="submitButton" type="submit" onclick={this.sendmail.bind(this)}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer class="footer text-center">
        <div class="container">
          <div class="row justify-content-center">
            {/* Footer Location*/}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">
                408 Constitution Ave
                <br />
                Washington, DC 20002
              </p>
            </div>
            {/* Footer Social Icons*/}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright Section*/}
      <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright &copy; Ethan and Ben 2024</small></div>
      </div>
      {/* Services Modals*/}
      {/* Services Modal 1*/}
      <div class="services-modal modal fade" id="servicesModal1" tabindex="-1" aria-labelledby="servicesModal1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* Services Modal - Title*/}
                    <h2 class="services-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                    {/* Icon Divider*/}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* Services Modal - Image*/}
                    <img class="img-fluid rounded mb-5" src="assets/img/services/cabin.png" alt="..." />
                    {/* Services Modal - Text*/}
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Modal 2*/}
      <div class="services-modal modal fade" id="servicesModal2" tabindex="-1" aria-labelledby="servicesModal2" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* Services Modal - Title*/}
                    <h2 class="services-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                    {/* Icon Divider*/}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* Services Modal - Image*/}
                    <img class="img-fluid rounded mb-5" src="assets/img/services/cake.png" alt="..." />
                    {/* Services Modal - Text*/}
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Modal 3*/}
      <div class="services-modal modal fade" id="servicesModal3" tabindex="-1" aria-labelledby="servicesModal3" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* Services Modal - Title*/}
                    <h2 class="services-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                    {/* Icon Divider*/}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* Services Modal - Image*/}
                    <img class="img-fluid rounded mb-5" src="assets/img/services/circus.png" alt="..." />
                    {/* Services Modal - Text*/}
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Modal 4*/}
      <div class="services-modal modal fade" id="servicesModal4" tabindex="-1" aria-labelledby="servicesModal4" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* Services Modal - Title*/}
                    <h2 class="services-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                    {/* Icon Divider*/}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* Services Modal - Image*/}
                    <img class="img-fluid rounded mb-5" src="assets/img/services/game.png" alt="..." />
                    {/* Services Modal - Text*/}
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Modal 5*/}
      <div class="services-modal modal fade" id="servicesModal5" tabindex="-1" aria-labelledby="servicesModal5" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* Services Modal - Title*/}
                    <h2 class="services-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                    {/* Icon Divider*/}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* Services Modal - Image*/}
                    <img class="img-fluid rounded mb-5" src="assets/img/services/safe.png" alt="..." />
                    {/* Services Modal - Text*/}
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Modal 6*/}
      <div class="services-modal modal fade" id="servicesModal6" tabindex="-1" aria-labelledby="servicesModal6" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* Services Modal - Title*/}
                    <h2 class="services-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                    {/* Icon Divider*/}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fa-brands fa-pagelines"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* Services Modal - Image*/}
                    <img class="img-fluid rounded mb-5" src="assets/img/services/submarine.png" alt="..." />
                    {/* Services Modal - Text*/}
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );    
  }
}

export default App;
