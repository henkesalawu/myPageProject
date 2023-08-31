import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../NavBars/NavBar.css';

function Contact() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (

    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link className='navbar-logo' onClick={goBack}>
            Go back
            </Link>
            </div>
            </nav>
    <div className="contact">
        <h1>Contact details</h1>
    </div>
    </>
  )
}

export default Contact;
