// src/HomePage.js

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import $ from 'jquery';
import './landingpage.css';

const LandingPage = () => {
    useEffect(() => {
        $("a.nav-link[href^='#']").on("click", function (e) {
            e.preventDefault();
            var target = this.hash;
            $("html, body").animate({
              scrollTop: $(target).offset().top
            }, 800, "swing", function () {
              window.location.hash = target;
            });
          });
      }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand yolo" href="#" style={{ color: 'rgb(57, 255, 215)' }}> SIH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link active hi" href="/"><b>Home</b></a>
              </li>
              <li className="nav-item">
              <Link to="/ministries" className="nav-link hi">
              News
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link hi" href="#about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle hello" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#about">About</a></li>
                  <li><a className="dropdown-item" href="#">Contact us</a></li>
                  <li><a className="dropdown-item" href="#">States</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <br /><br /><br />
      <img src="https://sih.gov.in/img1/SIH2023-logo.png" className="img-responsive" alt="SIH Logo" />
      <br />
      <div className="hack">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.livemint.com/lm-img/img/2023/09/09/1600x900/PTI09-09-2023-000108A-0_1694238481124_1694238503049.jpg" className="d-block w-100" alt="..." style={{ borderRadius: '25px' }} />
              <div className="carousel-caption d-none d-md-block hack">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.india.com/wp-content/uploads/2023/09/maxresdefault-26.webp" className="d-block w-100" alt="..." style={{ borderRadius: '25px' }} />
              <div className="carousel-caption d-none d-md-block hack">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the Second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.herzindagi.info/image/2023/Aug/what-is-chandrayaan-3.jpg" style={{ borderRadius: '25px' }} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block hack">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the Third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <div id="about" style={{ color: 'rgb(213, 222, 219)' }}>hello</div>
      <br /><br />
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-container">
              <h2>ABOUT</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sit exercitationem. Laudantium impedit
                laborum tempore neque sint eius dolores ea amet ducimus quisquam in voluptatibus ipsam nulla saepe excepturi
                debitis error consequuntur nesciunt molestiae eaque explicabo corrupti qui, praesentium voluptatum. Officia,
                quaerat iste rerum facilis, aspernatur, cumque at voluptates quo inventore dolore ducimus blanditiis
                possimus. Est, totam quaerat. Incidunt, eum esse dolores cum iste fugit eius eaque fugiat explicabo nostrum.
                Blanditiis, nihil suscipit. Dolores id at quidem aut omnis, quaerat consequuntur inventore molestias
                deleniti autem nisi deserunt neque a illum. Cumque quis sunt quidem sit error dolore necessitatibus, ullam
                sed!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img className="circular-image" style={{ position: 'relative' }} src="https://source.unsplash.com/450x450/?macbook" alt="Your Image" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <br />
      </div>
      <section className="container setwidth mt-3">
        <div className="row card-row">
          <div className="col-md-4 mb-3 ">
            <div className="card">
              <img src="https://source.unsplash.com/1200x700/?news,World" className="card-img-top" alt="Card Image" style={{ borderRadius: '25px' }} />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="https://source.unsplash.com/1200x700/?news" className="card-img-top" alt="Card Image" style={{ borderRadius: '25px' }} />
              <div className="card-body">
                <h5 className="card-title">Up-to-the-minute News</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="https://source.unsplash.com/1200x700/?code" className="card-img-top" alt="Card Image" style={{ borderRadius: '25px' }} />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
<br />

<footer class="bg-dark text-white">
  <div class="container py-4">
    <div class="row">
      <div class="col-md-4">
        <img src="path_to_your_logo.png" alt="Logo" width="100" />
      </div>
      <div class="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: maverick@gmail.com</p>
        <p>Phone: 7892854785</p>
        <p>Address: PEC, Chandigarh, India</p>
      </div>
      <div class="col-md-4">
        <h5>Follow Us</h5>
        <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default LandingPage;
