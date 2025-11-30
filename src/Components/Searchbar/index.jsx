import "./style.css";

const Searchbar = () => {
    return (
        <div className="searchBar">
            <input placeholder="Search Movie....." onchange={(e)=>setSearch(e.target.value)}/>

        </div>
    );
};

export default Searchbar;