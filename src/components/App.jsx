import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Main from  "./Main";
import SignUp from "./SignUp";


function App() {
  return <div>
    <Routes>
      <Route path="/" element={<SignUp />}/> 
      <Route path="/main" element={<Main />}/>
    </Routes>
    <Main />
  </div>;
}

export default App;
