import "../styles/App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import PostDetails from "./PostDetails";
import Home from "./Home";
import ComingSoon from "./ComingSoon";
import CreatePost from "./CreatePost";
import Answers from "./Answers";
import Login from "./SingupLoginModal/Login";
import { Navigate } from 'react-router-dom';
import Notification from "./Notification";



const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // check if the token exists
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {


  return (
    <> 
      <Router>
      {/* <NavbarDefault /> */}
        <Routes>
          <Route path="/" element={<Login/> } />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
{/* 
          <Route
            path="/notification"
            element={
              <PrivateRoute>
                <Notification />
              </PrivateRoute>
            }
          /> */}
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
          <Route path="/Answers"
            element={
              <PrivateRoute>
                <Answers />
              </PrivateRoute>} />

        </Routes>
        
      </Router>
    </>

  )
}

export default App;
