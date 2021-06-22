import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import {useState} from "react";

function App() {

  const [user, setUser] = useState({
    displayName: "Rokas Rudzianskas",
    email: "rokas.rudzenskas@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoUrl: "https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg",
  })
  return (
    <div className="app__main">
      <Header userPhoto={user.photoUrl} />
        <Sidebar />
        <FilesView />
    </div>
  );
}

export default App;
