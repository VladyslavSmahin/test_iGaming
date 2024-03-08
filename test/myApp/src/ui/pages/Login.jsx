import React, {useState} from 'react';
import {Button, Box, createTheme, TextField} from "@mui/material";
import BasisGrotesqueProMedium from '../../../public/BasisGrotesquePro-Medium.ttf';
import LoginPassword from "./LoginPassword.jsx";
import Email from "../Components/Email.jsx";

const theme = createTheme({
    typography: {
        fontFamily: 'BasisGrotesqueProMedium, Arial', // Указание вашего шрифта
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'BasisGrotesqueProMedium';
          font-style: normal;
          font-display: fallback;
          font-weight: 400;
          src: local('BasisGrotesqueProMedium'), url(${BasisGrotesqueProMedium}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
});
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validEmail === false){
            setValidEmail(true)
        }
        const userData = {
            email: email,
            password: password
        };
        try {
            const response = await fetch('https://auth-qa.qencode.com/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {
                console.log('УСПЕХ');
                // Здесь можно сохранить полученный токен в состоянии или локальном хранилище
            } else {
                console.log('Неверные данные пользователя');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }

    };

    return (
        <div className='loginBlock'>
            <h2 className='loginBlockName'>Log in to your account</h2>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Button className='buttonGoogle' sx={{
                    width: '192px',
                    height: '48px',
                    marginBottom: '76px',
                    fontFamily: 'BasisGrotesqueProMedium',
                    color: '#060E1E'
                }}
                        variant="outlined" type="submit">Google</Button>
                <Button className='buttonGithub' sx={{
                    width: '192px',
                    height: '48px',
                    marginBottom: '76px',
                    fontFamily: 'BasisGrotesqueProMedium',
                    color: '#060E1E'
                }}
                        variant="outlined" type="submit">Github</Button>
            </Box>
            <span className='or'>OR</span>
            <form className='loginBlockForm' onSubmit={handleSubmit}>
                <Email
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    sx={{backgroundColor: 'white'}}

                />
                {validEmail && <LoginPassword/>}
                <Button sx={{fontFamily: 'BasisGrotesqueProMedium', fontSize: "16px"}} variant="contained"
                        type="submit">Log in in to Qencode</Button>
            </form>
        </div>
    );
};

export default Login;
