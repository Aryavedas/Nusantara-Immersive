import React, { useState, useEffect, useRef } from "react";
// Ikon untuk tabs
import { FaEye, FaBullseye, FaHeart } from "react-icons/fa";
// Ikon untuk timeline
import { FaFlagCheckered, FaRocket, FaLightbulb } from "react-icons/fa";

// --- Hook Kustom untuk Animasi Fade-in (Dipertahankan) ---
const useFadeIn = (threshold = 0.1) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isLoaded];
};

// --- Data Dummy (Dipertahankan) ---

const tabContent = {
  visi: {
    // REVISI: Ikon dikecilkan di HP (w-5 h-5), normal di desktop (lg:w-6 lg:h-6)
    // REVISI: Warna ikon akan di-handle di card, bukan di sini
    icon: <FaEye className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Visi Kami",
    text: "Menjadi jembatan digital utama yang menghubungkan dunia dengan kekayaan budaya Nusantara. Kami bercita-cita untuk melestarikan dan memperkenalkan warisan Indonesia melalui pengalaman Virtual Reality yang autentik, edukatif, dan tak terlupakan.",
    colorClass: "bg-emerald-100 text-emerald-600", // Warna untuk ikon di card
  },
  misi: {
    icon: <FaBullseye className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Misi Kami",
    text: "1. Menciptakan aset digital 3D berkualitas tinggi dari situs-situs bersejarah dan budaya Indonesia.\n2. Mengembangkan platform VR yang dapat diakses oleh semua orang, di mana saja.\n3. Berkolaborasi dengan institusi budaya, sejarawan, dan komunitas lokal untuk memastikan akurasi dan otentisitas.\n4. Memberikan nilai edukasi yang mendalam di setiap pengalaman yang kami tawarkan.",
    // REVISI: Warna Misi disamakan dengan warna primer Anda
    colorClass: "bg-blue-100 text-[#113F67]", 
  },
  nilai: {
    icon: <FaHeart className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Nilai-Nilai",
    text: "Inovasi (Selalu mendorong batas teknologi), Autentisitas (Menjaga kemurnian budaya), Edukasi (Setiap produk adalah sarana belajar), dan Kolaborasi (Membangun bersama komunitas).",
    // REVISI: Warna Nilai menggunakan pink/merah yang konsisten
    colorClass: "bg-pink-100 text-pink-600",
  },
};


const timelineData = [
  {
    year: "2025 - 8 November",
    title: "Ide Lahir",
    description: "Konsep 'Nusantara Immersive' pertama kali dicetuskan dari keprihatinan akan pelestarian budaya di era digital.",
    icon: <FaLightbulb />,
  },
  {
    year: "2025 - 9 November",
    title: "Prototipe Pertama",
    description: "Prototipe 'VR Borobudur Experience' berhasil dikembangkan dan diuji coba ke pengguna terbatas.",
    icon: <FaRocket />,
  },
  {
    year: "2025 - 20 November",
    title: "Peluncuran Resmi",
    description: "Platform Nusantara Immersive resmi diluncurkan dengan 6 destinasi budaya awal.",
    icon: <FaFlagCheckered />,
  },
];

