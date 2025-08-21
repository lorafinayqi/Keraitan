import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Gambar dengan caption khusus, duplikat diizinkan
const images = [
  { src: "img/desagal_img/desa-1.webp", caption: "Stand Pameran UMKM Desa Keraitan" },
  { src: "img/desagal_img/desa-2.webp", caption: "Pelatihan Pembuatan Pupuk Organik" },
  { src: "img/desagal_img/desa-3.webp", caption: "Kegiatan 17 Agustus" },
  { src: "img/desagal_img/desa-4.webp", caption: "Festival Budaya" },
  { src: "img/proker_img/afri.webp", caption: "Edukasi Literasi Keuangan Dasar Untuk Siswa" },
  { src: "img/proker_img/abi.webp", caption: "Manajemen Inovatif" },
  { src: "img/proker_img/cia.webp", caption: "Edukasi Kesadaran Hukum Sejak Dini melalui Kegiatan Tanggung Jawab, Hak dan Aturan di Sekolah untuk Siswa SD" },
  { src: "img/proker_img/daffa.webp", caption: "Pintu Masuk Keraitan" },
  { src: "img/proker_img/efrat.webp", caption: "Edukasi Keterampilan Dasar Membaca Citra Satelit dan Denah Wilayah Desa Keraitan" },
  { src: "img/proker_img/mila.webp", caption: "Pemberdayaan Orang Tua dan Komunitas dalam Pembelajaran Anak" },
  { src: "img/proker_img/muthia.webp", caption: "Mitigasi Bencana Alam Banjir" },
  { src: "img/proker_img/dewi.webp", caption: "Kelas Cerita dan Puisi: Membangun Imajinasi dan Literasi Anak" },
  {src: "img/proker_img/rosa.webp", caption: "English Fun Class dan Pemberdayaan Masyarakat" },
  { src: "img/proker_img/nana.webp", caption: "Pembelajaran IPA Menyenangkan dengan Media Daur Ulang" },
  { src: "img/desagal_img/desa-5.webp", caption: "Rapat Mediasi antara Perusahaan Perkebunan dengan Koperasi dan Lembaga Desa" },
  { src: "img/desagal_img/desa-6.webp", caption: "Pemandangan Air Terjun Keraitan" },
  { src: "img/desagal_img/desa-7.webp", caption: "Pemandangan Sungai Keraitan" },
  { src: "img/desagal_img/desa-8.webp", caption: "Musyawarah Desa Penyampaian Realisasi ADD" },
  {src: "img/desagal_img/desa-9.webp", caption: "Penyerahan BLT Dana Desa" },
  { src: "img/desagal_img/desa-10.webp", caption: "Rembuk Stunting" },
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
  const columns = 3;
  const grouped = splitIntoColumns(images, columns);

  return (
    <div className="min-h-screen bg-white text-yellow-600 px-6 pt-24 pb-32">
      {/* Judul tengah */}
      <div className="mb-10 flex justify-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
          Village Gallery
        </h1>
      </div>

      {/* Grid Masonry-style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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