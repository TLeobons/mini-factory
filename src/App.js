import back from "./images/back.jpg";
import './App.css';
import HomePage from "./home/HomePage";
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${back})`, height: "100%" }}>
      <HomePage />
    </div>
  );
}

export default App;