import React from "react";

const Searchbar = props => {
    const {search, onInputChange, onSearchClick }= props;
  
  return (

    <div>
        <h2 className="text-warning text-center mt-5">Upcoming coding contests</h2>
    <form className="m-5" onSubmit={onSearchClick}>
  <div className="input-group ">
  <input type="text" className="form-control" placeholder="Platform's name" value={search} onChange={onInputChange}  aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <button type="button" className="btn btn-primary " onClick={onSearchClick}>Search</button>
</div>
  </form>
  </div>
  );
}
export default Searchbar;  