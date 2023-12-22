import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavBar from "./components/MyNavBar";
import MyMain from "./components/MyMain";
/* import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2"; */

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyMain />
    </div>
  );
}

export default App;
