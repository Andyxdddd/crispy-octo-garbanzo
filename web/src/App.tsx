import { useEffect, useState } from "react";

const URL = "http://localhost:5298/weatherforecast";

interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const App = () => {
  const [data, setData] = useState<WeatherData[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-sky-900 w-screen h-screen text-white flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1>Weather Forecast</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
          {data.map((day) => (
            <div key={day.date} className="bg-sky-800 p-4 rounded-lg">
              <h2 className="text-lg font-bold">{day.date}</h2>
              <p className="text-sm">{day.summary}</p>
              <p className="text-sm">
                {day.temperatureC}°C / {day.temperatureF}°F
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