const teamData = [
  { id: 1, name: "Arya Veda Setyanindito", role: "CEO & Founder", imageUrl: "https://placehold.co/400x400/113F67/FFF?text=AP" },
  { id: 2, name: "Randhika Bima", role: "Chief Technology Officer (CTO)", imageUrl: "https://placehold.co/400x400/059669/FFF?text=BL" },
  { id: 3, name: "Syadatul Hayat", role: "Cultural Research Lead", imageUrl: "https://placehold.co/400x400/113F67/FFF?text=EN" },
  { id: 4, name: "Nurul Fadillah", role: "Lead UI/UX Designer", imageUrl: "https://placehold.co/400x400/059669/FFF?text=DS" },
  { id: 5, name: "Zaidan Arif", role: "Head of 3D Artists", imageUrl: "https://placehold.co/400x400/113F67/FFF?text=CW" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("visi");
  const [introRef, isIntroLoaded] = useFadeIn();
  const [tabsRef, isTabsLoaded] = useFadeIn();
  const [timelineRef, isTimelineLoaded] = useFadeIn();
  const [teamRef, isTeamLoaded] = useFadeIn();

  // REVISI: Fungsi 'getTabButtonStyle' disesuaikan untuk layout baru
  const getTabButtonStyle = (tabName) => {
    const isActive = activeTab === tabName;
    return isActive
      ? "bg-[#113F67] text-white shadow-md" // Gaya aktif (tetap)
      : "bg-gray-100 text-gray-700 hover:bg-gray-200 lg:bg-white lg:border lg:border-gray-200 lg:hover:bg-gray-50"; // REVISI: Gaya non-aktif (border di desktop)
  };
  return (
    <section className="relative w-full bg-white py-10 lg:py-10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 space-y-24 lg:space-y-32">
        
        {/* === 1. JUDUL INTRO === */}
        <div
          ref={introRef}
          className={`text-center transition-all duration-1000 mb-10 lg:mb-20 ease-out ${isIntroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
            Siapa Nusantara Immersive?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#113F67] mt-3 mb-4">
            Membawa Budaya ke Dunia Virtual
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Kami adalah tim developer, seniman, dan sejarawan yang bersemangat 
            melestarikan warisan budaya Indonesia melalui teknologi imersif.
          </p>
        </div>

		{/* Tab */}
		<div ref={tabsRef}className={`transition-all duration-1000 ease-out ${isTabsLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
				{/* tombol */}
				<div className="flex flex-row flex-wrap justify-center gap-2 lg:flex-col lg:gap-4 lg:sticky lg:top-28">
					
					<button
					onClick={() => setActiveTab("visi")}
					className={`flex items-center justify-center gap-2 lg:gap-3 
								font-semibold text-sm lg:text-base py-2 px-5 lg:py-4 lg:px-6 
								rounded-full lg:rounded-lg 
								transition-all duration-300 w-auto lg:w-full lg:text-left 
								${getTabButtonStyle("visi")}`}
					>
					<span className="hidden lg:inline-block">
						{tabContent.visi.icon}
					</span>
					<span>{tabContent.visi.title}</span>
					</button>

					<button
					onClick={() => setActiveTab("misi")}
					className={`flex items-center justify-center gap-2 lg:gap-3 
								font-semibold text-sm lg:text-base py-2 px-5 lg:py-4 lg:px-6 
								rounded-full lg:rounded-lg 
								transition-all duration-300 w-auto lg:w-full lg:text-left 
								${getTabButtonStyle("misi")}`}
					>
					<span className="hidden lg:inline-block">
						{tabContent.misi.icon}
					</span>
					<span>{tabContent.misi.title}</span>
					</button>

					<button
					onClick={() => setActiveTab("nilai")}
					className={`flex items-center justify-center gap-2 lg:gap-3 
								font-semibold text-sm lg:text-base py-2 px-5 lg:py-4 lg:px-6 
								rounded-full lg:rounded-lg 
								transition-all duration-300 w-auto lg:w-full lg:text-left 
								${getTabButtonStyle("nilai")}`}
					>
					<span className="hidden lg:inline-block">
						{tabContent.nilai.icon}
					</span>
					<span>{tabContent.nilai.title}</span>
					</button>
				</div>

				{/* Kolom Kanan: Konten Tabs */}
				<div className="lg:col-span-2">
					<div key={activeTab} className="animate-fadeIn">
					<div className="flex flex-col items-start text-left p-6 lg:p-0
									bg-gray-50 rounded-2xl border border-gray-100">
						
						{/* REVISI: Ikon sekarang di DALAM card, dan warnanya berubah */}
						<span className={`flex items-center justify-center w-12 h-12 
										rounded-full mb-4 
										${tabContent[activeTab].colorClass}`}
						>
						{tabContent[activeTab].icon}
						</span>
						
						{/* REVISI: Font judul dikecilkan di HP */}
						<h3 className="text-2xl lg:text-3xl font-bold text-[#113F67]">
						{tabContent[activeTab].title}
						</h3>
						
						{/* REVISI: Font paragraf dikecilkan di HP */}
						<p className="mt-4 text-sm lg:text-base text-gray-700 whitespace-pre-line leading-relaxed">
						{tabContent[activeTab].text}
						</p>
					</div>
					</div>
				</div>
			</div>
		</div>

        {/* === 3. TIMELINE PERJALANAN === */}
        <div ref={timelineRef} className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isTimelineLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#113F67] text-center mb-12">
            Perjalanan Kami
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-gray-200" aria-hidden="true"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[34px] top-1 flex items-center justify-center 
                                   w-8 h-8 rounded-full bg-emerald-600 text-white">
                    {item.icon}
                  </span>
                  <div className="pl-4">
                    <span className="text-sm font-semibold text-emerald-600 uppercase">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === 4. TIM KAMI === */}
        <div
          ref={teamRef}
          className={`transition-all duration-1000 ease-out ${
            isTeamLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#113F67] text-center mb-12">
            Tim Hebat Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamData.map((person) => (
              <div 
                key={person.id} 
                className="text-center p-6 bg-white rounded-xl 
                           border border-gray-200 shadow-md
                           hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover 
                             border-4 border-white shadow-sm"
                />
                <h3 className="mt-4 text-xl font-bold text-[#113F67]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-emerald-600">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
