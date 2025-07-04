import { useState } from "react";
import * as XLSX from "xlsx";


const goals = [
  { name: "Desa Tanpa Kemiskinan", score: 38.47, icon: "img/gallery-5.webp" },
  { name: "Desa Tanpa Kelaparan", score: 33.07, icon: "img/gallery-5.webp" },
  { name: "Desa Sehat dan Sejahtera", score: 82.05, icon: "img/gallery-5.webp" },
  { name: "Pendidikan Desa Berkualitas", score: 14.73, icon: "img/gallery-5.webp" },
  { name: "Keterlibatan Perempuan Desa", score: 28.57, icon: "img/gallery-5.webp" },
  { name: "Desa Layak Air Bersih dan Sanitasi", score: 63.33, icon: "img/gallery-5.webp" },
  { name: "Desa Berenergi Bersih dan Terbarukan", score: 99.8, icon: "img/gallery-5.webp" },
  { name: "Pertumbuhan Ekonomi Desa Merata", score: 26.85, icon: "img/gallery-5.webp" },
  { name: "Infrastruktur dan Inovasi Desa Sesuai Kebutuhan", score: 52.33, icon: "img/gallery-5.webp" },
  { name: "Desa Tanpa Kesenjangan", score: 40.82, icon: "img/gallery-5.webp" },
  { name: "Kawasan Pemukiman Desa Aman dan Nyaman", score: 53.01, icon: "img/gallery-5.webp" },
  { name: "Konsumsi dan Produksi Desa Sadar Lingkungan", score: 50.0, icon: "img/gallery-5.webp" },
  { name: "Infrastruktur dan Inovasi Desa Sesuai Kebutuhan", score: 52.33, icon: "img/gallery-5.webp" },
  { name: "Desa Tanpa Kesenjangan", score: 40.82, icon: "img/gallery-5.webp" },
  { name: "Kawasan Pemukiman Desa Aman dan Nyaman", score: 53.01, icon: "img/gallery-5.webp" },
  { name: "Konsumsi dan Produksi Desa Sadar Lingkungan", score: 50.0, icon: "img/gallery-5.webp" },
  { name: "Kawasan Pemukiman Desa Aman dan Nyaman", score: 53.01, icon: "img/gallery-5.webp" },
  { name: "Konsumsi dan Produksi Desa Sadar Lingkungan", score: 50.0, icon: "img/gallery-5.webp" },
];

