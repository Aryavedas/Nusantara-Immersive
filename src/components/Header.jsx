// Mode Web Biasa
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const InstagramIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
//   </svg>
// );
// const MenuIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="4" x2="20" y1="12" y2="12"/>
//     <line x1="4" x2="20" y1="6" y2="6"/>
//     <line x1="4" x2="20" y1="18" y2="18"/>
//   </svg>
// );
// const CloseIcon = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 6 6 18"/>
//     <path d="m6 6 12 12"/>
//   </svg>
// );

// export default function Header() {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const [currentPath, setCurrentPath] = useState('/');

// 	useEffect(() => {
// 	if (typeof window !== 'undefined') {
// 		setCurrentPath(window.location.pathname || '/');
// 	}
// 	}, []);

// 	const navLinks = [
// 	{ name: 'Home', href: '/', id: 'home' },
// 	{ name: 'Download', href: '/download', id: 'download' },
// 	{ name: 'Tentang', href: '/about', id: 'about' },
// 	];

// 	const isActive = (href) => {
// 	if (href === '/') return currentPath === '/' || currentPath === '';
// 	return currentPath.startsWith(href);
// 	};

// 	const linkBaseClasses = 'font-medium transition-all duration-300 border-b-2 ';

// 	const activeClasses = `text-[#113F67] font-bold border-emerald-500`; 

// 	const inactiveClasses = `text-gray-600 hover:text-[#113F67] hover:border-emerald-500 border-transparent`; 

// 	const instagramButtonClasses = `
// 	flex items-center space-x-2 rounded-full px-5 py-2 
// 	text-sm font-medium transition-all duration-300
// 	border-2 border-[#113F67] text-[#113F67] bg-white
// 	hover:bg-blue-50 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-400/50`;

// return (
// 	<header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
// 		<nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
// 			<a href="/" className={`text-sm lg:text-xl items-center lg:ml-0 font-extrabold text-[#113F67] tracking-tight transition-colors duration-200 hover:text-blue-900 flex`}>
// 			<img src="/public/img/logo3.png" alt="" className='lg:mr-2 mr-1 w-[60px] lg:w-[90px]'/>
// 			<div className="flex-col">
// 				<p>Nusantara</p>
// 				<p className="text-emerald-600 -mt-1.5">Immersive</p>
// 			</div>
// 			</a>

// 			<ul className="hidden md:ml-[-100px] md:flex space-x-8 items-center">
// 			{navLinks.map((link) => (
// 				<li key={link.id}>
// 				<Link
// 					to={link.href}
// 					className={`${linkBaseClasses} ${isActive(link.href) ? activeClasses : inactiveClasses} px-1 py-1`}
// 					onClick={() => setCurrentPath(link.href)} 
// 				>
// 					{link.name}
// 				</Link>
// 				</li>
// 			))}
// 			</ul>

// 			<div className="hidden md:block">
// 			<a
// 				href="https://instagram.com"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={instagramButtonClasses}
// 			>
// 				<InstagramIcon className="w-5 h-5" />
// 				<span>Instagram</span>
// 			</a>
// 			</div>

// 			<div className="md:hidden">
// 			{/* PERBAIKAN: Menggunakan sintaks JIT Tailwind */}
// 			<button
// 				onClick={() => setIsMenuOpen(!isMenuOpen)}
// 				className={`text-[#113F67] p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
// 				aria-label="Toggle Menu"
// 			>
// 				{isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
// 			</button>
// 			</div>
// 		</nav>

// 		<div
// 			className={`fixed inset-x-0 top-[73px] w-full bg-white shadow-xl md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
// 			style={{ zIndex: 40 }} >
// 			<ul className="flex flex-col space-y-1 p-4 border-t border-gray-100">
// 			{navLinks.map((link) => (
// 				<li key={link.id}>
// 				<Link
// 					to={link.href}
// 					className={`
// 					block w-full px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg
// 					${isActive(link.href)
// 						? 'bg-emerald-100 text-emerald-800 font-bold'
// 						// PERBAIKAN: Menggunakan sintaks JIT Tailwind
// 						: `text-gray-700 hover:bg-blue-50 hover:text-[#113F67]`
// 					}
// 					`}
// 					onClick={() => {
// 					setCurrentPath(link.href);
// 					setIsMenuOpen(false);
// 					}}
// 				>
// 					{link.name}
// 				</Link>
// 				</li>
// 			))}
// 			<li className="pt-2">
// 				<a
// 				href="https://instagram.com"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={`flex items-center justify-center space-x-2 w-full px-4 py-3 ${instagramButtonClasses}`}>
// 				<InstagramIcon className="w-5 h-5" />
// 				<span>Instagram</span>
// 				</a>
// 			</li>
// 			</ul>
// 		</div>
// 	</header>
// );
// }

// Web APP Mode
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Ikon untuk Navigasi Bawah
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const DownloadIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);

const AboutIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" x2="12" y1="16" y2="12"/>
    <line x1="12" x2="12.01" y1="8" y2="8"/>
  </svg>
);

export default function Header() {
    // REVISI: isMenuOpen dihapus
    const [currentPath, setCurrentPath] = useState('/');

    useEffect(() => {
    if (typeof window !== 'undefined') {
        setCurrentPath(window.location.pathname || '/');
    }
    }, []);

    // REVISI: navLinks diganti namanya menjadi 'desktopNavLinks'
    const desktopNavLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Download', href: '/download', id: 'download' },
    { name: 'Tentang', href: '/about', id: 'about' },
    ];

    // REVISI: Dibuat array baru untuk navbar bawah (tanpa Profil)
    const mobileNavLinks = [
        { name: 'Home', href: '/', id: 'home', icon: <HomeIcon className="w-5 h-5" /> },
        { name: 'Download', href: '/download', id: 'download', icon: <DownloadIcon className="w-5 h-5" /> },
        { name: 'Tentang', href: '/about', id: 'about', icon: <AboutIcon className="w-5 h-5" /> },
    ];


    const isActive = (href) => {
    if (href === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(href);
    };

    // --- STYLING BARU UNTUK DESKTOP & MOBILE ---

    // Style untuk Desktop Nav (Top Bar) - Diambil dari kode asli Anda
    const desktopLinkBase = 'font-medium transition-all duration-300 border-b-2 px-1 py-1';
    const desktopActive = `text-[#113F67] font-bold border-emerald-500`; 
    const desktopInactive = `text-gray-600 hover:text-[#113F67] hover:border-emerald-500 border-transparent`; 

    // Style Tombol Instagram Desktop (Diambil dari kode asli Anda)
    const instagramButtonClasses = `
    flex items-center space-x-2 rounded-full px-5 py-2 
    text-sm font-medium transition-all duration-300
    border-2 border-[#113F67] text-[#113F67] bg-white
    hover:bg-blue-50 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-400/50`;

    // Style untuk Mobile Nav (Bottom Bar) - Minimalis & Solid
    const mobileLinkBase = 'flex flex-col items-center justify-center flex-1 gap-1 py-2 text-xs font-medium transition-colors duration-200';
    const mobileActive = `text-emerald-600`; // Warna solid untuk item aktif
    const mobileInactive = `text-gray-500 hover:text-emerald-600`; 

return (
    <React.Fragment>
        {/* 1. TOP BAR (Logo + Nav Desktop + Tombol Instagram) */}
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            {/* 'container mx-auto' diubah 'max-w-7xl mx-auto' agar konsisten */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 lg:py-3 flex justify-between items-center relative">
                
                <a href="/" className={`text-xs lg:text-xl items-center lg:ml-0 font-extrabold text-[#113F67] tracking-tight transition-colors duration-200 hover:text-blue-900 flex`}>
                <img src="/img/logo3.png" alt="Nusantara Immersive Logo" className='lg:mr-2 mr-1 w-10 lg:w-[90px]'/>
                <div className="flex-col">
                    <p>Nusantara</p>
                    <p className="text-emerald-600 -mt-1">Immersive</p>
                </div>
                </a>

                {/* Navigasi DESKTOP (Muncul di 'md' ke atas) */}
                <ul className="hidden md:ml-[-100px] md:flex space-x-8 items-center">
                {desktopNavLinks.map((link) => (
                    <li key={link.id}>
                    <Link
                        to={link.href}
                        className={`${desktopLinkBase} ${isActive(link.href) ? desktopActive : desktopInactive}`}
                        onClick={() => setCurrentPath(link.href)} 
                    >
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>

                {/* Tombol Instagram DESKTOP (Muncul di 'md' ke atas) */}
                <div className="hidden md:block">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={instagramButtonClasses}
                    >
                        <InstagramIcon className="w-5 h-5" />
                        <span>Instagram</span>
                    </a>
                </div>
                
                {/* REVISI: Tombol Instagram MOBILE (Muncul HANYA di 'md' ke bawah) */}
                <div className="md:hidden">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-10 h-10 rounded-full text-[#113F67] hover:bg-gray-100`}
                        aria-label="Instagram"
                    >
                        <InstagramIcon className="w-5 h-5" />
                    </a>
                </div>
            </nav>
            {/* Dropdown Menu Mobile (DIHAPUS) */}
        </header>

        {/* 2. BOTTOM NAV BAR (HANYA MUNCUL DI MOBILE) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_5px_rgba(0,0,0,0.05)]">
            {/* 'py-2' ditambahkan untuk padding vertikal yang nyaman */}
            <div className="flex justify-around items-center max-w-7xl mx-auto px-2 py-2">
                {mobileNavLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.href}
                        className={`${mobileLinkBase} ${isActive(link.href) ? mobileActive : mobileInactive}`}
                        onClick={() => setCurrentPath(link.href)} 
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    </React.Fragment>
);
}