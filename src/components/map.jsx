import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationIcon from "./assets/icon-location.svg";

const Map = ({ lat, lng }) => {
  const customMarkerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [46, 56],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const loading = lat !== 0 && lng !== 0;

  return (
    <div className="flex h-96 w-screen flex-1">
      {loading && (
        <MapContainer
          center={[lat, lng]}
          zoom={13}
          style={{ height: "70vh", width: "100%", zIndex: 0 }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            zIndex={0}
          />
          <Marker position={[lat, lng]} icon={customMarkerIcon}>
            <Popup />
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
