import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const styles = {
    backgroundColor: "#cb6036",
    color: "white",
    fontSize: "16px",
    padding: "90px",
    Text: "white",
  };
  const text = {
    color: "white",
  };
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (
    <>
      <div className="whatsapp">
        <a href="https://wa.me/919872567925" target="blank">
          <img src="./icons8-whatsapp-48.png" />
          
        </a>
        
      </div>
      <header>
        <div class="container">
          <div class="header">
            <div class="header__brandLogo">
              <a href="#">
                <img src="./brand__logo.png" alt="Brand Logo" />
              </a>
            </div>
            <div class="header__brandnav">
              <nav>
                <ul class="header__navigations">
                  <li class="header__list--items">
                    <a href="/">Home</a>
                  </li>
                  <li class="header__list--items">
                    <Link to="/About">About</Link>
                  </li>
                  <li class="header__list--items">
                    <Link to="/Services">Services</Link>
                  </li>
                  <a href="#" className="abc">
                    Our Vision
                  </a>
                </ul>
              </nav>
            </div>
     <div class="dropdown">
  <button onClick={myFunction} class="dropbtn">     <i class="fa-solid fa-bars">
</i>
</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">                    <Link to="/About">About</Link>
</a>
    <a href="#">                    <Link to="/Services">Services</Link>
</a>
    <a href="#"><Link to="/Contact">
                
                  Contact Us
                </Link></a>
  </div>
</div>
          </div>
        </div>
      </header>

      <main>
        <section class="banner">
          <video
            preload="auto"
            id="pageBackground_c1dmp_video"
            class="banner__bgVideo"
            role="presentation"
            crossorigin="anonymous"
            playsinline=""
            autoPlay
            muted
            loop
          >
            <source
              src="https://video.wixstatic.com/video/11062b_b75407a670324c39babd882c6c01d983/1080p/mp4/file.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div class="banner__content--wrapper">
            <div class="container">
              <div class="banner__content">
                <h1 class="banner__content--heading">Himalayas Tech</h1>
                <p class="banner__content--supportText">
                Simple, Intuitive and Perfectly Crafted !
                </p>
                <a href="https://wa.me/919872567925" class="abc">
                  CHAT NOW
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="introduction">
          <div class="container">
            <div class="introduction__content">
              <p>
                 Here at himalyas techie we work hard every day to
                 maintain a great relationship with our clients and customers.
                 We are a group of designers, developers, professionals of
                 marketing. We all pool different skills and form
                 a company dealing with various domains such as development
                 software, health, dentistry, medical tourism, marketing and
                 other related domains.
              </p>
              <div class="introduction__button">
                <Link to="/Contact" class="abc">
                  {" "}
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section class="expertise">
          <div class="container">
            <div class="expertise__wrapper">
              <div class="expertise__leftSide">
                <div className="img1">
                  {" "}
                  <img src="./14258.jpg" alt="" />
                </div>

                <div className="img2">
                  {" "}
                  <img src="./svg.png" alt="" />
                </div>
              </div>
              <div class="expertise__rightSide">
                <div class="expertise__card--wrapper">
                  <div class="expertise__card">
                    <div class="expertise__heading">E-Commerce</div>
                    <div class="expertise__supportText">
                       We specialize in creating commerce websites
                       high-quality electronics that help companies to
                       sell products and services to your customers. Our team
                       works closely with customers to
                       understand your business needs and create a website
                       customized to meet your goals. We use the
                       latest technologies to ensure that our websites
                       are visually appealing, easy to use and optimized
                       for performance, security and engine optimization
                       search Learn more
                    </div>
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">Product Development</div>
                    <div class="expertise__supportText">
                       Product development We are a company of
                       e-commerce website development
                       specialized in creating high-quality online storefronts
                       quality. Our team works closely together
                       with clients to create custom websites
                       visually appealing, easy to use and optimized for
                       performance Know more - Button
                    </div>
                    
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">Website Expertise</div>
                    <div class="expertise__supportText">
                       Website experience We are a development company
                       web with experience in creating custom websites from
                       high quality for businesses of all sizes. Our
                       team of specialized developers uses the most
                       latest technologies and best practices to ensure
                       that our websites are visually appealing, easy to
                       use and optimized for performance and visibility in
                       search engines.
                    </div>
            
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">Customer Experience</div>
                    <div class="expertise__supportText">
                       Customer experience At the heart of our business is the
                       commitment to providing customer-centric services that
                       prioritize the unique needs and preferences of
                       each individual. We employ a variety of strategies
                       personalized, including in-depth customer research
                       and one-on-one support to ensure that every interaction
                       be customized to create a memorable experience and
                       positive
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="what-we-do">
          <div class="container-fluid">
            <h2 class="section-title mb-2 h1">WHAT WE DO</h2>
            <p class="text-center text-muted h5">
              {" "}
              Having and managing the right marketing strategy is crucial in
               a rapidly evolving market..
            </p>
            <div class="row mt-5">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-1">
                    <h3 class="card-title">WEB DEVELOPMENT</h3>
                    <p class="card-text">
                    Affordable web design service is what you get
                       when we design your website..
                    </p>
                    <a
                    
                      title="Read more"
                      class="read-more"
                    >
                     See more information
                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-2">
                    <h3 class="card-title">social media marketing</h3>
                    <p class="card-text">
                       We have different and new generation ideas to focus on
                       market with young talents. .
                    </p>
                    <a
                    
                      title="Read more"
                      class="read-more"
                    >
                     See more information
                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-3">
                    <h3 class="card-title">GLOBAL SUPPORT</h3>
                    <p class="card-text">
                       We help technology companies grow by providing
                       a world-class customer experience for your
                       customers..
                    </p>
                    <a
                      
                      title="Read more"
                      class="read-more"
                    >
                     See more information
                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-4">
                    <h3 class="card-title">
                    Animation and digital film production
                    </h3>
                    <p class="card-text">
                       Made with passion, designed to perfection, the art of
                       creativity Sample Work..
                    </p>
                    <a
                      
                      title="Read more"
                      class="read-more"
                    >
                      See more information
                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-5">
                    <h3 class="card-title">OFFSHORE SERVICES</h3>
                    <p class="card-text">
                    We help you organize business strategies and
                       technology cost-effectively.
                    </p>
                    <a
                  
                      title="Read more"
                      class="read-more"
                    >
                     See more information
                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-6">
                    <h3 class="card-title">E-commerce</h3>
                    <p class="card-text">
                       We have many of the best technologies, as we use
                       reactjs, node js and many others to build the website
                       spa beat
                    </p>
                    <a
                  
                      title="Read more"
                      class="read-more"
                    >
                      See more information
                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container">
          <div className="introduction__content">
            <h2>
              <span class="boldtext">WE HAVE MORE SUCCESS STORIES</span>{" "}
              <br></br>
              <span class="orangecolor">THAN OTHER AGENCIES HAVE CUSTOMERS</span>
            </h2>
            <br></br>
            <p class="pharatext">
            We grow your business 10x faster, better and smarter than other Businesses.TechArch Software turns an idea into a well-recognized brand!!
            </p>
          
            <div class="row">
              <div class="col-sm">
                {" "}
                <img src="./br/clinica espaco saude.jpg" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/dentalle.jpg" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/dr aran mattos.jpg" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/Escola.png" className="brimg2" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                {" "}
                <img src="./br/hering.png" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/masterespaco.png" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/ODONTOCOMPANY---SEO---OG_IMAGE.jpg" className="brimg" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                {" "}
                <img src="./br/onepoint tecnologia.jpeg" className="brimg1" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/transferir.jpg" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/shantiterapias.jpg" className="brimg" />
              </div>
              <div class="col-sm">
                {" "}
                <img src="./br/quantum.jpg" className="brimg" />
              </div>
            </div>
          </div>
        </div>



        <section class="contact">
          <div class="container">
            <div class="contact__heading">
              <p>
                Let's work <br />
                <span>Together.</span>
              </p>
            </div>
            <br></br>
            <br></br>
            <div class="contact__wrapper">
              <div class="contact__leftSide">
                <div class="contact__content">
                  <p>
                     Let's work together! 😁 In our company, we believe in
                     partnering with our customers to create powerful and
                     effective solutions that meet your unique needs. Us
                     we bring our experience in web development, commerce
                     electronics and product development for each project,
                     working collaboratively to ensure that each
                     detail is executed flawlessly. our approach
                     Personalized service ensures that every customer receives the attention and
                     support you need to achieve your business goals,
                     and our commitment to excellence ensures results that
                     exceed expectations
                  </p>
                </div>
              </div>
              <div class="contact__rightSide">
                <div class="contact__form">
                  <h1 class="contact__form--title">Contact us</h1>
                  <p class="contact__form--description">
                     Contact Us At our company, we believe in partnering with
                     our customers to create powerful and effective solutions that
                     meet your unique needs.
                  </p>
                  <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                      <form
                        action="https://formspree.io/f/xknakpww"
                        method="POST"
                        id="contact-form"
                        name="contact-form"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="md-form mb-0">
                              <label for="name" class="">
                               YOUR NAME
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="md-form mb-0">
                              <label for="email" class="">
                                YOUR EMAIL
                              </label>
                              <input
                                type="text"
                                id="email"
                                name="email"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="md-form mb-0">
                              <label for="subject" class="">
                                MESSAGES
                              </label>
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="text-center text-md-left">
                          <button type="submit" class="btn btn--primary">
                            send
                          </button>
                        </div>
                      </form>

                      <div class="status"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div class="main-page-sec main-page-sec2" style={styles}>
        <div class="row">
          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                {" "}
                <span class="expertise__heading">eCommerce </span>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="shopify-development-services.php"
                >
                  Shopify
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="prestashop-development-services.php"
                >
                  PrestaShop
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="woocommerce-development-services.php"
                >
                  WooCommerce
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="bigcommerce-development-services.php"
                >
                  BigCommerce
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="magento-development-services.php"
                >
                  Magento
                </a>{" "}
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="expertise__supportText">
                {" "}
                <span class="expertise__heading">Product Development</span>{" "}
              </li>
              <li class="expertise__supportText">
                <a
                  class="nav-link"
                  style={text}
                  href="saas-web-application-development.php"
                >
                  Saas Web applications
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="third-party-integration-services.php"
                >
                  Third Party Integrations
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="ui-ux-design-services.php"
                >
                  UI/UX Design
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="mobile-app-development-services.php"
                >
                  Mobile App Dev{" "}
                </a>{" "}
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="expertise__supportText">
                {" "}
                <span class="expertise__heading">Expertise</span>{" "}
              </li>
              <li class="expertise__supportText">
                <a
                  class="nav-link"
                  style={text}
                  href="https://shopify.webgarh.com/"
                >
                  {" "}
                  Shopify Apps
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="third-party-integration-services.php"
                >
                  Third Party Integrations
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="prestashop-module-development.php"
                >
                  {" "}
                  PrestaShop Modules
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="software-product-development-services.php"
                >
                  {" "}
                  Product Development{" "}
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="white-label-web-development.php"
                >
                  {" "}
                  White Label Development{" "}
                </a>{" "}
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="expertise__supportText">
                <span class="expertise__heading"> Contact Us</span>
              </li>
              <li class="expertise__supportText">
               
    
                <p class="address-p">
                  new sunny enclave , mohali 140301, india
                </p>
                <p>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  &nbsp; himalayastechies@gmail.com
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  &nbsp; 9872567925 &nbsp;{" "}
                  <img
                    className="cont"
                    src="./icons8-india-48.png"
                    alt="Brand Logo"
                  />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer__social--icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/himalayastechies?igshid=OTJhZDVkZWE="
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__monospace">
              <p>2023 © Himalayas Techies. All rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
