/*import "./style.css";

const Searchbar = () => {
    return (
        <div className="searchBar">
            <input placeholder="Search Movie....." onchange={(e)=>setSearch(e.target.value)}/>

        </div>
    );
};

export default Searchbar;
*/

import "./style.css";

const Searchbar = ({ setSearch }) => {
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search Movie..."
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Searchbar;