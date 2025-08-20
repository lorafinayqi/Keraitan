import { useState } from "react";
import * as XLSX from "xlsx";

const goals = [
 { 
    name: "Desa Tanpa Kemiskinan", 
    score: 47.45, 
    icon: "img/sdgs_img/1-DesaKm.webp",
    rekomendasiFile: "data/rekom_1.xlsx",
    targetFile: "data/target_1.xlsx"
  },
  { 
    name: "Desa Tanpa Kelaparan", 
    score: 42.11, 
    icon: "img/sdgs_img/2-DesaKl.webp",
    rekomendasiFile: "data/rekom_2.xlsx",
    targetFile: "data/target_2.xlsx"
  },
  { 
    name: "Desa Sehat dan Sejahtera", 
    score: 56.50, 
    icon: "img/sdgs_img/3-DesaSj.webp",
    rekomendasiFile: "data/rekom_3.xlsx",
    targetFile: "data/target_3.xlsx"
  },
  { 
    name: "Pendidikan Desa Berkualitas", 
    score: 24.02, 
    icon: "img/sdgs_img/4-DesaBk.webp",
    rekomendasiFile: "data/rekom_4.xlsx",
    targetFile: "data/target_4.xlsx"
  },
  { 
    name: "Keterlibatan Perempuan Desa", 
    score: 40.48, 
    icon: "img/sdgs_img/5-DesaPd.webp",
    rekomendasiFile: "data/rekom_5.xlsx",
    targetFile: "data/target_5.xlsx"
  },
  { 
    name: "Desa Layak Air Bersih dan Sanitasi", 
    score: 40.29, 
    icon: "img/sdgs_img/6-DesaAs.webp",
    rekomendasiFile: "data/rekom_6.xlsx",
    targetFile: "data/target_6.xlsx"
  },
  { 
    name: "Desa Berenergi Bersih dan Terbarukan", 
    score: 98.23, 
    icon: "img/sdgs_img/7-DesaBt.webp",
    rekomendasiFile: "data/rekom_7.xlsx",
    targetFile: "data/target_7.xlsx"
  },
  { 
    name: "Pertumbuhan Ekonomi Desa Merata", 
    score: 44.82, 
    icon: "img/sdgs_img/8-DesaDm.webp",
    rekomendasiFile: "data/rekom_8.xlsx",
    targetFile: "data/target_8.xlsx"
  },
  { 
    name: "Infrastruktur dan Inovasi Desa Sesuai Kebutuhan", 
    score: 0.00, 
    icon: "img/sdgs_img/9-DesaIk.webp",
    rekomendasiFile: "data/rekom_9.xlsx",
    targetFile: "data/target_9.xlsx"
  },
  { 
    name: "Desa Tanpa Kesenjangan", 
    score: 36.06, 
    icon: "img/sdgs_img/10-DesaKs.webp",
    rekomendasiFile: "data/rekom_10.xlsx",
    targetFile: "data/target_10.xlsx"
  },
  { 
    name: "Kawasan Pemukiman Desa Aman dan Nyaman", 
    score: 44.52, 
    icon: "img/sdgs_img/11-DesaAn.webp",
    rekomendasiFile: "data/rekom_11.xlsx",
    targetFile: "data/target_11.xlsx"
  },
  { 
    name: "Konsumsi dan Produksi Desa Sadar Lingkungan", 
    score: 0.00, 
    icon: "img/sdgs_img/12-DesaPl.webp",
    rekomendasiFile: "data/rekom_12.xlsx",
    targetFile: "data/target_12.xlsx"
  },
  { 
    name: "Desa Tanggap Perubahan Iklam", 
    score: 0.00, 
    icon: "img/sdgs_img/13-DesaPk.webp",
    rekomendasiFile: "data/rekom_13.xlsx",
    targetFile: "data/target_13.xlsx"
  },
  { 
    name: "Desa Peduli Lingkungan Laut", 
    score: 50.00, 
    icon: "img/sdgs_img/14-DesaLk.webp",
    rekomendasiFile: "data/rekom_14.xlsx",
    targetFile: "data/target_14.xlsx"
  },
  { 
    name: "Desa Peduli Lingkungan Darat", 
    score: 6.79, 
    icon: "img/sdgs_img/15-DesaLd.webp",
    rekomendasiFile: "data/rekom_15.xlsx",
    targetFile: "data/target_15.xlsx"
  },
   { 
    name: "Desa Damai Berkeadilan", 
    score: 88.94, 
    icon: "img/sdgs_img/16-DesaDb.webp",
    rekomendasiFile: "data/rekom_16.xlsx",
    targetFile: "data/target_16.xlsx"
  },
     { 
    name: "Kemitraan untuk Pembangunan Desa", 
    score: 41.02, 
    icon: "img/sdgs_img/17-DesaPd.webp",
    rekomendasiFile: "data/rekom_17.xlsx",
    targetFile: "data/target_17.xlsx"
  },
   { 
    name: "Kelembagaan Desa Dinamis dan Budaya Desa Adaptif", 
    score: 70.60, 
    icon: "img/sdgs_img/18-DesaDad.webp",
    rekomendasiFile: "data/rekom_18.xlsx",
    targetFile: "data/target_18.xlsx"
  },
];

