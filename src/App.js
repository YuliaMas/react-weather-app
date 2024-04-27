import "./App.css";
import { Audio } from "react-loader-spinner";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="weather-app">
          <h1> The Weather </h1>
          {/* <Weather /> */}
          <Footer />
          <Audio
            height="80"
            width="80"
            radius="9"
            color="yellow"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      </div>
    </div>
  );
}

export default App;
