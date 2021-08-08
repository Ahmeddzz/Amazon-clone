import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); // Prevents from refreshing

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className="login__logo"
            src='https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/2020/03/amazon-logo_450x250.jpg' 
            alt='' />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange = {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange = {e => setPassword(e.target.value)}/>

                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>

                </form>
                
                <p>
                
                    By signing-in you agree to Ahmed's Conditions of Use & Sale. 
                    Please see our privacy Notice,
                    our Cookies Notice and our interest-based Ads.
              
                </p>
                 <h5 className="login__newToAmazon">------------------New to Amazon?------------------</h5>
                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
                <h5 className="login__newToAmazon">---------------------------or--------------------------</h5>
                
                <div className="login__subContainers">
                    
                    <img className="login__subLogo"
                    src='https://mpng.subpng.com/20180607/poh/kisspng-google-logo-computer-icons-mei-qi-5b19042809dd50.8354117915283661200404.jpg' 
                    alt='' />
                    
                <img className="login__subLogo"
                    src='https://spng.subpng.com/20171221/wgw/facebook-picture-5a3c060eccfa84.1675788915138831508396.jpg' 
                    alt='' />
                <img className="login__subLogo"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUt3gLS2HYbZGR5HSKOBviAkooYrrRkB_Q1fG2OATB30cfX2EG0LbOXGGk6EVqwV6DO8&usqp=CAU' 
                    alt='' />

                </div>
           
            </div>
            

            
        </div>
    )
}

export default Login
