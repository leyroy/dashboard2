import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		const map = L.map(mapRef.current).setView([10, 10], 2);

		L.tileLayer(
			"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				attribution: "© OpenStreetMap contributors",
			}
		).addTo(map);

		// Set bounds to Africa
		const africaBounds = [
			[-25.0, -20.0],
			[35.0, 40.0],
		];
		map.fitBounds(africaBounds);

		return () => {
			map.remove();
		};
	}, []);

	return (
		<div
			ref={mapRef}
			style={{ height: "100%", width: "100%" }} // Adjust these values as needed
		/>
	);
};

export default MapContainer;
