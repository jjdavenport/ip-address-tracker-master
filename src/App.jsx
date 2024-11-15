import Header from "./components/header.jsx";
import Card from "./components/card.jsx";
import Map from "./components/map.jsx";

function App() {
  return (
    <>
      <div className="relative flex h-full min-h-screen w-screen flex-col">
        <div className="relative flex flex-col items-center font-custom text-lg">
          <Header />
          <Card />
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
