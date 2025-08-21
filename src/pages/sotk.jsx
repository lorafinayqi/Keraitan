const aparatDesa = [
  {
    name: "GUDIONO",
    role: "Village Head",
    image: "img/perangkat_img/gudiono.webp",
  },
  {
    name: "JAINI",
    role: "Village Secretary",
    image: "img/perangkat_img/jaini.webp",
  },
  {
    name: "MISRAN",
    role: "Head of Government Affairs",
    image: "img/perangkat_img/misran.webp",
  },
  {
    name: "RENOANSYAH",
    role: "Head of People's Welfare Affairs",
    image: "img/perangkat_img/reno.webp",
  },
  {
    name: "HESTI MELSATRIANI",
    role: "Service",
    image: "img/perangkat_img/hesty.webp",
  },
  {
    name: "SARKANI",
    role: "Head of Planning Affairs",
    image: "img/perangkat_img/sark.webp",
  },
  {
    name: "TEUKU ADIL ABDILLAH",
    role: "Head of General Affairs",
    image: "img/perangkat_img/adil.webp",
  },
  {
    name: "WAHRUDI SAPUTRA",
    role: "Head of Financial Affairs",
    image: "img/perangkat_img/wahrudi.webp",
  },

  {
    name: "PIRDAUS",
    role: "Village Staff or Other Officials",
    image: "img/perangkat_img/pirda.webp",
  },
  {
    name: "ABDUL GAFUR",
    role: "Village Staff or Other Officials",
    image: "img/perangkat_img/gafur.webp",
  },
  {
    name: "MOCHAMMAD AFANDI",
    role: "Head of Hamlet 01",
    image: "img/perangkat_img/afandi.webp",
  },
    {
    name: "BASRI",
    role: "Office Guard",
    image: "img/perangkat_img/basri.webp",
  },
   {
    name: "IRASAN",
    role: "Village Staff or Other Officials",
    image: "img/perangkat_img/iras.webp",
  },
];

const SOTK = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 pt-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-yellow-600">SOTK</h1>
          <p className="text-base font-medium text-gray-500">
            Organizational Structure and Working Procedures of Keraitan Villages
          </p>
        </div>
      </div>

      {/* Struktur Gambar */}
      <div className="flex justify-center mb-12">
        <img
          src="img/perangkat_img/sotk_keraitan.webp"
          alt="Struktur Organisasi Desa"
          className="w-full max-w-6xl rounded-md shadow-md"
        />
      </div>

      {/* Subjudul */}
      <h2 className="text-3xl font-extrabold text-center text-yellow-600 mb-8">
        Village Government Officials
      </h2>

      {/* Grid max 4 kolom */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-2">
        {aparatDesa.map((person, index) => (
          <div
            key={index}
            className="bg-yellow-600 rounded-lg shadow-md text-white text-center overflow-hidden"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full aspect-[3/3] object-cover"
            />
            <div className="p-2">
              <h3 className="font-bold text-sm md:text-base">{person.name}</h3>
              <p className="text-xs md:text-sm">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOTK;