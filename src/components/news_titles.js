import React, { useEffect } from 'react';
import './news_titles.css';

const NewsTitles = ({ newsData }) => {

  useEffect(() => {
    let noOfCharac = 300;
    let contents = document.querySelectorAll(".content");
    contents.forEach(content => {
      // if text length is less than noOfCharac then hide read more button
      if (content.textContent.length < noOfCharac) {
        content.nextElementSibling.style.display = "none";
      } else {
        let displayText = content.textContent.slice(0, noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
      }
    });
  }, []);

  const readMore = (btn) => {
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Show Less" : btn.textContent = "Read More";
  }

  return (
    <div>
      {/* NAV BAR */}
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand yolo" href="#" style={{ color: "rgb(57, 255, 215)" }}>SIH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link hi" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active hi" href="/index.html"><b>News</b></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle hello" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
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
      {/* NAV BAR ENDS */}

      <br />

      <div className="container">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {newsData.map((newsItem, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#news_${index}`} aria-expanded="false" aria-controls={`news_${index}`}>
                  <b>{newsItem.title}</b>
                </button>
              </h2>
              <div id={`news_${index}`} className="accordion-collapse collapse">
                <div className="accordion-body post">
                  <p className="content">{newsItem.description}</p>
                  <div className="btn btn-info" onClick={() => readMore(this)}>Read More</div>
                  <div className="accordion-footer">
                    <a href={newsItem.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Link to the full news <span className="badge bg-dark ml-2">✈️</span></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTitles;