const SDGsDesa = () => {
  const [score] = useState(44.63);
  const [villageName] = useState("Kersik");
  const [excelData, setExcelData] = useState(null);

 const handleCardClick = async (goalName) => {
  try {
    const response = await fetch("data/rekomendasi-program-goals-1-desa-tanpa-kemiskinan-data-desa-keraitan3-jul-2025.xlsx");
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
   const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); 

    // Filter hanya data yang sesuai goalName (jika ada)
    const filtered = rawData.filter((row) =>
      row["SASARAN"]?.toLowerCase().includes(goalName.toLowerCase())
    );

    // Jika tidak ada yang cocok, fallback tampilkan semua
    const dataToDisplay = filtered.length > 0 ? filtered : rawData;

    const mappedData = dataToDisplay.map((row, index) => ({
  NO: row["0"] ?? `1.${index + 1}`,
  SASARAN: row["1"] ?? "-",
  SKOR: row["2"] ?? "-",
  VOLUME: row["3"] ?? "-",
  SATUAN: row["4"] ?? "-",
  "MUSDES/RKPDes/RPJMDES": row["5"] ?? "-",
  "APBDES/SISKEUDES": row["6"] ?? "-",
}));

    setExcelData(mappedData);
    console.log("Data dari Excel (Filtered):", mappedData);
  } catch (error) {
    console.error("Gagal membaca file Excel:", error);
  }
};

  return (
    <div className="min-h-screen pb-32 pt-24 bg-white px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start gap-10">
        {/* Kiri - Teks dan Skor */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
            SDGs Desa
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            SDGs desa mengacu pada upaya yang dilakukan di tingkat desa untuk mencapai Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals/SDGs). SDGs merupakan agenda global yang ditetapkan oleh Perserikatan Bangsa-Bangsa (PBB) untuk mengatasi berbagai tantangan sosial, ekonomi, dan lingkungan di seluruh dunia.
          </p>

          {/* Box Skor */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md px-6 py-5 w-full max-w-md mt-6">
            <div className="flex items-center justify-between">
              <div className="text-gray-800 font-semibold text-lg">
                Skor SDGs Desa<br />
                {villageName}
              </div>
              <div className="text-4xl font-bold text-gray-600">
                {score.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Kanan - Ilustrasi */}
        <div className="hidden md:flex flex-shrink-0 flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 w-full max-w-md">
          <img
            src="img/gallery-5.webp"
            alt="Ilustrasi SDGs"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Grid SDGs */}
     <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {goals.slice(0, goals.length - 2).map((goal, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(goal.name)}
              className="cursor-pointer bg-white border rounded-xl shadow px-4 py-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200"
            >
              <img
                src={goal.icon}
                alt={goal.name}
                className="w-20 h-20 mb-2 object-contain"
              />
              <h3 className="text-sm font-semibold text-gray-800 text-center leading-snug mb-1">
                {goal.name}
              </h3>
              <p className="text-xs text-gray-500">Nilai</p>
              <p className="text-2xl font-bold text-gray-700">{goal.score}</p>
            </div>
          ))}
        </div>

        {/* Dua kotak terakhir */}
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          {goals.slice(-2).map((goal, index) => (
            <div
              key={`last-${index}`}
              onClick={() => handleCardClick(goal.name)}
              className="cursor-pointer bg-white border rounded-xl shadow px-4 py-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200 w-[165px] sm:w-[270px]"
            >
              <img
                src={goal.icon}
                alt={goal.name}
                className="w-20 h-20 mb-2 object-contain"
              />
              <h3 className="text-sm font-semibold text-gray-800 text-center leading-snug mb-1">
                {goal.name}
              </h3>
              <p className="text-xs text-gray-500">Nilai</p>
              <p className="text-2xl font-bold text-gray-700">{goal.score}</p>
            </div>
          ))}
        </div>

        {/* Tampilkan hasil Excel (opsional) */}
       {excelData && (
  <div className="mt-10 bg-white p-6 rounded-lg shadow overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Rekomendasi Program</h2>
    <table className="min-w-[1000px] text-sm text-left text-gray-700 border">
      <thead className="bg-yellow-600 text-white">
        <tr>
          <th rowSpan="2" className="px-4 py-2 border">NO</th>
          <th rowSpan="2" className="px-4 py-2 border">SASARAN</th>
          <th rowSpan="2" className="px-4 py-2 border">SKOR</th>
          <th rowSpan="2" className="px-4 py-2 border">VOLUME</th>
          <th rowSpan="2" className="px-4 py-2 border">SATUAN</th>
          <th colSpan="2" className="px-4 py-2 border text-center">REKOMENDASI PROGRAM</th>
        </tr>
        <tr>
          <th className="px-4 py-2 border">MUSDES/RKPDes/RPJMDES</th>
          <th className="px-4 py-2 border">APBDES/SISKEUDES</th>
        </tr>
      </thead>
      <tbody>
        {excelData.map((item, index) => (
          <tr key={index} className="bg-white even:bg-gray-50">
            <td className="px-4 py-2 border">{item.NO}</td>
            <td className="px-4 py-2 border">{item.SASARAN}</td>
            <td className="px-4 py-2 border">{item.SKOR}</td>
            <td className="px-4 py-2 border">{item.VOLUME}</td>
            <td className="px-4 py-2 border">{item.SATUAN}</td>
            <td className="px-4 py-2 border whitespace-pre-line">
              {item["MUSDES/RKPDes/RPJMDES"]}
            </td>
            <td className="px-4 py-2 border whitespace-pre-line">
              {item["APBDES/SISKEUDES"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
      </div>
    </div>
  );
};

export default SDGsDesa;