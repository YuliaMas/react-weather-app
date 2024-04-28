export default function Main(props) {
  return (
    <main className="p-0">
      <h1 className="current-city text-capitalize" id="current-city">
        {props.city.toLowerCase()}
      </h1>
      <div className="current-weather d-flex justify-content-between align-items-end">
        <div>
          <div className="current-temperature-icon">
            <img src={props.icon} alt={props.description} />
          </div>
          <h5> {props.description.toUpperCase()}</h5>{" "}
          <p className="current-details">
            Humidity: <strong>{props.humidity}%</strong>, Wind:{" "}
            <strong>{props.wind}km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <div>
            <span
              className="current-temperature-value"
              id="current-temperature"
            >
              {props.temp}
            </span>
            <span className="current-temperature-unit">°C</span>{" "}
            <span className="current-temperature-unit">|</span>{" "}
            <span className="current-temperature-unit">°F</span>
            <p className="current-date current-details lh-lg">
              <b>
                <span id="current-date">28-04-2024</span>,{" "}
                <strong id="current-day">Sunday</strong> <br />{" "}
                <span id="current-time" className="mt-3 lh-lg">
                  17:00
                </span>
              </b>{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
