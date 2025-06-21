import { Header, Card, Map } from "./components/index.jsx";
import useData from "./hooks/data-context.jsx";

function App() {
  const { data, setData, handleBlur, handleSubmit, error } = useData();
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden">
        <div className="relative flex flex-col items-center font-custom text-lg">
          <Header
            onSubmit={handleSubmit}
            onBlur={handleBlur}
            input={data.input}
            setInput={(e) =>
              setData((prev) => ({ ...prev, input: e.target.value }))
            }
            error={error}
          />
          <Card
            ip={data.ip}
            city={data.city}
            country={data.country}
            timeZone={data.timeZone}
            isp={data.isp}
          />
        </div>
        <main className="z-0 flex flex-col items-center">
          <Map lat={data.lat} lng={data.lng} />
        </main>
      </div>
    </>
  );
}

export default App;
