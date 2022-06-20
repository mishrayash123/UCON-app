import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

export default function NavBar() {

  const [ya, setya] = useState(false);
  const [st, setst] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setst(user.email);
        setya(true);
        console.log(user);
      } else {
        setya(false);
      }
    });
  }, [auth.currentUser]);

  const logout = async () => {
    signOut(auth)
      .then(() => {
        alert("Successfully logout");
      })
      .catch((error) => {});
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg></h1>
    <h1 className="text-warning mx-1">UCON</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light mx-3" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      <ul className="navbar-nav ">
      <li className="nav-item mx-3">
          <a className="nav-link text-light" href="https://github.com/mishrayash123/UCON-app"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-light" to="/login">Log in</Link>
        </li>
        <>
            {ya ? (
        <li className="nav-item mx-2">
        <button type="button" className="btn btn-light" onClick={logout}>{st}</button>
        </li>
        ) : null}
        </>
      </ul>
    </div>
  </div>
</nav>
  );
}
