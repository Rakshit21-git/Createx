import React from 'react';
import "./Breadcrump.css";
import { NavLink } from 'react-router-dom';

const Breadcrump = () => {
    return (
        <>
            <div className="container-fluid Bread">
                <div aria-label='breadcrumb' className="row ">
                    <div className="col-12 breadcrump">
                        <NavLink className="breadcrumb-item" to="/"><i class="fa-solid fa-house"></i></NavLink>
                        <img className='img-fluid' src="./Assests/Images/Antu_arrow-right.svg.png" alt="not" />
                        <NavLink className="breadcrumb-item" to="/">Women</NavLink>
                        <img className='img-fluid' src="./Assests/Images/Antu_arrow-right.svg.png" alt="not" />
                        <NavLink className="breadcrumb-item" to="/">Clothes</NavLink>
                        <img className='img-fluid' src="./Assests/Images/Antu_arrow-right.svg.png" alt="not" />
                        <NavLink className="breadcrumb-item text-muted" to="/">Basic hooded sweatshirt in pink</NavLink>
                        <img className='img-fluid' src="./Assests/Images/Antu_arrow-right.svg.png" alt="not" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Breadcrump;
