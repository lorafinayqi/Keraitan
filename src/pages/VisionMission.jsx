import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GiVillage } from "react-icons/gi";
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
        <h2 className="text-center text-3xl font-bold text-white mb-5">Visi</h2>
        <p className="text-center text-lg font-medium text-white">
          “Desa Keraitan sebagai Desa Wisata yang mampu mengelolah potensi Desa dan pembangunan
          berkelanjutan untuk mewujudkan masyarakat yang sejahtera”
        </p>
      </div>

      {/* Misi */}
      <div className="rounded-xl bg-yellow-600 p-10 shadow-md">
        <h2 className="text-center text-3xl font-bold text-white mb-5">Misi</h2>
        <ol className="list-decimal space-y-2 pl-6 text-white">
          <li>Mewujudkan tata kelola pemerintahan yang baik</li>
          <li>Mengembangkan kegiatan keagamaan</li>
          <li>Meningkatkan kualitas pendidikan dan sumber daya manusia</li>
          <li>Mengembangkan teknologi informasi</li>
          <li>Pembangunan infrastruktur, sarana dan prasarana</li>
          {showMore && (
            <>
              <li>Mendorong partisipasi masyarakat dalam pembangunan desa</li>
              <li>Melestarikan budaya dan kearifan lokal</li>
              <li>Meningkatkan ekonomi masyarakat berbasis potensi lokal</li>
            </>
          )}
        </ol>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 flex items-center gap-1 text-white hover:underline"
        >
          <span>{showMore ? "Tutup" : "Baca Selengkapnya"}</span>
          <TiLocationArrow className={`transition-transform ${showMore ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Lokasi Desa */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-600 mb-10">Peta Lokasi Desa</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-white">
          {/* Info Desa */}
          <div className="rounded-xl bg-yellow-600 p-8 shadow-md">
            <h3 className="mb-4 text-lg text-white font-semibold">Batas Desa:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-white">
              <div><b>Utara</b><br />Desa none</div>
              <div><b>Timur</b><br />Selat none</div>
              <div><b>Selatan</b><br />Selat none</div>
              <div><b>Barat</b><br />Desa none</div>
            </div>

            <hr className="my-4 border-white/40" />
            <div className="grid grid-cols-2 gap-2 text-sm text-white">
            <div><b>Luas Desa</b><br />421.000 m²</div>
            <div><b>Jumlah Penduduk</b><br />1.148 Jiwa</div>
          </div>
          </div>
          

          {/* Peta */}
          <div className="h-[315px] w-full overflow-hidden rounded-xl shadow-md">
            <MapContainer
              center={center}
              zoom={16}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.google.com/maps/place/QHJV%2BR6H+Kantor+Desa+Keraitan,+Keraitan,+Kec.+Bengalon,+Kabupaten+Kutai+Timur,+Kalimantan+Timur/data=!4m2!3m1!1s0x320bbf0068f35fd9:0x89a75bef71e3dfc9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjIzLjEYACDXggMqhgEsOTQyNTk1NTE5NDI3NTMwOCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2NCw0NzA4NDM5Myw5NDIxMzIwMCw5NDI1ODMyNUICSUQ%3D&skid=9230d435-597b-416f-99f0-529a2eef2d5f">Keraitan</a>'
              />
              <Marker position={center} icon={customIcon}>
                <Popup>
                  Kantor Desa Keraitan
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;