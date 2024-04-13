import "../styles/App.css";
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";
import Main from  "./Main";
import SignUp from "./SignUp";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import Home from "./Home";



function App() {
  return (
  <Router>
    <Navbar />
    <Home />
    <Routes>
    
      <Route path="/" element={<SignUp />}/> 
      {/* <Route path="/main" element={<Main />}/>
      <Route path="/question/:id" element={<PostDetails/>}/> */}
    </Routes>
    {/* <Main /> */}
    </Router>
  )
}

export default App;
