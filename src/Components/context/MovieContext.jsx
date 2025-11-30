import { Children, createContext } from "react";

const MovieContext= createContext();

const MovieProvider=({Children}) =>{

    const [page, setpage]=useState(1);
    const [loading,setLoading]=useState(flase);
 return(
    <UserContext.Provider
     value={{
        setpage,
        page,
        loading,
        setLoading,
        }}>
    {Children}
    </UserContext.Provider>
 )

}

export default MovieContext;