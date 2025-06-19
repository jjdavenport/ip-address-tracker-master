import Header from "./components/header.jsx";
import Card from "./components/card.jsx";
import Map from "./components/map.jsx";
import useData from "./hooks/data-context.jsx";

function App() {
  const { data, setData, handleBlur, handleSubmit, error } = useData();
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden">
        <div className="relative flex flex-col items-center font-custom text-customSize text-lg">
          <Header
            onSubmit={handleSubmit}
            onBlur={handleBlur}
            input={data.input}
            setInput={(e) =>
              setData((prev) => ({ ...prev, input: e.target.value }))
            }
            error={error}
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
