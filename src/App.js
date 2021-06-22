import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";

function App() {
  return (
    <div className="app__main">
      <Header />
        <Sidebar />
        <FilesView />
    </div>
  );
}

export default App;
