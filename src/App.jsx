import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";


function App() {
  return(
    <div className ="bg-[#171d32] h-auto w-full overflow-hidden" >
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
  
}
  

export default App;
