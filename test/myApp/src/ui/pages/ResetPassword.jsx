import React, {useState} from "react";
import LoginPassword from "./LoginPassword.jsx";
import {
    Box,
    Button, FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('password:', password);
        console.log('password:', password2);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            if (value.length < 8) {
                setError('Password must be at least 8 characters long');
            } else {
                setError('');
            }
        } else if (name === 'password2') {
            setPassword2(value);
            if (value.length < 8) {
                setError2('Password must be at least 8 characters long');
            } else {
                setError2('');
            }
        }
    };


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    return (
        <div className='loginBlock'>
            <h2 className='loginBlockName'>Forgot password?</h2>
            <form className='loginBlockForm' onSubmit={handleSubmit}>

                    <Typography sx={{paddingBottom:'8px'}}>Password</Typography>

                <FormControl>
                    <FilledInput
                        name='password'
                        sx={{backgroundColor:'white',  border: '1px solid #D3D8DC'}}
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
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <Typography sx={{paddingBottom:'8px'}}> Confirm Password</Typography>
                <FormControl>
                    <FilledInput
                        name='password2'
                        sx={{backgroundColor:'white', border: '1px solid #D3D8DC', marginBottom:'30px'}}
                        type={showPassword ? 'text' : 'password'}
                        value={password2}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {error2 && <p style={{color: 'red'}}>{error2}</p>}
                    <Link to={'/reset-password'}>
                        <Button sx={{fontFamily: 'BasisGrotesqueProMedium', fontSize: "16px",width: '100%', marginBottom:'20px'}} variant="contained"
                                type="submit">Reset Password</Button>
                    </Link>
                </FormControl>

            </form>
        </div>
    );
};

export default ResetPassword;
