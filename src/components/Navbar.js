import React from "react";

const Navbar = ({setCatagory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary px-5 "
      data-bs-theme="dark"
    >
      <div className="container-fluid ">
        <a className="navbar-brand fs-4 fw-bold badge bg-secondary bg-opacity-30" >
          News <span className="badge bg-light text-dark">App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
         >
             {/* businessentertainmentgeneralhealthsciencesportstechnology */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
          <li className="nav-item">
              <a className="nav-link active pe-cursor" style={{cursor:'pointer'}}  onClick={()=>setCatagory('general')} aria-current="page" >
                General
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active"  style={{cursor:'pointer'}}  onClick={()=>setCatagory('business')} aria-current="page" >
                Bussiness
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " style={{cursor:'pointer'}}  onClick={()=>setCatagory('entertainment')} aria-current="page" >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " style={{cursor:'pointer'}}  onClick={()=>setCatagory('health')} aria-current="page" >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " style={{cursor:'pointer'}}  onClick={()=>setCatagory('sports')} aria-current="page" >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " style={{cursor:'pointer'}}  onClick={()=>setCatagory('technology')} aria-current="page" >
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
