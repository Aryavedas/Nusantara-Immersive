import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Ikon-ikon ---
const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);
const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);
// --- Akhir Ikon ---

// PERBAIKAN: Warna utama didefinisikan di sini untuk referensi,
// tapi kita akan menggunakan sintaks JIT Tailwind: text-[#113F67]
// const PRIMARY_BLUE = '#113F67'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname || '/');
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Download', href: '/download', id: 'download' },
    { name: 'Tentang', href: '/about', id: 'about' },
  ];

  const isActive = (href) => {
    if (href === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(href);
  };

  const linkBaseClasses = 'font-medium transition-all duration-300 border-b-2 ';
  
  // PERBAIKAN: Menggunakan sintaks JIT Tailwind
  const activeClasses = `text-[#113F67] font-bold border-emerald-500`; 
  
  // PERBAIKAN: Menggunakan sintaks JIT Tailwind
  const inactiveClasses = `text-gray-600 hover:text-[#113F67] hover:border-emerald-500 border-transparent`; 

  // PERBAIKAN: Menggunakan sintaks JIT Tailwind
  const instagramButtonClasses = `
    flex items-center space-x-2 rounded-full px-5 py-2 
    text-sm font-medium transition-all duration-300
    border-2 border-[#113F67] text-[#113F67] bg-white
    hover:bg-blue-50 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-400/50
  `;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
        
        {/* PERBAIKAN: Menggunakan sintaks JIT Tailwind */}
        <a href="/" className={`text-3xl font-extrabold text-[#113F67] tracking-tight transition-colors duration-200 hover:text-blue-900`}>
          Nusantara<span className="text-emerald-600">Immersive</span>
        </a>

        <ul className="hidden md:ml-[-100px] md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className={`${linkBaseClasses} ${isActive(link.href) ? activeClasses : inactiveClasses} px-1 py-1`}
                onClick={() => setCurrentPath(link.href)} 
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

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

        <div className="md:hidden">
          {/* PERBAIKAN: Menggunakan sintaks JIT Tailwind */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-[#113F67] p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-[76px] w-full bg-white shadow-xl md:hidden 
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ zIndex: 40 }} 
      >
        <ul className="flex flex-col space-y-1 p-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className={`
                  block w-full px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg
                  ${isActive(link.href)
                    ? 'bg-emerald-100 text-emerald-800 font-bold'
                    // PERBAIKAN: Menggunakan sintaks JIT Tailwind
                    : `text-gray-700 hover:bg-blue-50 hover:text-[#113F67]`
                  }
                `}
                onClick={() => {
                  setCurrentPath(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center space-x-2 w-full px-4 py-3 ${instagramButtonClasses}`}
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}