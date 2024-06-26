import "./current-weather.css"

const CurrentWeather = ({data}) => {
    const today = new Date();
    const day = today.getDay();
    const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
    console.log(today.getDay());
    var newDay;
    switch(day){
        case 0:
            newDay = "Sunday";
            break;
        case 1:
            newDay = "Monday";
            break;
        case 2:
            newDay = "Tuesday";
            break;
        case 3:
            newDay = "Wednesday";
            break;
        case 4:
            newDay = "Thursday";
            break;
        case 5:
            newDay = "Friday";
            break;
        case 6:
            newDay = "Saturday";
            break;
        default:
            break;
    }
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{newDay +" "+ date}</p>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weatehr-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-label">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">wind</span>
                        <span className="parameter-label">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-label">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Preasure</span>
                        <span className="parameter-label">{data.main.pressure}hpa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;