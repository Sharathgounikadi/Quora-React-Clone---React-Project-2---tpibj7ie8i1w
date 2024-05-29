import "../styles/App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import PostDetails from "./PostDetails";
import Navbar from "./Navbar";
import Home from "./Home";
import {Notification} from "./Notification";
import Rightbar from "./Rightbar";
import ComingSoon from "./ComingSoon";
import Spaces from "./Spaces";
import { ToastContainer, toast } from 'react-toastify';
import CreatePost from "./CreatePost";

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
        </Routes>
      </Router>
    </>
   
  )
}

export default App;
