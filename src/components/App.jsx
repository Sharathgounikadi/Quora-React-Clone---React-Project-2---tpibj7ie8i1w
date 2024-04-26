import "../styles/App.css";
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import Home from "./Home";
import Notification from "./Notification";



function App() {
  return (
  <Router>
    {/* <SignUp /> */}
    <Navbar />
    {/* <Home /> */}
    <Routes>
      {/* <Route path="/" element={<SignUp />}/>  */}
      <Route path="/" element={<Home />}/>
      <Route path='/Notification' element={<Notification />}/>
      <Route path="/question/:id" element={<PostDetails/>}/>
    </Routes>
    {/* <Main /> */}
    </Router>
  )
}

export default App;
