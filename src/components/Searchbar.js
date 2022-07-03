import React from "react"


const Searchbar = props => {
    const {search, onInputChange, onSearchClick }= props;
  
  return (

    <div className="bg-rose-100 dark:bg-black">
      
        <h2 className="text-fuchsia-900  dark:text-amber-500 font-serif text-3xl text-center mt-8">Upcoming coding contests</h2>
    <form className="m-5" onSubmit={onSearchClick}>
  <div className="input-group">
  <input type="text" className="form-control bg-gradient-to-r from-orange-500 via-purple-900 to-pink-900 dark:text-white outline-double" placeholder="Search by username" value={search} onChange={onInputChange}  aria-label="Search by username" aria-describedby="basic-addon2" />
  <button type="button" className="btn   dark:text-white outline-double hover:bg-blue-500 dark:hover:bg-red-600" onClick={onSearchClick}>Search</button>
</div>
  </form>
  </div>
  );
}
export default Searchbar; 