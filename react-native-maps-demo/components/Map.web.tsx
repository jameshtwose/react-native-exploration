import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import markers from "@/assets/data/markers.json"; // Import markers from JSON file

export default function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // Open-source basemap style
      center: [-122.4324, 37.78825], // Longitude, Latitude
      zoom: 13,
    });

    // Add navigation controls (zoom buttons)
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    // Add markers from JSON data
    markers.forEach((marker) => {
      new maplibregl.Marker()
        .setLngLat([marker.longitude, marker.latitude])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<strong>${marker.title}</strong><br>${marker.description}`
          )
        )
        .addTo(map);
    });

    // Cleanup on component unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
}