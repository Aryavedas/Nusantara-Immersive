import React, { useState, useEffect } from "react";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { FaGamepad, FaVrCardboard, FaPalette } from "react-icons/fa";


export default function Hero() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
	const timer = setTimeout(() => {
		setIsLoaded(true);
	}, 100);

	return () => clearTimeout(timer);
	}, []);

  return (
	<section className="relative w-full bg-white pt-12 lg:pt-28 lg:pb-32 mb-10 magicpattern">
		<div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-8">			
			{/* === Kolom Kiri: Teks & CTA === */}
			<div className={`flex-2 text-left transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#113F67] mb-6">
				Menyelami Nusantara
				<br />
				<span className="text-emerald-600">Lewat Dunia Virtual.</span>
				</h1>

				<p className="text-base sm:text-lg text-gray-600 max-w-md mx-0 mb-10">
				Nusantara Immersive menghadirkan teknologi VR untuk menjelajahi
				kekayaan budaya Indonesia secara interaktif dan imersif.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-start">
				<a
					href="/download"
					className="flex items-center justify-center gap-2.5 bg-emerald-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
				>
					<FaArrowRight className="w-4 h-4" />
					Jelajahi Sekarang
				</a>

				<a
					href="#video-demo"
					className="flex items-center justify-center gap-2.5 bg-white text-[#113F67] font-bold text-lg py-3 px-8 rounded-full shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
				>
					<FaPlayCircle className="w-5 h-5 opacity-80" />
					Lihat Demo
				</a>
				</div>

			<div className="mt-12 lg:mt-16">
		<div className="mt-12 lg:mt-16">
		<div className="grid grid-cols-3 items-start
						gap-4 text-left
						lg:flex lg:flex-row lg:flex-wrap lg:justify-start 
						lg:gap-x-10 lg:gap-y-6">

		<div className="flex items-center gap-2 lg:gap-3">
			<FaGamepad className="w-4 h-4 text-emerald-600 lg:w-6 lg:h-6" />
			<div>
			<p className="text-lg font-bold text-[#113F67] lg:text-xl">6</p>
			<p className="text-xs text-gray-500 lg:text-sm">Aplikasi</p>
			</div>
		</div>

		{/* Item 2 */}
		<div className="flex items-center gap-2 lg:gap-3">
			<FaVrCardboard className="w-4 h-4 text-emerald-600 lg:w-6 lg:h-6" />
			<div>
			<p className="text-lg font-bold text-[#113F67] lg:text-xl">4K</p>
			<p className="text-xs text-gray-500 lg:text-sm">Resolusi</p>
			</div>
		</div>

		{/* Item 3 */}
		<div className="flex items-center gap-2 lg:gap-3">
			<FaPalette className="w-4 h-4 text-emerald-600 lg:w-6 lg:h-6" />
			<div>
			<p className="text-lg font-bold text-[#113F67] lg:text-xl">6</p>
			<p className="text-xs text-gray-500 lg:text-sm">Aset Budaya</p>
			</div>
		</div>

		</div>
		</div>
			</div>

			</div>

			{/* === Kolom Kanan: Visual (Cards) === */}
			<a href="/download" 
				className={`flex-1 flex justify-center lg:justify-end 
							transition-all duration-1000 ease-out delay-200
							${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
			>
				<div className="relative w-full max-w-sm h-80 sm:h-96 group">
				
				<div className="absolute w-full h-full bg-gray-100 rounded-2xl 
								transform rotate-6 translate-x-4 shadow-md 
								transition-all duration-500 ease-in-out delay-150 
								group-hover:rotate-8 group-hover:translate-x-6"></div>

				<div className="absolute w-full h-full bg-emerald-500/20 rounded-2xl 
								transform -rotate-4 shadow-lg 
								transition-all duration-500 ease-in-out delay-75 
								group-hover:-rotate-6"></div>

				<div className="absolute w-full h-full bg-white rounded-2xl shadow-2xl 
								overflow-hidden transform translate-y-4 
								transition-all duration-500 ease-in-out 
								group-hover:scale-105 group-hover:translate-y-0 
								group-hover:shadow-emerald-500/30">
					<img
					src="/img/poster-benda-pusaka.png" // Path gambar Anda dipertahankan
					alt="Eksplorasi VR Budaya Indonesia"
					className="w-full h-full object-cover object-[25%_75%]"
					/>
					<div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-black/60 to-transparent">
					<h3 className="text-xl font-bold text-white">VR Museum Benda Pusaka Indonesia</h3>
					<p className="text-sm text-white/90">Mulai Eksplorasi</p>
					</div>
				</div>
				</div>
			</a>
		</div>
	</section>
  );
}