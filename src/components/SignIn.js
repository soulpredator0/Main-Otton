import React, { useState } from 'react'
import image from '../assets/google.jpeg'
import image1 from '../assets/facebook.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { app } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);


const Signin = ()=> {

    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [pass, setPass] = useState("");


const userSign = ()=>{
    signInWithEmailAndPassword(auth, email, pass).then(value =>{
        console.log("Successfully sign");
        navigate("/home");
    }).catch(err=>{
        console.log("Not Sign In");
    })
}

  return (
<>
    <div className="container">
        <div className="firstHeading">Enjoy The Free Platform</div>
        <div className="secondHeading">OTTON</div>
        <div className="thirdHeading">Movies, Web Series etc.</div>
    </div>

    <div className="subContainer">
        <div className="subFirstHeading">English (UK)</div>
        <div className="subSecondHeading">Join With Your Account</div>
        <div className="both_btn">
        <div className="google">
            <button>
                <div className="logo_google">
                    <img src={image} alt="image" width="30px" height="30px"/>
                </div>
                <div className="googleParagraph">Sign in with Google</div>
            </button>
        </div>
        <div className="facebook">
            <button>
                <div className="logo_facebook">
                    <img src={image1} alt="image" width="23px" height="23px"/>
                </div>
                <div className="facebookParagraph">Sign in with Facebook</div>
            </button>
        </div>
    </div>
        <div id="or">-OR-</div>
        <form className="FormHeading">
            <div className="formEmailHeading">
                <label htmlFor="email"/><br/>
                <input type="text" placeholder="Email Address" className="emailAdd" autocomplete="off" onChange={event =>setEmail(event.target.value)}/><br/>
            </div>
            <div className="formPasswordHeading">
                <label htmlFor="password"/><br/>
                <input type="password" placeholder="Password" className="passWord" autocomplete="off" id="id_password" onChange={event =>setPass(event.target.value)}/><i className="far fa-eye eye_btn" id="togglePassword"></i><br/>
            </div>
        </form>
       <button className="subThirdContainer">
         <div className="subThirdHeading" onClick={userSign}>Sign In Account</div>
         </button>
        <div className="subFourthHeading">Don’t have an account?<span className="sign_up_pointer"> Sign Up</span></div>
    </div>
    </>
  );
}

export default Signin;
