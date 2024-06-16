import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const customIcon = new L.Icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
});

const center = [40.7128, -74.0060];

const LocationAndMaps = () => {
    return (
        <div className="h-screen bg-[#F5E7C1] flex lg:flex-row flex-col items-center justify-center">
            <div className="info-container p-8 bg-[#F5E7C1]">
                <h1 className="info-header headingFont1 md:w-[70%]  w-full text-5xl">Contactless delivery available</h1>
                <p className="info-content">Order by phone</p>
                <h2 className="phone-number">1-800-700-600</h2>
                <div className="info-section">
                    <div className="info-block">
                        <h3 className="info-title">Location</h3>
                        <p>60 East 65th Street,<br />New York</p>
                    </div>
                    <div className="info-block">
                        <h3 className="info-title">Delivery hours</h3>
                        <p>Monday – Saturday: 11AM – 11PM<br />Sunday: 11AM – 08PM</p>
                    </div>
                    <div className="info-block">
                        <h3 className="info-title">Takeaway hours</h3>
                        <p>Monday – Saturday: 01PM – 10PM<br />Sunday: Closed</p>
                    </div>
                </div>
            </div>
            <MapContainer
                center={center}
                zoom={15}
                className="map-container"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center} icon={customIcon}>
                    <Popup>
                        Hunger<br />60 East 65th Street, New York.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default LocationAndMaps;
