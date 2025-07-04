import { FaUsers, FaUserTie, FaFemale, FaMale, FaHeart,
  FaYinYang,
  FaDharmachakra,
  FaStarAndCrescent,
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
  { umur: "0-4", laki: 14, perempuan: 13 },
  { umur: "5-9", laki: 22, perempuan: 21 },
  { umur: "10-14", laki: 27, perempuan: 16 },
  { umur: "15-19", laki: 18, perempuan: 18 },
  { umur: "20-24", laki: 16, perempuan: 4 },
  { umur: "25-29", laki: 21, perempuan: 18 },
  { umur: "30-34", laki: 11, perempuan: 17 },
  { umur: "35-39", laki: 19, perempuan: 12 },
  { umur: "40-44", laki: 19, perempuan: 14 },
  { umur: "45-49", laki: 8, perempuan: 4 },
  { umur: "50-54", laki: 8, perempuan: 6 },
  { umur: "55-59", laki: 5, perempuan: 3 },
  { umur: "60-64", laki: 3, perempuan: 3 },
  { umur: "65-69", laki: 0, perempuan: 1 },
  { umur: "70+", laki: 4, perempuan: 1 },
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

        <a className="hidden md:flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 w-full max-w-md">
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
          Untuk jenis kelamin laki-laki, kelompok umur <strong>10–14</strong> adalah kelompok umur tertinggi dengan jumlah <strong>27 orang</strong> atau <strong>13.22%</strong>. Sedangkan, kelompok umur <strong>65-69</strong> adalah yang terendah dengan jumlah <strong>0 orang</strong> atau <strong>0%</strong>.
        </div>


        <div className="mt-4 p-4 bg-white border-l-4 border-red-800 shadow">
          Untuk jenis kelamin perempuan, kelompok umur <strong>5-9</strong> adalah kelompok umur tertinggi dengan jumlah <strong>21 orang</strong> atau <strong>13.91%</strong>. Sedangkan, kelompok umur <strong>70+</strong> adalah yang terendah dengan jumlah <strong>1 orang</strong> atau <strong>0.66%</strong>.
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
      <FaStarAndCrescent className="text-yellow-600 text-5xl mb-3" />
      <p className="text-gray-500">Islam</p>
      <p className="text-yellow-600 text-3xl font-bold">1.148</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaDharmachakra className="text-yellow-500 text-5xl mb-3" />
      <p className="text-gray-500">Buddha</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaYinYang className="text-yellow-500 text-5xl mb-3" />
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