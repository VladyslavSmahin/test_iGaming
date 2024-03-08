import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='logo'>
            <Link to="/">
                <img src='../../../public/Vector.png' alt='img' />
            </Link>
        </div>
    );
};

export default Header;
