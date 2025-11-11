import React, { useState, useEffect, useRef } from "react";
import { FaDownload, FaStar, FaSave, FaCalendarCheck } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { useLocation } from "react-router-dom";

import { 
    FaGlobe, 
    FaTools, 
    FaTheaterMasks, 
    FaUtensils, 
    FaHandsHelping, 
    FaCommentDots, 
    FaLightbulb, 
    FaHands,
	FaSearch
} from "react-icons/fa";

const CATEGORIES = [
    { key: "all", name: "Semua Budaya", subTitle: "Tampilkan semua aset budaya", icon: <FaGlobe />, colors: { bg: "bg-sky-100", icon: "text-sky-600", title: "text-sky-800" } },
    { key: "sistem_peralatan", name: "Peralatan Hidup", subTitle: "Pusaka, bangunan, dan sandang", icon: <FaTools />, colors: { bg: "bg-amber-100", icon: "text-amber-600", title: "text-amber-800" } }, 
    { key: "kesenian", name: "Kesenian", subTitle: "Musik, tari, dan seni rupa", icon: <FaTheaterMasks />, colors: { bg: "bg-pink-100", icon: "text-pink-600", title: "text-pink-800" } },
    { key: "sistem_mata_pencaharian", name: "Mata Pencarian", subTitle: "Aset terkait kuliner dan ekonomi", icon: <FaUtensils />, colors: { bg: "bg-lime-100", icon: "text-lime-600", title: "text-lime-800" } },
    { key: "organisasi_sosial", name: "Organisasi Sosial", subTitle: "Adat istiadat dan struktur sosial", icon: <FaHandsHelping />, colors: { bg: "bg-indigo-100", icon: "text-indigo-600", title: "text-indigo-800" } }, 
    { key: "bahasa", name: "Bahasa", subTitle: "Aset terkait komunikasi dan lisan", icon: <FaCommentDots />, colors: { bg: "bg-purple-100", icon: "text-purple-600", title: "text-purple-800" } }, 
    { key: "sistem_pengetahuan", name: "Sistem Pengetahuan", subTitle: "Eksplorasi konsep dan ilmu", icon: <FaLightbulb />, colors: { bg: "bg-cyan-100", icon: "text-cyan-600", title: "text-cyan-800" } }, 
    { key: "sistem_religi", name: "Sistem Religi", subTitle: "Aset terkait kepercayaan dan spiritual", icon: <FaHands />, colors: { bg: "bg-rose-100", icon: "text-rose-600", title: "text-rose-800" } },
];

const COLOR_PALETTE = {
    "all": { primary: "sky", secondary: "sky-50" },
    "sistem_peralatan": { primary: "amber", secondary: "amber-50" },
    "kesenian": { primary: "pink", secondary: "pink-50" },
    "sistem_mata_pencaharian": { primary: "lime", secondary: "lime-50" },
    "organisasi_sosial": { primary: "indigo", secondary: "indigo-50" },
    "bahasa": { primary: "purple", secondary: "purple-50" },
    "sistem_pengetahuan": { primary: "cyan", secondary: "cyan-50" },
    "sistem_religi": { primary: "rose", secondary: "rose-50" },
};

const badgeColors = {
  emerald: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  gray: "bg-gray-100 text-gray-800",
};

const dummyDownloads = [
    {
        id: 1,
        category: "sistem_peralatan", 
        badge: {
            text: "Coming Soon",
            color: "gray",
            icon: <FaCalendarCheck />,
        },
        title: "Museum Benda Pusaka Indonesia",
        description: "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
        downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
        imageUrl: "/img/poster-benda-pusaka.png",
        rating: "0",
        reviews: "0",
        downloads: "5 Download",
        size: "120 MB",
    },

    {
        id: 2,
        category: "sistem_peralatan", 
        badge: {
            text: "Coming Soon",
            color: "gray",
            icon: <FaCalendarCheck />,
        },
        title: "Museum Bangunan Iconic Indonesia",
        description: "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
        downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
        imageUrl: "/img/poster-bangunan-iconic.png",
        rating: "4.8",
        reviews: "1.2k",
        downloads: "50k+",
        size: "120 MB",
    },

    {
        id: 3,
        category: "kesenian", 
        badge: {
            text: "Coming Soon",
            color: "gray",
            icon: <FaCalendarCheck />,
        },
        title: "VR Alat Musik Tradisional Nusantara",
        description: "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
        downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
        imageUrl: "/img/poster-alat-musik.png",
        rating: "4.8",
        reviews: "1.2k",
        downloads: "50k+",
        size: "120 MB",
    },

    {
        id: 4,
        category: "sistem_mata_pencaharian", 
        badge: {
        text: "Coming Soon",
        color: "gray",
        icon: <FaCalendarCheck />,
        },
        title: "VR Kuliner Nusantara",
        description: "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
        downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
        imageUrl: "/img/poster-makanan-nusantara.png",
        rating: "4.8",
        reviews: "1.2k",
        downloads: "50k+",
        size: "120 MB",
    },

    {
        id: 5,
        category: "sistem_peralatan", 
        badge: {
        text: "Coming Soon",
        color: "gray",
        icon: <FaCalendarCheck />,
        },
        title: "VR Pakaian Adat Nusantara",
        description: "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
        downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
        imageUrl: "/img/poster-baju-adat.png",
        rating: "4.8",
        reviews: "1.2k",
        downloads: "50k+",
        size: "120 MB",
    },

    {
        id: 6,
        category: "organisasi_sosial", 
        badge: {
        text: "Coming Soon",
        color: "gray",
        icon: <FaCalendarCheck />,
        },
        title: "VR Adat Istiadat Nusantara",
        description: "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
        downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
        imageUrl: "/img/poster-budaya.png",
        rating: "4.8",
        reviews: "1.2k",
        downloads: "50k+",
        size: "120 MB",
    },
];

