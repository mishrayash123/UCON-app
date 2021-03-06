import React from "react";

const Wishes = props => {
    let time = new Date().getHours();
    console.log(time)


    return (


        <div className="text-fuchsia-900 dark:text-green-500 font-mono italic font-extrabold  text-3xl ml-3.5 mt-28 bg-rose-100 dark:bg-black">
            <>{
                time >= 0 && time < 12 ? <h1>
                    Good morning 🌅</h1> : time >= 12 && time < 18 ? <h1>Good afternoon ☀️</h1> : time >= 18 && time < 23.59 ? <h1>Good evening 🌇</h1> : null
            } </>

        </div>
    );
};


export default Wishes;
