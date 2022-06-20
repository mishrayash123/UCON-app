import React from "react";

const Sites = props => {

    return(
        <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Yash" aria-controls="Yash" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="Yash">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h5 className="nav-link text-light " >codeforces</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">codeforces_gym</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">top_coder</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">at_coder</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">code_chef</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">cs_academy</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">hacker_rank</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">hacker_earth</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">kick_start</h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link text-light">leet_code</h5>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    );
};




export default Sites;