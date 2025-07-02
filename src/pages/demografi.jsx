import { FaUsers, FaUserTie, FaFemale, FaMale, FaHeart,
  FaPrayingHands,
  FaYinYang,
  FaToriiGate,
  FaChurch,
  FaPlaceOfWorship,
  FaCross,
  FaBible,
  FaOm,
  FaRing,
  FaUserTimes,
  FaUserCheck,
  FaUserSlash,
  FaBan, } from "react-icons/fa";

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

const CustomLabelLaki = ({ x, y, value, width }) => (
  <text x={x + width + 10} y={y + 8} fill="#FFB800" textAnchor="start" fontSize={10}>
    {value}
  </text>
);

const CustomLabelPerempuan = ({ x, y, value, width }) => (
  <text x={x + width + 10} y={y + 8} fill="#D2691E" textAnchor="start" fontSize={10}>
    {value}
  </text>
);

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
            kelamin, agama, dan aspek penting
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
            <FaUsers className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">TOTAL PENDUDUK</p>
              <p className="text-yellow-600 text-2xl font-bold">1.148 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaUserTie className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">KEPALA KELUARGA</p>
              <p className="text-yellow-600 text-2xl font-bold">303 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaFemale className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">PEREMPUAN</p>
              <p className="text-yellow-600 text-2xl font-bold">543 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaMale className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">LAKI-LAKI</p>
              <p className="text-yellow-600 text-2xl font-bold">605 <span className="text-gray-700 font-normal">Jiwa</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Piramida Penduduk */}
      <div className="container mx-auto px-6 md:px-10 mb-10">
        <h3 className="text-2xl font-bold text-yellow-600 mb-5">
          Berdasarkan Kelompok Umur
        </h3>
        <div className="bg-white p-5 rounded-md shadow">
          <ResponsiveContainer width="100%" height={600}>
            <BarChart
              layout="vertical"
              data={dataUmur}
              margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="umur" />
              <Tooltip />
              <Bar dataKey="laki" fill="#FFB800" name="Laki-Laki">
                <LabelList dataKey="laki" content={<CustomLabelLaki />} />
              </Bar>
              <Bar dataKey="perempuan" fill="#D2691E" name="Perempuan">
                <LabelList dataKey="perempuan" content={<CustomLabelPerempuan />} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-white border-l-4 border-yellow-400 shadow">
          Untuk jenis kelamin laki-laki, kelompok umur <strong>10–14</strong> adalah kelompok umur tertinggi dengan jumlah <strong>80 orang</strong> atau <strong>13.22%</strong>. Sedangkan, kelompok umur <strong>85+</strong> adalah yang terendah dengan jumlah <strong>4 orang</strong> atau <strong>0.66%</strong>.
        </div>

        <div className="mt-4 p-4 bg-white border-l-4 border-red-800 shadow">
          Untuk jenis kelamin perempuan, kelompok umur <strong>10–14</strong> adalah kelompok umur tertinggi dengan jumlah <strong>59 orang</strong> atau <strong>10.87%</strong>. Sedangkan, kelompok umur <strong>80–84</strong> adalah yang terendah dengan jumlah <strong>2 orang</strong> atau <strong>0.37%</strong>.
        </div>
      </div>

      {/* Data Perkawinan */}
      <div className="container mx-auto px-6 md:px-10 mb-10">
  <h3 className="text-2xl font-bold text-yellow-600 mb-5">
    Berdasarkan Perkawinan
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaHeart className="text-5xl text-yellow-400 mb-3" />
      <p className="text-gray-500">Belum Kawin</p>
      <p className="text-yellow-600 text-3xl font-bold">622</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaRing className="text-5xl text-yellow-600 mb-3" />
      <p className="text-gray-500">Kawin</p>
      <p className="text-yellow-600 text-3xl font-bold">451</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaUserTimes className="text-5xl text-yellow-500 mb-3" />
      <p className="text-gray-500">Cerai Mati</p>
      <p className="text-yellow-600 text-3xl font-bold">69</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaUserSlash className="text-5xl text-yellow-600 mb-3" />
      <p className="text-gray-500">Cerai Hidup</p>
      <p className="text-yellow-600 text-3xl font-bold">3</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaUserCheck className="text-5xl text-yellow-500 mb-3" />
      <p className="text-gray-500">Kawin Tercatat</p>
      <p className="text-yellow-600 text-3xl font-bold">2</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaBan className="text-5xl text-yellow-700 mb-3" />
      <p className="text-gray-500">Kawin Tidak Tercatat</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
  </div>
</div>

      {/* Data Agama */}
     <div className="container mx-auto px-6 md:px-10">
  <h3 className="text-2xl font-bold text-yellow-600 mb-5">
    Berdasarkan Agama
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaPrayingHands className="text-yellow-600 text-5xl mb-3" />
      <p className="text-gray-500">Islam</p>
      <p className="text-yellow-600 text-3xl font-bold">1.148</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaYinYang className="text-yellow-500 text-5xl mb-3" />
      <p className="text-gray-500">Buddha</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaToriiGate className="text-yellow-500 text-5xl mb-3" />
      <p className="text-gray-500">Konghucu</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaCross className="text-yellow-600 text-5xl mb-3" />
      <p className="text-gray-500">Kristen</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaBible className="text-yellow-600 text-5xl mb-3" />
      <p className="text-gray-500">Katolik</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaOm className="text-yellow-600 text-5xl mb-3" />
      <p className="text-gray-500">Hindu</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default DemografiPage;