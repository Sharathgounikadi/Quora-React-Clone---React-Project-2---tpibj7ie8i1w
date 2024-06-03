import "../styles/App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import PostDetails from "./PostDetails";
import Home from "./Home";
import {Notification} from "./Notification";
import ComingSoon from "./ComingSoon";
import CreatePost from "./CreatePost";
import Answers from "./Answers";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // check if the token exists
  return isAuthenticated ? children : <Navigate to="/" />;
};


function App() {

 
  return (
    <>
    {/* <ToastContainer/> */}
    <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/notification" 
            element={
              <PrivateRoute>
                <Notification />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/question/:id" 
            element={
              <PrivateRoute>
                <PostDetails />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/CreatePost" 
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/ComingSoon" 
            element={
              <PrivateRoute>
                <ComingSoon />
              </PrivateRoute>
            } 
          />
          <Route path="/Answers" element={<Answers/>}/>
        </Routes>
      </Router>
    </>
   
  )
}

export default App;
