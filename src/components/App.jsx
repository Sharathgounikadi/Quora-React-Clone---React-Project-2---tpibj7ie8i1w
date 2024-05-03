import "../styles/App.css";
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import Home from "./Home";
import Notification from "./Notification";
import Rightbar from "./Rightbar";
import ComingSoon from "./ComingSoon";
import Spaces from "./Spaces";

import AskDialog from "./AskDialog";



function App() {
  return (
  <Router>
    {/* <SignUp /> */}
    <Navbar />

    {/* <Home /> */}
    <Routes>
    <Route path='/ComingSoon' element={<ComingSoon />}/>
    <Route path='/Spaces' element={<Spaces />}/>
    
      {/* <Route path="/" element={<SignUp />}/>  */}
      <Route path="/" element={<Home />}/>
      <Route path='/notification' element={<Notification />}/>
      
      <Route path="/question/:id" element={<PostDetails/>}/>
      <Route path='/AskDialog' element={<AskDialog />}/>
    </Routes>
    {/* <Main /> */}
    </Router>
  )
}

export default App;
