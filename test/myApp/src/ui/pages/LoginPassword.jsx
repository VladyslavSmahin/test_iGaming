import React, {useState} from 'react';
import {FilledInput, FormControl, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPassword = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8) {
            setError('Password must be at least 8 characters long');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <div className='loginBlockForm'>
                <FormControl>
                    <FilledInput
                        name='password'
                        sx={{backgroundColor: 'white', border:'1px solid #D3D8DC'}}
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
            <Link to={'/forgot-password'} style={{textDecoration: 'none', textAlign: 'end'}}>
                <Typography sx={{marginBottom: "30px"}}>Forgot your password?</Typography>
            </Link>
        </div>
    );
};

export default LoginPassword;
