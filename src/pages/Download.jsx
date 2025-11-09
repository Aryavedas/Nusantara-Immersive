import React, { useState, useEffect, useRef } from "react";
// Impor ikon untuk tombol, badge, rating, dan metadata baru
import { FaDownload, FaStar, FaSave } from "react-icons/fa"; // FaSave untuk ukuran file
import { HiUsers } from "react-icons/hi"; // HiUsers untuk jumlah download

// --- Data Dummy (Diperbarui dengan Metadata Baru) ---
const dummyDownloads = [
  {
    id: 1,
    badge: {
      text: "Aplikasi Utama",
      color: "emerald",
      icon: <FaStar />,
    },
    title: "Nusantara Immersive",
    description:
      "Platform utama untuk mengakses semua destinasi budaya. Pengalaman terlengkap.",
    downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
    imageUrl: "/img/borobudur.jpg",
    rating: "4.8",
    reviews: "1.2k",
    downloads: "50k+", // Metadata meyakinkan
    size: "120 MB",  // Metadata meyakinkan
  },
  {
    id: 2,
    badge: {
      text: "Rilis Baru",
      color: "blue",
      icon: null,
    },
    title: "VR Borobudur Experience",
    description:"Fokus menjelajahi Candi Borobudur secara mendalam. Ukuran file lebih ringan.",
    downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
    imageUrl: "/img/borobudur.jpg",
    rating: "4.5",
    reviews: "870",
    downloads: "10k+", // Metadata meyakinkan
    size: "85 MB",   // Metadata meyakinkan
  },
  {
    id: 3,
    badge: {
      text: "Coming Soon",
      color: "gray", // Tambahan warna baru
      icon: null,
    },
    title: "VR Museum Batik",
    description: "Jelajahi galeri virtual dan pelajari filosofi di balik setiap motif batik.",
    downloadLink: "https://drive.google.com/drive/folders/1YGEs2CZ6eo3NpTylJI9nqsiRP2bYMsix?usp=sharing",
    imageUrl: "/img/borobudur.jpg",
    rating: "N/A", // Belum rilis
    reviews: "0",
    downloads: "0",
    size: "N/A",
  },
];

// Fungsi helper untuk mapping warna badge (Diperbarui)
const badgeColors = {
  emerald: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  gray: "bg-gray-100 text-gray-800",
};

export default function Download() {
	const [isLoaded, setIsLoaded] = useState(false);
  	const sectionRef = useRef(null); // <-- TAMBAHKAN INI

	useEffect(() => {
		// Buat observer baru
		const observer = new IntersectionObserver(
		([entry]) => {
			// Callback ini berjalan saat elemen terlihat/tidak terlihat
			if (entry.isIntersecting) {
			setIsLoaded(true); // Set state HANYA saat terlihat
			observer.disconnect(); // Berhenti mengamati setelah animasi dipicu
			}
		},
		{
			threshold: 0.1, // Picu animasi saat 10% elemen terlihat
		}
		);

		// Simpan nilai ref saat ini
		const currentRef = sectionRef.current;

		// Mulai amati elemen jika ref-nya ada
		if (currentRef) {
		observer.observe(currentRef);
		}

		// Cleanup function: berhenti mengamati saat komponen hancur
		return () => {
		if (currentRef) {
			observer.unobserve(currentRef);
		}
		};
	}, []); // Array kosong [] sudah benar, agar setup ini hanya berjalan sekali

	return (
		<section className="relative w-full bg-white py-10 lg:py-10" ref={sectionRef}>
			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
				
				{/* === Judul Section (Dipertahankan) === */}
				<div
				className={`text-center transition-all duration-1000 ease-out ${
					isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}
				>
				{/* PERUBAHAN 1: Menambahkan "Eyebrow" Text (Menarik & Modern) */}
				<span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
					Mulai Eksplorasi Anda
				</span>

				{/* PERUBAHAN 2: Judul menggunakan warna tema utama & teks disesuaikan */}
				<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#113F67] mt-3 mb-4">
					Unduh Versi Terbaru Kami
				</h2>

				{/* PERUBAHAN 3: Paragraf dibuat lebih solid & teks disesuaikan */}
				<p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
					Akses semua destinasi, dapatkan fitur terkini, dan selami
					kekayaan budaya Indonesia langsung dari perangkat Anda.
				</p>
				</div>

				{/* Card*/}
				{/* === Grid Card Download === */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				
				{dummyDownloads.map((item, index) => (
					<div
					key={item.id}
					className={`
						flex flex-col
						bg-white rounded-2xl
						shadow-md
						border border-gray-200
						overflow-hidden 
						transition-all duration-300 ease-out
						${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
					`}
					style={{ transitionDelay: `${index * 100 + 200}ms` }} 
					>
					{/* === Gambar di Atas === */}
					<div className="w-full h-48">
						<img
						src={item.imageUrl}
						alt={item.title}
						className="w-full h-full object-cover" 
						/>
					</div>

					{/* === Konten Utama (Deskripsi) === */}
					{/* 'flex-1' dan 'flex-grow' di <p> akan mendorong 'footer' ke bawah */}
					<div className="p-6 flex-1 flex flex-col">
						
						{/* Badge */}
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

						{/* Judul Card */}
						<h3 className="mt-4 text-2xl font-bold text-gray-900">
						{item.title}
						</h3>

						{/* Penjelasan Card */}
						<p className="mt-2 text-base text-gray-600 flex-grow">
						{item.description}
						</p>
					</div>

					{/* === PERUBAHAN BARU: Footer Card (Metadata & Tombol) === */}
					{/* Diberi BG abu-abu halus dan border atas untuk memisahkan */}
					<div className="p-6 bg-gray-50 border-t border-gray-200">
						
						{/* Metadata Meyakinkan */}
						<div> {/* Div pembungkus (border-t/mt-6 lama dihapus) */}
						<div className="flex justify-between items-center text-sm text-gray-600">
							{/* Rating */}
							<span className="flex items-center gap-1.5">
							<FaStar className="w-4 h-4 text-yellow-500" />
							<span className="font-semibold text-gray-800">{item.rating}</span>
							<span>({item.reviews})</span>
							</span>
							{/* Downloads */}
							<span className="flex items-center gap-1.5">
							<HiUsers className="w-4 h-4 text-emerald-600" />
							<span className="font-semibold text-gray-800">{item.downloads}</span>
							</span>
							{/* Size */}
							<span className="flex items-center gap-1.5">
							<FaSave className="w-4 h-4 text-gray-400" />
							<span className="font-semibold text-gray-800">{item.size}</span>
							</span>
						</div>
						</div>

						{/* Tombol CTA (Tombol 'inline-flex' dipertahankan) */}
						<div className="mt-6 text-center">
						<a
							href={item.downloadLink}
							target="_blank" // Buka di tab baru
							rel="noopener noreferrer" // Keamanan
							className="inline-flex items-center justify-center gap-2.5
									bg-[#113F67] text-white 
									font-bold text-base py-3 px-8 rounded-full
									shadow-md shadow-[#113F67]/30 
									transition-all duration-300 
									hover:scale-105 hover:shadow-lg"
						>
							{/* PERUBAHAN BARU: Ikon Google Drive */}
							<FaDownload className="w-4 h-4" />
							Unduh Sekarang
						</a>
						<p className="mt-3 text-xs text-gray-500 italic">
							*Anda akan diarahkan ke Google Drive
						</p>
						</div>
						
					</div>
					{/* === Akhir Perubahan === */}

					</div>
				))}
				</div>
			</div>
		</section>
	);
}