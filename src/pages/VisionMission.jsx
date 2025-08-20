import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Marker Icon
const customIcon = new Icon({
  iconUrl: "img/logo.png",
  iconSize: [35, 41],
  iconAnchor: [20, 41],
});

const VisionMission = () => {
  const [showMore, setShowMore] = useState(false);
  const center = [0.781383, 117.592490]; // Koordinat Kantor Desa Keraitan

  return (
    <section className="bg-white min-h-screen py-20 px-5 md:px-32 space-y-20 pt-28">

      {/* Visi */}
      <div className="rounded-xl bg-yellow-600 p-10 shadow-md">
        <h2 className="text-center text-3xl font-bold text-white mb-5">Vision</h2>
        <p className="text-center text-lg font-medium text-white">
          “Keraitan Village is a tourist village that is able to manage village potential and sustainable development to create a prosperous society”
        </p>
      </div>

      {/* Misi */}
      <div className="rounded-xl bg-yellow-600 p-10 shadow-md">
        <h2 className="text-center text-3xl font-bold text-white mb-5">Mission</h2>
        <ol className="list-decimal space-y-2 pl-6 text-white">
          <li>Establish good governance</li>
          <li>Develop religious activities</li>
          <li>Improve the quality of education and human resources</li>
          <li>Develop information technology</li>
          <li>Build infrastructure, facilities, and utilities</li>
          {showMore && (
            <>
               <li>Encourage community participation in village development</li>
               <li>Preserve culture and local wisdom</li>
               <li>Improve the community’s economy based on local potential</li>
            </>
          )}
        </ol>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 flex items-center gap-1 text-white hover:underline"
        >
          <span>{showMore ? "Tutup" : "Read more"}</span>
          <TiLocationArrow className={`transition-transform ${showMore ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Lokasi Desa */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-600 mb-10">Village Location Map</h2>
    
          

          {/* Peta */}
           <div className="h-[500px] w-full overflow-hidden rounded-xl shadow-md">
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.google.com/maps/place/QHJV%2BR6H+Kantor+Desa+Keraitan,+Keraitan,+Kec.+Bengalon,+Kabupaten+Kutai+Timur,+Kalimantan+Timur/data=!4m2!3m1!1s0x320bbf0068f35fd9:0x89a75bef71e3dfc9?utm_source=mstt_1&entry=gps" target="_blank" rel="noopener noreferrer">Keraitan</a>'
      />
      <Marker position={center} icon={customIcon}>
        <Popup>Kantor Desa Keraitan</Popup>
      </Marker>
    </MapContainer>
  </div>
        </div>
    </section>
  );
};

export default VisionMission;