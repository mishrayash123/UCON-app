import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "./firebase-config";
import {doc, deleteDoc} from "firebase/firestore";


const Fav = (props) => {
    const {fav} = props;
    const [uid, setuid] = useState("hfhjgvhb");
    const length =fav.length;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuid(user.uid);

                console.log(user);
            } else {
                setuid("");

            }
        });

    }, [auth.currentUser]);

 
    return (
        <>
        { length===0 ? <div>
            <h2 className="text-white font-serif text-3xl text-center mt-28 ">You have no favourite items</h2>
            <h2 className="text-white font-serif text-9xl text-center my-20">🙅</h2>
            
        </div>  :
        <div className="row row-cols-1 row-cols-md-3 mx-3 g-4 mt-4 mb-72">
            {
            fav.map(fav => (
                <div className="col">
                    <div className="card bg-light text-dark bg-opacity-10">
                        <div className="card-body">
                            <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        fav.name
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        fav.site
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Start Time : {
                                        fav.start_time
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-light text-dark bg-opacity-10  border border-light border  border-opacity-10">
                                    <h6 className="text-light">End Time : {
                                        fav.end_time
                                    }</h6>
                                </li>
                                <div className="border border-light border  border-opacity-25">
                                    <a href={
                                            fav.url
                                        }
                                        className="btn  text-light bg-light  bg-opacity-10  w-100"
                                        target="_blank"
                                        rel="noreferrer noopener">Go to contest &#10148;</a>
                                </div>
                                <div className="border border-light border  border-opacity-25">
                                    <button className="btn  text-light bg-light  bg-opacity-10  w-100"
                                        onClick={
                                            async (e) => {

                                                deleteDoc(doc(db, uid, fav.name));
                                                alert("Deleted from favourites");


                                            }
                                    }>
                                        Delete from fav &#9825;</button>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            ))
        } </div>
    }
    </>
    );
};


export default Fav;