export default function Download() {
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isProductVisible, setIsProductVisible] = useState(true); 
    
    const sectionRef = useRef(null);

    const filteredDownloads = dummyDownloads.filter(item => 
        selectedCategory === "all" || item.category === selectedCategory
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []); 

const handleCategoryChange = (categoryKey) => {
    if (categoryKey === selectedCategory) return;

    // 1. FADE OUT: Sembunyikan produk lama
    setIsProductVisible(false); 

    // Jeda singkat untuk FADE OUT selesai (150ms)
    const fadeOutDuration = 150;
    
    setTimeout(() => {
        // 2. Ganti kategori (memaksa grid me-render konten baru, yang masih tersembunyi)
        setSelectedCategory(categoryKey); 
        
        // Scroll logic (Tetap di sini, agar scroll menunjuk ke area konten baru)
        const sectionEl = sectionRef.current;
        const windowWidth = window.innerWidth;
        const desktopBreakpoint = 1024;
        const OFFSET_PIXELS = 250; 

        if (sectionEl && windowWidth < desktopBreakpoint) {
            const sectionTop = sectionEl.getBoundingClientRect().top;
            const newScrollPosition = window.scrollY + sectionTop + OFFSET_PIXELS;

            window.scrollTo({
                top: newScrollPosition,
                behavior: 'smooth' 
            });
        }

        // 3. Jeda 10ms ekstra: Memastikan React selesai me-mount elemen baru (yang masih opacity: 0)
        setTimeout(() => {
            // 4. FADE IN: Munculkan produk baru (memicu staggered animation)
            setIsProductVisible(true); 
        }, 10); 

    }, fadeOutDuration);
};

    return (
        <section className="relative w-full bg-white pb-10" ref={sectionRef}>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-10">
                
                {/* Text Header (Fade-in controlled by isLoaded) */}
                <div
                className={`text-center transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${location.pathname === "/download" ? "hidden" : ""}`}>
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                    Mulai Eksplorasi Anda
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#113F67] mt-3 mb-4">
                    Unduh Versi Terbaru Kami
                </h2>
                <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                    Akses semua destinasi, dapatkan fitur terkini, dan selami
                    kekayaan budaya Indonesia langsung dari perangkat Anda.
                </p>
                </div>

                {/* Category Selection */}
				<div className="mt-7">
					<div className="flex justify-between items-center">
						<h3 className="text-sm lg:text-xl font-bold text-gray-800">Pilih Kategori Budaya</h3>
						<a 
							href="#"
							onClick={(e) => { e.preventDefault(); handleCategoryChange("all"); }}
							className="text-xs lg:text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition duration-150 flex items-center gap-1"
						>
							Lihat semua<span className="text-base lg:text-lg">→</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-2.5">
						{CATEGORIES.map((category, index) => {
							const categoryColors = category.colors;
							const isActive = selectedCategory === category.key;

							return (
								<button
									key={category.key}
									onClick={() => handleCategoryChange(category.key)}
									className={`
										flex items-center gap-2 p-2 rounded-lg border shadow-sm text-left 
										transition-all duration-75 ease-in-out
										w-full cursor-pointer min-h-[70px]
										${isActive ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-200' : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'}
									
										transform opacity-0 translate-y-4
										transition-all duration-300 ease-out
									`}
									style={{
										opacity: isLoaded ? 1 : 0, 
										transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
										transitionDelay: isLoaded ? `${index * 5}ms` : '0ms'
									}}
								>
									<div 
										className={`p-1.5 lg:p-2 rounded-md text-lg lg:text-2xl shrink-0 ${isActive ? 'bg-emerald-200/50 text-emerald-600' : `${categoryColors.bg} ${categoryColors.icon}`}`}
									>
										{category.icon}
									</div>
									<div className="flex flex-col min-w-0">
										<h4 className={`text-xs lg:text-base font-semibold ${isActive ? 'text-emerald-800' : `${categoryColors.title}`}`}>{category.name}</h4>
										<p className="text-[10px] lg:text-xs text-gray-500 mt-0.5 ">{category.subTitle}</p>
									</div>
								</button>
							);
						})}
					</div>
				</div>

                <p id="hasil" className="-z-20 relative pt-20 -mt-12 -mb-7 lg:-mt-10 lg:-mb-10 pl-2 font-bold text-gray-800 scroll-mt-20">
                    Hasil pencarian :
                </p>

                {/* Download Items */}
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10
                                transition-opacity duration-150 ease-in-out
                                ${isProductVisible ? 'opacity-100' : 'opacity-0'} // Kontrol Fade-in/out saat klik kategori
                                `}
                    key={selectedCategory} 
                >
                
                {filteredDownloads.length > 0 ? (
                    filteredDownloads.map((item, index) => (
                        <div
                        key={item.id}
                        className={`
                            flex flex-col
                            bg-white rounded-2xl
                            shadow-md
                            border border-gray-200
                            overflow-hidden 
                            transform opacity-0 translate-y-4
                            transition-all duration-500 ease-out
                        `}
                        style={{ 
                            // Kontrol Fade-in Saat Halaman Dimuat (isLoaded) ATAU Saat Kategori Diklik (isProductVisible)
                            opacity: (isLoaded && isProductVisible) ? 1 : 0, 
                            transform: (isLoaded && isProductVisible) ? 'translateY(0)' : 'translateY(16px)',
                            
                            // Staggered delay (gilir)
                            transitionDelay: (isLoaded && isProductVisible) ? `${index * 75}ms` : '0ms'
                        }} 
                        >
                        
                        <div className="w-full h-48">
                            <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover" 
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            
                            <span
                            className={`inline-flex items-center gap-1.5 
                                        rounded-full px-3 py-1 
                                        text-xs font-semibold self-start
                                        ${badgeColors[item.badge.color] || badgeColors.emerald}
                                        `}
                            >
                            {item.badge.icon}
                            {item.badge.text}
                            </span>

                            <h3 className="mt-4 text-2xl font-bold text-gray-900">
                            {item.title}
                            </h3>

                            <p className="mt-2 text-base text-gray-600 grow">
                            {item.description}
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 border-t border-gray-200">
                            
                            <div>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <span className="flex items-center gap-1.5">
                                <FaStar className="w-4 h-4 text-yellow-500" />
                                <span className="font-semibold text-gray-800">{item.rating}</span>
                                <span>({item.reviews})</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                <HiUsers className="w-4 h-4 text-emerald-600" />
                                <span className="font-semibold text-gray-800">{item.downloads}</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                <FaSave className="w-4 h-4 text-gray-400" />
                                <span className="font-semibold text-gray-800">{item.size}</span>
                                </span>
                            </div>
                            </div>

                            <div className="mt-6 text-center">
                            <a
                                href={item.downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5
                                        bg-[#113F67] text-white 
                                        font-bold text-base py-3 px-8 rounded-full
                                        shadow-md shadow-[#113F67]/30 
                                        transition-all duration-300 
                                        hover:scale-105 hover:shadow-lg"
                            >
                                <FaDownload className="w-4 h-4" />
                                Unduh Sekarang
                            </a>
                            <p className="mt-3 text-xs text-gray-500 italic">
                                *Anda akan diarahkan ke Google Drive
                            </p>
                            </div>
                            
                        </div>
                        </div>
                    ))
                ) : (
					<div className="md:col-span-2 lg:col-span-3 text-center p-12 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl shadow-inner mt-8">
						
						{/* Ikon Besar dan Ramah */}
						<FaSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />

						{/* Judul Utama */}
						<h4 className="text-xl font-bold text-gray-800 mb-2">
							Aset Belum Ditemukan
						</h4>

						{/* Deskripsi yang Lebih Jelas */}
						<p className="text-base text-gray-600 max-w-lg mx-auto">
							Mohon maaf, saat ini belum ada aset yang tersedia untuk kategori {CATEGORIES.find(c => c.key === selectedCategory)?.name || "ini"}.
						</p>
					</div>
                )}
                </div>
            </div>
        </section>
    );
}