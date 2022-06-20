import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Signup() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [sy, setsy] = useState("");


    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });

    const sum2 = async (event) => {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
        
    };



    const signup = async (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, Email, Password).then((userCredential) => { // Signed in
            const user = userCredential.user;
            alert("user signed up successfully");
        }).catch((error) => {
            const errorCode = error.code;
            setsy(errorCode);
        });
    };

    return (
        <div mt-5>
            <form onSubmit={signup} 
                className=" mx-auto w-50 mt-5  bg-light text-dark bg-opacity-10 border border-light border border-3 border-opacity-10 rounded">
                <h5 className="text-center m-3 text-light">Sign up</h5>
                <h3 type="button" className="text-light text-center" onClick={sum2}>Sign up with <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg></h3>
                <h5 className="text-center m-3 text-light">OR</h5>
                <div className="m-3">
                    <label className="form-label text-light">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }
                       />
                </div>
            <div className="m-3">
                <label className="form-label text-light">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }
                    />
            </div>
        <p className="m-3 text-danger">
        {sy} </p>
        <p className="m-3 text-light">If you have an account :
            <Link to="/login" className="nav-link text-danger">Log in</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3"
           onClick={signup} >Sign up</button>
    </form>
    <div className=" mt-5">
        <h5 className=" text-center text-light">Made ♡  by Yash</h5>
    </div>
</div>
    );
}