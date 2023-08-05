import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
  const color = {
    color: "orange",
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
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
      <section class="banner">
        <img
          src="./WhatsApp Image 2023-05-17 at 6.43.25 PM.jpeg"
          alt="About us banner image"
        />
        <div class="banner__content--wrapper">
          <div class="container">
            <div class="we">
              <div class="head">
                <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h1>
                      We <span style={color}>Love</span> to do
                    </h1>
                  </div>
                </div>
                <div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h2> Design, Development and Marketing</h2>
                  </div>
                </div>
                <div class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h2>Our mission help businesses becomes online</h2>
                  </div>
                </div>
                <div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="what-we-do">
        <div class="container-fluid">
          <h2 class="section-title mb-2 h1">WHAT WE DO</h2>
          <p class="text-center text-muted h5">
             Having and managing a correct marketing strategy is crucial in a
             rapidly evolving market..
          </p>
          <br></br>
          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-1">
                  <h3 class="card-title">WEB DEVELOPMENT</h3>
                  <p class="card-text">
                    <img src="./19362653.jpg" />
                    Himalayastechies creating and maintaining websites for companies and
                     organizations. It involves a series of tasks, such as designing,
                     code, test, and publish web pages and applications.
                     Web developers use a variety of programming languages.
                     programming and frameworks to create functional websites,
                     friendly and visually appealing. They also guarantee that
                     websites are optimized for search engines,
                     accessible to users with disabilities and compatible with
                     different devices and web browsers. As the
                     online presence of companies becomes more and more
                     importantly, web development has become a component
                     critical of any company's digital strategy.
                  </p>
                  <a
                    
                    title="Read more"
                    class="read-more"
                  >
                   See more information<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-2">
                  <h3 class="card-title">social media marketing</h3>
                  <p class="card-text">
                    <img src="./5618169.jpg" />
                    Himalayastechies creating and sharing content,
                     engaging with followers and running campaigns
                     advertisements aimed at reaching an audience
                     specific. Social media marketing can help companies
                     companies increase brand awareness, increase
                     website traffic, generate leads and drive sales. To the
                     most popular social media platforms for marketing
                     include Facebook, Instagram, Twitter, LinkedIn and YouTube.
                     To succeed in social media marketing, companies
                     need to develop a solid strategy, create content
                     high quality and consistently engage with
                     your followers. It is also important to monitor and analyze the
                     performance of social media campaigns to ensure that
                     they meet business objectives.
                  </p>
                  <a
                  
                    title="Read more"
                    class="read-more"
                  >
                    See more information<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-3">
                  <h3 class="card-title">GLOBAL SUPPORT</h3>
                  <p class="card-text">
                    <img src="./Wavy_Eco-06_Single-01.jpg" />
                    Himalayastechies provide services to their customers in
                     around the world, helping them with their products or services.
                     This support can come in many forms, such as telephone,
                     email, live chat, or self-help resources such as a
                     knowledge base or FAQ. The purpose of
                     global support is to help customers solve problems or
                     answer questions they may have about a product or
                     service. Companies with global support teams often
                     have dedicated support teams in multiple time zones
                     to ensure customers receive prompt assistance and
                     effective. Providing global support can help companies
                     improve customer satisfaction, increase customer loyalty
                     customer and drive sales.
                  </p>
                  <a
                    
                    title="Read more"
                    class="read-more"
                  >
                    See more information<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-4">
                  <h3 class="card-title">Animation and digital film production</h3>
                  <p class="card-text">
                    <img src="./151.jpg" />
                     Himalayastechies create content visually
                     impressive and attractive through the use of graphics,
                     computer-generated animations and visual effects. covers
                     a wide range of techniques, including 2D and 3D animation,
                     compositing, motion graphics, and special effects. At
                     animation industry, professionals use tools of
                     software such as Adobe Animate, Autodesk Maya and Toon Boom
                     Harmony to create animated content for television shows
                     television, movies, video games and other media platforms
                     digital. With 3D animation, they can create characters and
                     realistic environments, which can be used in applications of
                     virtual reality and augmented reality.
                  </p>
                  <a
                
                    title="Read more"
                    class="read-more"
                  >
                    See more information<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-5">
                  <h3 class="card-title">OFFSHORE SERVICES</h3>
                  <p class="card-text">
                    <img src="./6182753.jpg" />
                     Offshore services refer to the outsourcing of processes
                     or business functions to a foreign country or a
                     third-party service provider. This can include a
                     series of activities, such as software development,
                     customer support, data entry and much more. You
                     offshore services can offer several benefits to
                     companies, including cost savings, access to
                     expertise, greater flexibility and
                     ability to focus on core business functions
                     business. However, there are also risks and challenges
                     potential, such as language and cultural barriers,
                     time zone differences and security concerns
                     of the data.
                  </p>
                  <a
                  
                    title="Read more"
                    class="read-more"
                  >
                    See more information<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-6">
                  <h3 class="card-title">E-commerce</h3>
                  <p class="card-text">
                    <img src="./female_shopping_from_phone.jpg" />
                    E-commerce, short for electronic commerce, refers to the
                     buying and selling goods and services over the internet. involves
                     online transactions between companies, individuals or entities and
                     can be performed through various platforms, such as
                     websites, mobile apps and social media. The trade
                     electronics has revolutionized the way people shop,
                     offering convenience, affordability and flexibility to
                     consumers and businesses. It allows companies
                     reach a global audience and operate 24 hours a day.

                  </p>
                  <a
                  
                    title="Read more"
                    class="read-more"
                  >
                   See more information<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Services;
