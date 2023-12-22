import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavBar from "./components/MyNavBar";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyMain />
      {/* prova singolo gallery e poi metti in main */}
    </div>
  );
}

export default App;
