import "../styles/App.css";
import Header from "./Header";
import Post from "./Post";
import SideBar from "./SideBar";

import SignUp from "./SignUp";


function App() {
  return <div>
    <Header />
    {/* <SignUp /> */}
    <SideBar />
    <Post />
  </div>;
}

export default App;
