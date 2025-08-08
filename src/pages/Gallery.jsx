import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Gambar dengan caption khusus, duplikat diizinkan
const images = [
  { src: "img/gallery-1.webp", caption: "Festival Sekerat Nusantara" },
  { src: "img/gallery-2.webp", caption: "Pintu Masuk Keraitan" },
  { src: "img/gallery-3.webp", caption: "Kegiatan Adat" },
  { src: "img/gallery-4.webp", caption: "Suasana Senja" },
  { src: "img/gallery-5.webp", caption: "Wajah Warga Lokal" },
  { src: "img/gallery-6.webp", caption: "Detail Arsitektur" },
  { src: "img/gallery-7.webp", caption: "Kegiatan Pasar" },
  { src: "img/gallery-2.webp", caption: "Pintu Masuk Keraitan (Duplikat)" },
  { src: "img/gallery-1.webp", caption: "Panorama Alam" },
  { src: "img/gallery-2.webp", caption: "Pintu Masuk Keraitan" },
  { src: "img/gallery-3.webp", caption: "Kegiatan Adat" },
  { src: "img/gallery-4.webp", caption: "Suasana Senja" },
  { src: "img/gallery-1.webp", caption: "Panorama Alam" },
  { src: "img/gallery-2.webp", caption: "Pintu Masuk Keraitan" },
  { src: "img/gallery-6.webp", caption: "Detail Arsitektur" },
  { src: "img/gallery-7.webp", caption: "Kegiatan Pasar" },
];

const splitIntoColumns = (arr, columns) => {
  const result = Array.from({ length: columns }, () => []);
  arr.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const columns = 4;
  const grouped = splitIntoColumns(images, columns);

  return (
    <div className="min-h-screen bg-white text-yellow-600 px-6 pt-24 pb-32">
      {/* Judul tengah */}
      <div className="mb-10 flex justify-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
          GALERI DESA
        </h1>
      </div>

      {/* Grid Masonry-style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {grouped.map((col, colIndex) => (
          <div key={colIndex} className="grid gap-6">
            {col.map((img, i) => {
              const globalIndex = colIndex + i * columns;
              return (
                <div
                  key={`${img.src}-${globalIndex}`}
                  onClick={() => setIndex(globalIndex)}
                  className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto object-cover transition duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white text-lg font-semibold text-center px-2">
                      {img.caption}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox dengan thumbnails */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({
          src: img.src,
          title: img.caption,
        }))}
        plugins={[Thumbnails]}
        render={{
          buttonClose: () => (
            <button
              key="custom-exit-button"
              onClick={() => setIndex(-1)}
              className="fixed top-6 right-6 z-[9999] rounded-full bg-yellow-500 text-white px-4 py-2 shadow-lg hover:bg-yellow-600 transition"
            >
              Exit
            </button>
          ),
        }}
      />
    </div>
  );
};

export default Gallery;