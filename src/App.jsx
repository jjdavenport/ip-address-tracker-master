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

  const fetchIp = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`,
      );
      const result = await response.json();
      setData((prev) => ({
        ...prev,
        lat: result.location.lat,
        lng: result.location.lng,
        ip: result.ip,
        country: result.location.country,
        city: result.location.city,
        isp: result.isp,
        timeZone: result.location.timezone,
      }));
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden">
        <div className="relative flex flex-col items-center font-custom text-customSize text-lg">
          <Header setData={setData} />
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
