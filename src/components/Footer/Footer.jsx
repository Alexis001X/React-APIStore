import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tellus a sem bibendum laoreet. Donec in nulla vel nunc mollis aliquam. Sed auctor, nibh eget laoreet aliquam, lorem nunc blandit nunc, vitae laoreet nunc nibh non nulla.</p>
          </div>
          <div className="col-md-4">
            <h5>Contactame:</h5>
            <p>Email: alexismenadev09@gmail.com</p>
            <p>Phone: +593 999899136</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-2"><a href="#"><FaFacebook /></a>Facebook</li>
              <li className="me-2"><a href="#"><FaXTwitter /></a> Twitter</li>
              <li className="me-2"><a href="#"><FaInstagram /></a> Instagram</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="text-muted">&copy; 2024 Alexis Mena. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;