const SDGsDesa = () => {
  const [score] = useState(40.66);
  const [villageName] = useState("Keraitan");
  const [excelData, setExcelData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewType, setViewType] = useState("rekomendasi"); // "rekomendasi" or "target"
  const [currentGoal, setCurrentGoal] = useState(null);

  const handleCardClick = async (goal) => {
    setCurrentGoal(goal);
    try {
      const fileName = viewType === "rekomendasi" ? goal.rekomendasiFile : goal.targetFile;
      
      const response = await fetch(fileName);
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      let mappedData = [];
      
      if (viewType === "rekomendasi") {
        const filtered = rawData.filter((row) =>
          row[1]?.toLowerCase().includes(goal.name.toLowerCase())
        );
        const dataToDisplay = filtered.length > 0 ? filtered : rawData;
        mappedData = dataToDisplay.map((row, index) => ({
          NO: row[0] ?? `1.${index + 1}`,
          SASARAN: row[1] ?? "-",
          SKOR: row[2] ?? "-",
          VOLUME: row[3] ?? "-",
          SATUAN: row[4] ?? "-",
          "MUSDES/RKPDes/RPJMDES": row[5] ?? "-",
          "APBDES/SISKEUDES": row[6] ?? "-",
        }));
      } else {
        // For target view
        const filtered = rawData.filter((row) =>
          row[1]?.toLowerCase().includes(goal.name.toLowerCase())
        );
        const dataToDisplay = filtered.length > 0 ? filtered : rawData;
        mappedData = dataToDisplay.map((row, index) => ({
          Indikator: row[0] ?? "-",
          Sasaran: row[1] ?? "-",
          "Tahun 2022": row[2] ?? "-",
          "Skor 2022": row[3] ?? "-",
          "Tahun 2023": row[4] ?? "-",
          "Skor 2023": row[5] ?? "-",
          "Tahun 2024": row[6] ?? "-",
          "Skor 2024": row[7] ?? "-",
          "Tahun 2025": row[8] ?? "-",
          "Skor 2025": row[9] ?? "-",
          "Tahun 2026": row[10] ?? "-",
          "Skor 2026": row[11] ?? "-",
          "Tahun 2027": row[12] ?? "-",
          "Skor 2027": row[13] ?? "-",
          "Tahun 2028": row[14] ?? "-",
          "Skor 2028": row[15] ?? "-",
          "Tahun 2029": row[16] ?? "-",
          "Skor 2029": row[17] ?? "-",
          "Tahun 2030": row[18] ?? "-",
          "Skor 2030": row[19] ?? "-",
          "Nilai Awal": row[20] ?? "-",
          Volume: row[21] ?? "-",
          Satuan: row[22] ?? "-",
          "Perkiraan Biaya": row[23] ?? "-",
          Sumber: row[24] ?? "-",
          "Pola Pelaksanaan": row[25] ?? "-",
        }));
      }

      setExcelData(mappedData);
      setShowModal(true);
    } catch (error) {
      console.error("Gagal membaca file Excel:", error);
    }
  };

  const toggleViewType = () => {
    const newViewType = viewType === "rekomendasi" ? "target" : "rekomendasi";
    setViewType(newViewType);
    
    // Reload data if modal is open
    if (showModal && currentGoal) {
      handleCardClick(currentGoal);
    }
  };

  return (
    <div className="min-h-screen pb-32 pt-24 bg-white px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
            SDGS Desa
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Village SDGs refer to efforts carried out at the village level to achieve the Sustainable Development Goals (SDGs). The SDGs are a global agenda set by the United Nations (UN) to address various social, economic, and environmental challenges around the world.

          </p>

          <div className="bg-white border border-gray-200 rounded-lg shadow-md px-6 py-5 w-full max-w-md mt-6">
            <div className="flex items-center justify-between">
              <div className="text-gray-800 font-semibold text-lg">
                Village SDGs Score<br />
                {villageName}
              </div>
              <div className="text-4xl font-bold text-gray-600">
                {score.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 w-full max-w-md">
          <img
            src="img/gallery-5.webp"
            alt="Ilustrasi SDGs"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* View Type Toggle */}
      <div className="max-w-6xl mx-auto mt-6 flex justify-center">
        <div className="bg-white p-1 rounded-lg shadow-sm border">
          <button
            onClick={toggleViewType}
            className={`px-4 py-2 rounded-md ${
              viewType === "rekomendasi" ? "bg-yellow-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Rekomendasi
          </button>
          <button
            onClick={toggleViewType}
            className={`px-4 py-2 rounded-md ${
              viewType === "target" ? "bg-yellow-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Target Capaian
          </button>
        </div>
      </div>

      {/* Grid SDGs */}
<div className="max-w-6xl mx-auto mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {goals.slice(0, goals.length - 2).map((goal, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(goal)}
              className="cursor-pointer bg-white border rounded-xl shadow px-4 py-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200"
            >
              <img src={goal.icon} alt={goal.name} className="w-20 h-20 mb-2 object-contain" />
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
              onClick={() => handleCardClick(goal)}
              className="cursor-pointer bg-white border rounded-xl shadow px-4 py-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200 w-[165px] sm:w-[270px]"
            >
              <img src={goal.icon} alt={goal.name} className="w-20 h-20 mb-2 object-contain" />
              <h3 className="text-sm font-semibold text-gray-800 text-center leading-snug mb-1">
                {goal.name}
              </h3>
              <p className="text-xs text-gray-500">Nilai</p>
              <p className="text-2xl font-bold text-gray-700">{goal.score}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal untuk Excel */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4 py-8">
          <div className="bg-white rounded-lg shadow-xl w-full h-full overflow-auto relative p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-6 text-3xl text-gray-700 hover:text-red-600 font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-yellow-700">
              {viewType === "rekomendasi" ? "Rekomendasi Program" : "Target Capaian"}
            </h2>
            <div className="overflow-x-auto">
              {viewType === "rekomendasi" ? (
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
              ) : (
                <table className="min-w-[1200px] text-sm text-left text-gray-700 border">
                  <thead className="bg-yellow-600 text-white">
                    <tr>
                      <th rowSpan="2" className="px-4 py-2 border">Indikator</th>
                      <th rowSpan="2" className="px-4 py-2 border">Sasaran</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2022</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2023</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2024</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2025</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2026</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2027</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2028</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2029</th>
                      <th colSpan="2" className="px-4 py-2 border text-center">2030</th>
                      <th rowSpan="2" className="px-4 py-2 border">Nilai Awal</th>
                      <th rowSpan="2" className="px-4 py-2 border">Volume</th>
                      <th rowSpan="2" className="px-4 py-2 border">Satuan</th>
                      <th rowSpan="2" className="px-4 py-2 border">Perkiraan Biaya</th>
                      <th rowSpan="2" className="px-4 py-2 border">Sumber</th>
                      <th rowSpan="2" className="px-4 py-2 border">Pola Pelaksanaan</th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                      <th className="px-4 py-2 border">Rekom</th>
                      <th className="px-4 py-2 border">Skor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {excelData.map((item, index) => (
                      <tr key={index} className="bg-white even:bg-gray-50">
                        <td className="px-4 py-2 border">{item.Indikator}</td>
                        <td className="px-4 py-2 border">{item.Sasaran}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2022"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2022"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2023"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2023"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2024"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2024"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2025"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2025"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2026"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2026"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2027"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2027"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2028"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2028"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2029"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2029"]}</td>
                        <td className="px-4 py-2 border">{item["Tahun 2030"]}</td>
                        <td className="px-4 py-2 border">{item["Skor 2030"]}</td>
                        <td className="px-4 py-2 border">{item["Nilai Awal"]}</td>
                        <td className="px-4 py-2 border">{item.Volume}</td>
                        <td className="px-4 py-2 border">{item.Satuan}</td>
                        <td className="px-4 py-2 border">{item["Perkiraan Biaya"]}</td>
                        <td className="px-4 py-2 border">{item.Sumber}</td>
                        <td className="px-4 py-2 border">{item["Pola Pelaksanaan"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SDGsDesa;