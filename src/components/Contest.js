import React,{useEffect,useState} from "react";
import { doc, setDoc ,deleteDoc} from "firebase/firestore";
import { db } from "./firebase-config"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import {  getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const Contest = () => {
    const location = useLocation();
    const [contest, setcontest] = useState([]);
    const [uid, setuid] = useState("hfhgbjhn");


    const getcontest = async () => {
        fetch(`https://contest-hive.vercel.app/api/${location.state.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setcontest(data.data)
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
          setuid(user.uid);
          } else {
           setuid("");
          }
        });
        getcontest()
      }, [auth.currentUser]);

    return (
        <div className="row row-cols-1 row-cols-md-3 mx-3 g-4 mt-4 mb-72">
            {
            contest.map(contest => (
                <div className="col">
                    <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  text-black ">
                        <div className="card-body">
                            <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        contest.title
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                    Start Date : {new Date(contest.startTime).toDateString()} {new Date(contest.startTime).toTimeString()}</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">End Time : {new Date(contest.endTime).toDateString()} {new Date(contest.endTime).toTimeString()}</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Duration : {parseInt(contest.duration)/(60 * 60)} hr</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Site : {
                                        location.state.id
                                    }</h6>
                                </li>
                                <div className="border border-light border  border-opacity-25 ">
                                <a href={
                                contest.url
                            }
                        
                            className="btn  text-light bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  w-100"
                            target="_blank"
                            rel="noreferrer noopener">Register &#10148;</a> 
                            </div> 
                            <div className="border border-light border  border-opacity-25">
                            <button  className="btn  text-light bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 w-100" onClick={
                       async (e) =>{
                            const docRef = doc(db, uid,contest.title );
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                alert("Already in favourites");
                              } else {
                                setDoc(doc(db,uid,contest.title), {
                                    name : contest.title,
                                    site :location.state.id,
                                    start_time:contest.startTime,
                                    end_time: contest.endTime,
                                    duration:contest.duration,
                                    url : contest.url  
                                  }
                                  );
                                  alert("Copied in favourites");
                              }
                       }
                    }> Add to fav &#9829;</button>
                    </div>
                    </ul>
                        </div>
                    </div>
                </div>
            ))
        } </div>
    );
};

export default Contest;