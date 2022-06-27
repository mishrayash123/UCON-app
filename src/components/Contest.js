import React,{useEffect,useState} from "react";
import { doc, setDoc ,deleteDoc} from "firebase/firestore";
import { db } from "./firebase-config"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import {  getDoc } from "firebase/firestore";

const Contest = (props) => {
    const {contest} = props;
    const [uid, setuid] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
          setuid(user.uid);
          } else {
           setuid("");
          }
        });
        
      }, [auth.currentUser]);

    return (
        <div className="row row-cols-1 row-cols-md-3 mx-3 g-4 mt-4 mb-72">
            {
            contest.map(contest => (
                <div className="col">
                    <div className="card bg-light text-dark bg-opacity-10">
                        <div className="card-body">
                            <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        contest.name
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        contest.site
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Status : {
                                        contest.status
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">In 24 hour : {
                                        contest.in_24_hours
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Start Time : {
                                        contest.start_time
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">End Time : {
                                        contest.end_time
                                    }</h6>
                                </li>
                                <div className="border border-light border  border-opacity-25">
                                <a href={
                                contest.url
                            }
                        
                            className="btn  text-light bg-light  bg-opacity-10  w-100"
                            target="_blank"
                            rel="noreferrer noopener">Register &#10148;</a> 
                            </div> 
                            <div className="border border-light border  border-opacity-25">
                            <button  className="btn  text-light bg-light  bg-opacity-10  w-100" onClick={
                       async (e) =>{
                            const docRef = doc(db, uid,contest.name );
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                alert("Already in favourites");
                              } else {
                                setDoc(doc(db,uid,contest.name), {
                                    name : contest.name,
                                    site : contest.site,
                                    start_time:contest.start_time,
                                    end_time: contest.end_time,
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