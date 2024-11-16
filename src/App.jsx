import Header from "./components/header.jsx";
import Card from "./components/card.jsx";
import Map from "./components/map.jsx";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden">
        <div className="relative flex flex-col items-center font-custom text-customSize text-lg">
          <Header />
          <main className="flex flex-col items-center">
            <Card />
            <Map />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
