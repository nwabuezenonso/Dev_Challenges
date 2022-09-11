import React from "react"
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import OurTeam from "./components/OurTeam";
import WhoAreWe from "./components/WhoAreWe";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <WhoAreWe/>
      <OurTeam/>
      <BlogPage/>
      <Footer/>
    </div>
  );
}

export default App;
