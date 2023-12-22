import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavBar from "./components/MyNavBar";
import MyMain from "./components/MyMain";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyMain />
{/*       <Gallery1 />
      <Gallery2 />
      <Gallery3 /> */}
      {/* prova singolo gallery e poi metti in main */}

    </div>
  );
}

export default App;
