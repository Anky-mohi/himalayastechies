import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
  return (
    <>
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
                    <a href="/About">About</a>
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
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      <main>
        <section class="banner">
          <img src="./123.jpeg" alt="About us banner image" />
          <div class="banner__content--wrapper">
          </div>
        </section>

        <section class="vision">
          <div class="container">
            <div class="vision__wrapper">
              <div class="vision__heading">
                <p class="like-text popup-text">
                  <span class="text-effect">V</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">S</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">N</span>
                </p>
              </div>
              <div class="vision__supportContent">
                <p class="main--text">
                Vision
We create web and mobile app solutions that will delight your customers At himalayas tech, our team is dedicated to building and designing brands through web and mobile app development. We collaborate closely with our clients to develop a detailed plan for building their website or mobile app, ensuring they deliver the desired results they are looking for. We work remotely or in person. We collaborate with people and computers, but often not at the same time. Transitioning between them can be challenging, confusing, or impossible. This is all changing. The next wave of business transformation will move from building isolated digital capabilities to creating the foundations of a new reality – a shared reality that seamlessly blends our physical lives of atoms and our digital lives of bits. The goal is not incremental improvement, but radical change. The true value of this convergence lies in the creation of something fundamentally new. Look at generative AI – many people are using it to generate purely digital images and content, but we already see how it will shape the future of science
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="whatwedo">
          <div class="container">
            <div class="whatwedo__wrapper">
              <div class="whatwedo__heading">
                <p class="like-text popup-text">
                  <span class="text-effect">O</span>
                  &nbsp;&nbsp;
                  <span class="text-effect">Q</span>
                  <span class="text-effect">U</span>
                  <span class="text-effect">E</span>
                  &nbsp;&nbsp;
                  <span class="text-effect">N</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">S</span>
                  &nbsp;&nbsp;
                  <span class="text-effect">F</span>
                  <span class="text-effect">A</span>
                  <span class="text-effect">Z</span>
                  <span class="text-effect">E</span>
                  <span class="text-effect">M</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">S</span>
                  <span class="text-effect">?</span>
                </p>
              </div>
              <div class="whatwedo__supportContent">
                <p class="main--text">
                   When Atoms Meet Bits: The Fundamentals of Our
                   new reality When atoms meet bits Os
                   foundations of our new reality We live in two realities
                   parallel lines, one of atoms and the other of bits. When we buy,
                   we enter a store or access a web page.
                   We work remotely or in person. we collaborate with
                   people and computers, but usually not at the same time. A
                   transitioning between them can be challenging, confusing, or
                   impossible. All of that is changing. The next wave of
                   business transformation will move from building
                   isolated digital capabilities for creating the foundations of a
                   new reality – a shared reality that combines
                   perfectly our physical lives of atoms and our lives
                   bit digital. The goal is not incremental improvement,
                   but a radical change. The true value of this convergence
                   is in the creation of something fundamentally new. see the AI
                   generative - many people are using it to generate images
                   and purely digital content, but we already see how it will shape the
                   future of science, of enterprise data, how we design and
                   we manufacture products and much more.
                </p>
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
                  new sunny enclave ,
                  mohali 140301, india 
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

export default About;
