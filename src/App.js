import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <h1> The Weather </h1>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
