import React from 'react'
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


function App() {
    const [search, setSearch] = useState("all");
    const [contest, setcontest] = useState([]);
    const [yash, setyash] = useState(false);

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


    return (

        <BrowserRouter>
       <Navbar/>
       <Sites />
       <Searchbar search={search}
                onSubmit={onSearchClick}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}/>
            <Routes>
                <Route path="/login" element={<div>
                <Login />
                
            </div>}  />
            <Route path="/" element={
                <div className="App">
                 <> { yash ? <div> <Contest contest={contest} /> <Footer /></div>: <Login />
                } </>   
            </div>
            } />
            <Route path="/signup" element={<Signup />} />
         <Route path="/forget" element={<Forget />} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
