import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./ui/pages/Login.jsx";
import Header from "./ui/Components/Header.jsx";
import ResetPassword from "./ui/pages/ResetPassword.jsx";
import ForgotPassword from "./ui/pages/ForgotPassword.jsx";

function App() {
    return (
        <Router>
            <div className="mainContent">
                    <Header/>
                <div className='pages'>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/reset-password" element={<ResetPassword/>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}


export default App;
