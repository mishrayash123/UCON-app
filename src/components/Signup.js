import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from "react-icons/fc";


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
        <div className="mt-5 mb-72">
            <form onSubmit={signup} 
                className=" mx-auto w-50 mt-5  bg-light text-dark bg-opacity-10 border border-light border border-3 border-opacity-10 rounded">
                <h5 className="text-center m-3 text-light text-2xl">Sign up</h5>
                <a className=" btn  text-1xl text-center text-light bg-light  bg-opacity-10  w-100 flex items-center justify-center" rel="noreferrer noopener" onClick={sum2}>
                    Sign in with
                    <span className="mx-1 text-3xl">
                        <FcGoogle/>
                    </span>
                </a>
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
        <button type="submit" className="btn btn-dark m-3 dark:hover:bg-red-900"
           onClick={signup} >Sign up</button>
    </form>
</div>
    );
}