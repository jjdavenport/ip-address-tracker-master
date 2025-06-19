import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import Card from "./components/card.jsx";
import Map from "./components/map.jsx";

function App() {
  const [data, setData] = useState({
    ip: "",
    city: "",
    country: "",
    timeZone: "",
    isp: "",
    lat: 0,
    lng: 0,
  });
  const [input, setInput] = useState(null);

  const fetchIp = async (ipAddress = null) => {
    try {
      const url = ipAddress
        ? `https://ipapi.co/${ipAddress}/json/`
        : `https://ipapi.co/json/`;
      const response = await fetch(url);
      const result = await response.json();
      setData((prev) => ({
        ...prev,
        lat: result.latitude,
        lng: result.longitude,
        ip: result.ip,
        country: result.country_code,
        city: result.city,
        isp: result.org,
        timeZone: result.timezone,
      }));
      console.log(result);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden">
        <div className="relative flex flex-col items-center font-custom text-customSize text-lg">
          <Header
            onSubmit={fetchIp}
            input={input}
            setInput={(e) => setInput(e.target.value)}
          />
          <main className="flex flex-col items-center">
            <Card
              ip={data.ip}
              city={data.city}
              country={data.country}
              timeZone={data.timeZone}
              isp={data.isp}
            />
            <Map lat={data.lat} lng={data.lng} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
