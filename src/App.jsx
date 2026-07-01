import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Movielist from "./Components/Movielist";
import Pagination from "./Components/Pagination";



function App() {


  return (
    <>
      <Navbar />
      
      <Movielist/>
      <Pagination/>
    </>
  )
}

export default App
