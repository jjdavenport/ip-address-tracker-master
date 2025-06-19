import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "./assets/icon-location.svg";

const customMarkerIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [46, 56],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

export const Map = ({ lat, lng }) => {
  const loading = lat !== 0 && lng !== 0;
  const center = [lat, lng];
  const zoom = 13;

  return (
    <div className="flex h-96 w-screen flex-1">
      {loading && (
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "70vh", width: "100%", zIndex: 0 }}
          zoomControl={false}
        >
          <ChangeView center={center} zoom={zoom} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            zIndex={0}
          />
          <Marker position={center} icon={customMarkerIcon}>
            <Popup />
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};
