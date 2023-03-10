import React, { useState } from 'react'
import image from '../assets/google.jpeg'
import image1 from '../assets/facebook.jpeg'
import {getDatabase, ref, set} from "firebase/database"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { app } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const db = getDatabase(app)
const auth = getAuth(app);


const Signup = ()=> {

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [pass, setPass] = useState("");

const createUser = ()=>{
    createUserWithEmailAndPassword(auth, email, pass).then(value=>{
        set(ref(db, "userData/" + value.user.uid), {
            email: email,
            name: name,
            password: pass,
        });
        navigate("/");
    }).catch(err=>{
        console.log(err);
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
        <div className="subSecondHeading">Create A New Account</div>
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
                <label for="name"/><br/>
                <input type="text" placeholder="Name" className="emailAdd" autocomplete="off" onChange={event=>{setName(event.target.value)}}/><br/>
            </div>
            <div className="formEmailHeading">
                <label for="email"/><br/>
                <input type="text" placeholder="Email Address" className="emailAdd" autocomplete="off" onChange={event=>{setEmail(event.target.value)}}/><br/>
            </div>
            <div className="formPasswordHeading">
                <label for="password"/><br/>
                <input type="password" placeholder="Password" className="passWord" autocomplete="off" id="id_password" onChange={event=>{setPass(event.target.value)}}/><br/>
            </div>
        </form>
       <button className="subThirdContainer">
         <div className="subThirdHeading" onClick={createUser}>Create Account</div>
         </button>
        <div className="subFourthHeading">Already have an account?<span className="sign_up_pointer">Sign In</span></div>
    </div>
    </>
  );
}

export default Signup;
