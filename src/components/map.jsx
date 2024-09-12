import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationIcon from "./assets/icon-location.svg";

const Map = () => {
  const position = [51.505, -0.09];

  const customMarkerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [46, 56],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "50vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup />
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
