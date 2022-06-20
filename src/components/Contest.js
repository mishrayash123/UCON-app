import React from "react";

const Contest = (props) => {
    const {contest} = props;

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
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
                                <a href={
                                contest.url
                            }
                            className="btn text-light"
                            target="_blank"
                            rel="noreferrer noopener">Register</a>  
                            </ul>
                        </div>
                    </div>
                </div>
            ))
        } </div>
    );
};

export default Contest;
