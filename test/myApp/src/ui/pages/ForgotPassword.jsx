import React, {useState} from "react";
import Email from "../Components/Email.jsx";
import LoginPassword from "./LoginPassword.jsx";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
    };
    return (
        <div className='loginBlock'>
            <h2 className='loginBlockName'>Forgot password?</h2>
            <form className='loginBlockForm' onSubmit={handleSubmit}>
                <Email
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Link to={'/reset-password'}>
                    <Button sx={{fontFamily: 'BasisGrotesqueProMedium', fontSize: "16px",width: '100%', marginBottom:'20px'}} variant="contained"
                            type="submit">Send</Button>
                </Link>
                <Link to={'/'}>
                    <Button sx={{fontFamily: 'BasisGrotesqueProMedium', fontSize: "16px", width: '100%', color: 'black'}} variant="outlined"
                            type="submit">Cancel</Button>
                </Link>

            </form>
        </div>
    );
};

export default ForgotPassword;
