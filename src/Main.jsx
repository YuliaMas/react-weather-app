export default function Main(props) {
  return (
    <main>
      <div class="current-weather">
        <div>
          <h1 class="current-city" id="current-city">
            {props.city}
          </h1>
          <span className="current-temperature-icon">
            <img src={props.icon} alt={props.description} />
          </span>
          <p class="current-details">
            <span id="current-date">Sunday 17:00</span>, {props.description}{" "}
            <br />
            Humidity: <strong>{props.humidity}%</strong>, Wind:{" "}
            <strong>{props.wind}km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <span className="current-temperature-value" id="current-temperature">
            {props.temp}
          </span>
          <span className="current-temperature-unit">°C</span>
        </div>
      </div>
    </main>
  );
}
