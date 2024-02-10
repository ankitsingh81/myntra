import './style.css'
import { GoogleLogin } from '@react-oauth/google';
import Navbar from "../components/navbar";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { userLoginThunk } from '../../redux-config/userSlice';

function Login() {
    const dispatch = useDispatch();
    const LoginHandler = (email) => {
        dispatch(userLoginThunk({ email }))
    }
    return <>
        <div className='main-container'>
            <Navbar />
            <div className='login-container cantainer d-flex justify-content-center align-items-center'>
                <div className='login-wrapper'>
                    <img className='banner1' src="https://assets.myntassets.com/assets/images/2023/10/26/f96c9b3f-6c5c-4383-8f11-12de043faa501698300150501-Flat_400--1-.jpg" alt="" />
                    <div className='body-wrapper'>
                        <div><span className='fw-bold fs-5 color1'>Login</span> or  <span className='fw-bold fs-5 color1' >Signup</span></div>
                        <div className='input-field p-1'> <span className='code'>+91 |</span> <input type="text" /></div>
                        <div class="midLinks">By continuing, I agree to the <a href="/termsofuse">Terms of Use</a> &amp; <a href="/privacypolicy">Privacy Policy</a></div>
                        <button className='continue-btn fw-bold'>Continue</button>
                        <div class="get-help">Have trouble logging in? <span>Get help</span></div>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                let data = jwtDecode(credentialResponse.credential)
                                LoginHandler(data?.email)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Login;