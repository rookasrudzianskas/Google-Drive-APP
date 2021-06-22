import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import {useState} from "react";
import SideIcons from "../src/components/sideIcons/index";

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="app">
      <Header userPhoto={user.photoUrl} />
        <div className="app__main">
          <Sidebar />
          <FilesView />
          <SideIcons />
        </div>
    </div>
  );
}

export default App;
