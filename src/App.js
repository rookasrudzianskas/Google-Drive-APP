import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import {useState} from "react";
import SideIcons from "../src/components/sideIcons/index";
import {auth, provider} from "./firebase";

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if(!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      })
    }
  }

  return (
    <div className="app">
      {
        user ? (
            <>
                <Header userPhoto={user.photoURL} />
                   <div className="app__main">
                 <Sidebar />
                  <FilesView />
                  <SideIcons />
            </div>
            </>
        ) : (
            <div className="app__login">
              <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Drive.max-1100x1100.png" alt=""/>
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
        )
      }

    </div>
  );
}

export default App;
