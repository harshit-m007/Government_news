import React, { useEffect } from 'react';
import './ministries.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />


const Ministries = () => {
  return (
    <div>
      {/* NAV BAR */}
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand yolo" href="#" style={{ color: 'rgb(57, 255, 215)' }}>SIH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link hi">
              Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active hi" href="/ministries"><b>News</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link hi" href="/#about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle hello" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About</a></li>
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
      <br />
      {/* CARDS */}
      <div className="container text-center" style={{ padding: '40px' }}>
        <div className="row card-container">
          {ministries.map((ministry, index) => (
            <div className="col-sm-6 mb-3 mb-sm-0 border-primary" key={index}>
              <form className="card-form" method="POST" action="#">
                <div className="card fixed-height-card" style={{ width: '18rem' }}>
                  <img src={ministry.imgSrc} className="card-img-top" alt="..." style={{ borderRadius: '15px', padding: '10px' }} />
                  <div className="card-body">
                    <input type="hidden" name="ministry" value={ministry.name} />
                    <h5 className="card-title">{ministry.name}</h5>
                    <p className="card-text">{ministry.description}</p>
                    <select name="sentiment" className="btn btn-dark">
                      <option value="" disabled selected hidden>News Type</option>
                      <option value="positive">Positive</option>
                      <option value="negative">Negative</option>
                      <option value="neutral">Neutral</option>
                    </select>
                    <button type="submit" class="btn-arrow"><i class="fas fa-arrow-circle-right"></i></button>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ministries = [
  {
    name: "Ministry of Agriculture and Farmers Welfare",
    description: "It is a branch of the Government of India and the apex body for formulation and administration of the rules and regulations and laws related to agriculture in India.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ministry_of_Agriculture_India.svg/1200px-Ministry_of_Agriculture_India.svg.png"
  },
  {
    name: "Ministry of Water Resources",
    description: "This Department is mainly responsible for laying down policy guidelines for the development, conservation and management of water as a national resource.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ministry_of_Jal_Shakti.svg/1200px-Ministry_of_Jal_Shakti.svg.png"
  },
  {
    name: "Ministry of Finance",
    description: "It is a ministry within the Government of India concerned with the economy of India, serving as the Treasury of India.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ministry_of_Finance_India.svg/1200px-Ministry_of_Finance_India.svg.png"
  },
  {
    name: "Ministry of Education",
    description: "It is a ministry of the Government of India, responsible for the implementation of the National Policy on Education.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Education_India.svg"
  },
  {
    name: "Ministry of Environment, Forest and Climate Change",
    description: "This ministry is responsible for planning, promoting, coordinating, and overseeing the implementation of environmental and forestry programmes.",
    imgSrc: "https://www.newsonair.gov.in/writereaddata/News_Pictures/NAT/2022/Jul/NPIC-20227620155.jpg"
  },
  {
    name: "Ministry of Road Transport and Highways",
    description: "This is the apex body for formulation and administration of the rules and laws relating to road transport, transport research to increase the mobility and efficiency of the road transport system.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ministry_of_Road_Transport_and_Highways.svg"
  }
];

export default Ministries;
