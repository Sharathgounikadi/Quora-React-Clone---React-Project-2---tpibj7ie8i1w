import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Main from  "./Main";
import SignUp from "./SignUp";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";


function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<SignUp />}/> 
      <Route path="/main" element={<Main />}/>
      <Route path="/question/:id" element={<PostDetails/>}/>
    </Routes>
    {/* <Main /> */}

  </div>;
}

export default App;
