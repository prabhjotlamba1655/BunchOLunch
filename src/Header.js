import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Header.css'

function Header() {
    return (
        <nav className="header">
            <div className="header__left">
                <InstagramIcon />
                <FacebookIcon />
                <p className="header__text">Follow us!!!</p>
            </div>
            <div className=" header__center">

                <Link to='/'>
                    <h5>Home</h5>
                </Link>

                <Link to='/About'>
                    <h5>About</h5>
                </Link>

                <Link to='/Menu'>
                    <h5>Menu</h5>
                </Link>

                <Link to='/Review'>
                    <h5>Reviews</h5>
                </Link>
            </div>

            <div className="header__right">
                <Link to='/Booking'>
                    <h5>Booking</h5>
                </Link>
            </div>
        </nav>
    )
}

export default Header
