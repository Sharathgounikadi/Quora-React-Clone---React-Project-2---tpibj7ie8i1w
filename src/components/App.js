import "../styles/App.css";
import Header from "./Header";
import Posts from "./Posts";
import SideBar from "./SideBar";

import SignUp from "./SignUp";


function App() {
  return <div>
    <Header />
    {/* <SignUp /> */}
    <SideBar />
    <Posts />
  </div>;
}

export default App;
