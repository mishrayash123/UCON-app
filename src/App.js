import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
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
    const [search, setSearch] = useState("all");
    const [contest, setcontest] = useState([]);
    const [yash, setyash] = useState(false);
    const [fav, setfav] = useState([]);
    const [theme, settheme] = useState("light");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
          
            setyash(true);
            console.log(user);
          } else {
           
            setyash(false);
          }
        });
        getcontest();
      }, [auth.currentUser]);

    //   useEffect(() => {
    //     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         document.documentElement.classList.add('dark')
    //       } else {
    //         document.documentElement.classList.remove('dark')
    //       }
    //   }, [theme]);

    const getcontest = async () => {
        const result = await Axios.get(`https://kontests.net/api/v1/${search}`);
         console.log(result);
        setcontest(result.data);
    }

    const onInputChange = e => {
        setSearch(e.target.value)
    };

    const onSearchClick = (event) => {
        event.preventDefault();
        console.log(search);
        getcontest(search);
        setSearch("");
    };

    // const darkl = (event) => {
    //    if(theme === 'light'){
    //     document.documentElement.classList.add('dark')
    //     settheme("dark");
    //     console.log(theme)
    //    }
    //    else{
    //     document.documentElement.classList.remove('dark')
    //     settheme("light");
    //     console.log(theme)
    //    }
    // };


    return (
         <div className='bg-white dark:bg-dark'>
        <BrowserRouter>
       <Navbar setfav={setfav} />
       {/* <button className='btn btn-light mt-28' onClick={darkl}> click me</button> */}
       <Wishes />
       <Searchbar search={search}
                onSubmit={onSearchClick}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}/>
            <Routes>
                <Route path="/login" element={<div>
                <Login />
                <Footer />
            </div>}  />
            <Route path="/" element={
                <div className="App">
                 <> { yash ? <div> <Contest contest={contest} /> <Footer /></div>: <div>
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
            <Route path="/sites" element={<div>
                <Sites />
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
