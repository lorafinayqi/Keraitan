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
  { umur: "0-3", laki: 10, perempuan: 9 },
  { umur: "4-5", laki: 9, perempuan: 8 },
  { umur: "6-12", laki: 35, perempuan: 30 },
  { umur: "13-16", laki: 14, perempuan: 22 },
  { umur: "17", laki: 5, perempuan: 4 },
  { umur: "18-25", laki: 51, perempuan: 33 },
  { umur: "26-30", laki: 22, perempuan: 9 },
  { umur: "31-35", laki: 25, perempuan: 21 },
  { umur: "36-40", laki: 14, perempuan: 19 },
  { umur: "41-65", laki: 57, perempuan: 38 },
  { umur: "66-70", laki: 4, perempuan: 1 },
  { umur: "71-80", laki: 5, perempuan: 0 },
  { umur: "80+", laki: 0, perempuan: 0 },
];

const DemografiPage = () => {
  return (
    <section className="bg-white pb-32 pt-24">
      {/* Header Section */}
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
           POPULATION DEMOGRAPHICS
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Provides complete information regarding the demographic characteristics of a region's population. Starting from population size, age, gender, religion, and other important aspects that describe the population composition in detail.
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
          Number of Population and Heads of Families
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaUsers className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">TOTAL POPULATION</p>
              <p className="text-yellow-600 text-2xl font-bold">445 <span className="text-gray-700 font-normal">Residents</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaUserTie className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">HEAD OF FAMILY</p>
              <p className="text-yellow-600 text-2xl font-bold">143 <span className="text-gray-700 font-normal">Residents</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaFemale className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">WOMAN</p>
              <p className="text-yellow-600 text-2xl font-bold">194 <span className="text-gray-700 font-normal">Residents</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-lg shadow bg-white">
            <FaMale className="text-yellow-600 text-5xl" />
            <div>
              <p className="text-gray-500">MAN</p>
              <p className="text-yellow-600 text-2xl font-bold">251 <span className="text-gray-700 font-normal">Residents</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Piramida Penduduk */}
      <div className="container mx-auto px-6 md:px-10 mb-10">
        <h3 className="text-2xl font-bold text-yellow-600 mb-5">
          Based on Age Group
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
              <Bar dataKey="laki" fill="#FFB800" name="Man">
                <LabelList dataKey="laki" content={<CustomLabelLaki />} />
              </Bar>
              <Bar dataKey="perempuan" fill="#D2691E" name="Woman">
                <LabelList dataKey="perempuan" content={<CustomLabelPerempuan />} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

       <div className="mt-4 p-4 bg-white border-l-4 border-yellow-400 shadow">
          For males, the<strong> 41–65</strong> age group is the largest with <strong>57 people</strong> or <strong>22.7%</strong>. Meanwhile, the <strong>66-70</strong> age group is the smallest with <strong>4 people</strong> or <strong>1.6%</strong>.
        </div>

        <div className="mt-4 p-4 bg-white border-l-4 border-red-800 shadow">
          For females, the <strong>18-25</strong> age group is the largest with <strong>33 people</strong> or <strong>19.6%</strong>. Meanwhile, the <strong>71-80</strong> age group is the smallest with <strong>0 people</strong> or <strong>0%</strong>.
        </div>
      </div>

      {/* Data Perkawinan */}
      <div className="container mx-auto px-6 md:px-10 mb-10">
  <h3 className="text-2xl font-bold text-yellow-600 mb-5">
    Based on Marriage
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaHeart className="text-5xl text-yellow-400 mb-3" />
      <p className="text-gray-500">Single</p>
      <p className="text-yellow-600 text-3xl font-bold">230</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaRing className="text-5xl text-yellow-600 mb-3" />
      <p className="text-gray-500">Marry</p>
      <p className="text-yellow-600 text-3xl font-bold">198</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaUserTimes className="text-5xl text-yellow-500 mb-3" />
      <p className="text-gray-500">Divorce Dead</p>
      <p className="text-yellow-600 text-3xl font-bold">0</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaUserSlash className="text-5xl text-yellow-600 mb-3" />
      <p className="text-gray-500">Divorce Life</p>
      <p className="text-yellow-600 text-3xl font-bold">1</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaUserCheck className="text-5xl text-yellow-500 mb-3" />
      <p className="text-gray-500">Registered Marriage</p>
      <p className="text-yellow-600 text-3xl font-bold">2</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaBan className="text-5xl text-yellow-700 mb-3" />
      <p className="text-gray-500">Unregistered Marriage</p>
      <p className="text-yellow-600 text-3xl font-bold">3</p>
    </div>
  </div>
</div>

      {/* Data Agama */}
     <div className="container mx-auto px-6 md:px-10">
  <h3 className="text-2xl font-bold text-yellow-600 mb-5">
    Based on Religion
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center text-center">
      <FaStarAndCrescent className="text-yellow-600 text-5xl mb-3" />
      <p className="text-gray-500">Islam</p>
      <p className="text-yellow-600 text-3xl font-bold">442</p>
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
      <p className="text-yellow-600 text-3xl font-bold">3</p>
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