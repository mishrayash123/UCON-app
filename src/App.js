import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import {useEffect, useState} from "react";
import Axios from "axios";
import Contest from './components/Contest';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Signup from './components/Signup';
import Forget from './components/Forget';
import Sites from './components/Sites';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase-config";
import Fav from "./components/Fav"
import Wishes from './components/Wishes';



function App() {
    const [yash, setyash] = useState(false);
    const [fav, setfav] = useState([]);
    const [theme, settheme] = useState("light");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
          
            setyash(true);
          } else {
           
            setyash(false);
          }
        });
      }, [auth.currentUser]);

  


    return (
         <div className="bg-rose-100 dark:bg-black">
        <BrowserRouter>
       <Navbar setfav={setfav} />
       <Wishes />
            <Routes>
                <Route path="/login" element={<div>
                <Login />
                <Footer />
            </div>}  />
            <Route path="/" element={
                <div className="App">
                 <> { yash ? <div> <Sites /> <Footer /></div>: <div>
                <Login />
                <Footer />
            </div>
                } </>   
            </div>
            } />
            <Route path="/signup" element={<div>
                <Signup />
                <Footer />
            </div>} />
         <Route path="/forget" element={<div>
                <Forget />
                <Footer />
            </div>} />
            <Route path="/contests" element={<div>
                <Contest />
                <Footer />
            </div>} />
            <Route path="/fav" element={<div>
          <> { yash ? 
                    <div> <Fav fav={fav}/> <Footer />
                    </div> : <div>
                    <Login />
                    <Footer />  
                    </div>
                } </>
          
          </div>} />
            </Routes>
        </BrowserRouter>
        </div>
        
    );
}

export default App;
