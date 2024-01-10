import React from "react";
import { useNavigate } from "react-router-dom";

const Sites = props => {
    const nav = useNavigate();

    return (
        <div className="row row-cols-1 row-cols-md-3 mx-3 g-4 mt-4 mb-72">

            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"codeforces"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">CodeForces </h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"codeforces-gym"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">CodeForces::Gym</h6>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"atcoder"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">AtCoder</h6>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"codechef"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">CodeChef</h6>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"hackerrank"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">HackerRank</h6>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"hackerearth"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">HackerEarth </h6>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"toph"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">Toph</h6>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col cursor-pointer" onClick={
              (e) => {
                nav('/contests', { state: { id:"leetcode"} });
              }
          }>
                <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark ">
                    <div className="card-body">
                        <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                            <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-dark   border border-light border  border-opacity-10">
                                <h6 className="text-light text-center">LeetCode </h6>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sites;
