import "./App.css";
import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather</h1>

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
  );
}

export default App;
