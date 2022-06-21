import React from "react"


const Searchbar = props => {
    const {search, onInputChange, onSearchClick }= props;
  
  return (

    <div>
      
        <h2 className="text-white font-serif text-3xl text-center mt-28">Upcoming coding contests</h2>
    <form className="m-5" onSubmit={onSearchClick}>
  <div className="input-group">
  <input type="text" className="form-control bg-gradient-to-r from-red-800 text-white outline-double" placeholder="Search by username" value={search} onChange={onInputChange}  aria-label="Search by username" aria-describedby="basic-addon2" />
  <button type="button" className="btn btn-primary outline-double" onClick={onSearchClick}>Search</button>
</div>
  </form>
  </div>
  );
}
export default Searchbar; 