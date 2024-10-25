import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
            <div className="text-bg-light  text-center fixed-top">
              <div className="justify-content-center d-flex  gap-4 gap-sm-5 gap-md-5 gap-lg-5">
                   <p className="m-0 p-lg-3 " ><a className="underline" href="#home">Home</a></p>
                   <p className="m-0 p-lg-3 " ><a className="underline" href="#about">Projects</a></p>
                   <p className="m-0 p-lg-3 " ><a className="underline" href="#services">Skills</a></p>
                   <p className="m-0 p-lg-3 " ><a className="underline" href="#contact">Contact</a></p>    
              </div>
            </div>
    );
  };
  
  export default Menu;