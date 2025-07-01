import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const dataUmur = [
  { umur: "0-4", laki: 20, perempuan: 21 },
  { umur: "5-9", laki: 53, perempuan: 44 },
  { umur: "10-14", laki: 81, perempuan: 59 },
  { umur: "15-19", laki: 67, perempuan: 50 },
  { umur: "20-24", laki: 60, perempuan: 56 },
  { umur: "25-29", laki: 55, perempuan: 55 },
  { umur: "30-34", laki: 37, perempuan: 56 },
  { umur: "35-39", laki: 30, perempuan: 43 },
  { umur: "40-44", laki: 56, perempuan: 39 },
  { umur: "45-49", laki: 40, perempuan: 36 },
  { umur: "50-54", laki: 26, perempuan: 35 },
  { umur: "55-59", laki: 33, perempuan: 20 },
  { umur: "60-64", laki: 16, perempuan: 20 },
  { umur: "65-69", laki: 8, perempuan: 6 },
  { umur: "70-74", laki: 9, perempuan: 10 },
  { umur: "75-79", laki: 5, perempuan: 4 },
  { umur: "80-84", laki: 5, perempuan: 2 },
  { umur: "85+", laki: 4, perempuan: 5 },
];

const DemografiPage = () => {
  return (
    <section className="bg-white pb-32 pt-24">
      {/* Header Section */}
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
            DEMOGRAFI PENDUDUK
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Memberikan informasi lengkap mengenai karakteristik demografi
            penduduk suatu wilayah. Mulai dari jumlah penduduk, usia, jenis
            kelamin, tingkat pendidikan, pekerjaan, agama, dan aspek penting
            lainnya yang menggambarkan komposisi populasi secara rinci.
          </p>
        </div>

        <a className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 w-full max-w-md">
          <img
            src="img/gallery-4.webp"
            alt="Ilustrasi Demografi"
            className="w-full"
          />
        </a>
      </div>

      {/* Statistik Singkat */}
      <div className="container mx-auto px-6 md:px-10 mb-20">
        <h3 className="text-2xl font-bold text-yellow-600 mb-5">
          Jumlah Penduduk dan Kepala Keluarga
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <img src="img/icon1.png" alt="Icon" className="w-20" />
            <div>
              <p className="text-gray-500">TOTAL PENDUDUK</p>
              <p className="text-y text-2xl font-bold">1.148 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <img src="img/icon2.png" alt="Icon" className="w-20" />
            <div>
              <p className="text-gray-500">KEPALA KELUARGA</p>
              <p className="text-yellow-600 text-2xl font-bold">303 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <img src="img/icon3.png" alt="Icon" className="w-20" />
            <div>
              <p className="text-gray-500">PEREMPUAN</p>
              <p className="text-yellow-600 text-2xl font-bold">543 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <img src="img/icon4.png" alt="Icon" className="w-20" />
            <div>
              <p className="text-gray-500">LAKI-LAKI</p>
              <p className="text-yellow-600 text-2xl font-bold">605 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Piramida Penduduk */}
      <div className="container mx-auto px-6 md:px-10">
        <h3 className="text-2xl font-bold text-yellow-600 mb-5">
          Berdasarkan Kelompok Umur
        </h3>
        <div className="bg-white p-5 rounded-md shadow">
          <ResponsiveContainer width="100%" height={600}>
            <BarChart
              layout="vertical"
              data={dataUmur}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="umur" />
              <Tooltip />
              <Bar dataKey="laki" fill="#4CAF50" name="Laki-Laki">
                <LabelList dataKey="laki" position="insideLeft" />
              </Bar>
              <Bar dataKey="perempuan" fill="#FF9E9E" name="Perempuan">
                <LabelList dataKey="perempuan" position="insideRight" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DemografiPage;