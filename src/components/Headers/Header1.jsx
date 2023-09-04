import React from 'react';
import "./Header1.css"

const Header1 = () => {
  return (
   <>
    <div className="container-fluid Header1 fw-light">
        <div className="row">
            <div className="col-3">Available 24/7 at (405) 555-0128</div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3">
                <i class="fa-regular fa-user"></i>
                <button>Log in</button>
                /
                <button>Register</button>
            </div>
        </div>
    </div>
   </>
  );
}

export default Header1;
