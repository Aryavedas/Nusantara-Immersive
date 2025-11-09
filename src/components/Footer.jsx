import React from "react";
// Ikon untuk media sosial
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    // Latar belakang putih
    // Diberi 'border-t' (border top) yang halus untuk memisahkannya
    // dari konten di atasnya.
    <footer className="w-full bg-white border-t border-gray-200">
      
      {/* Container max-w-7xl agar konsisten */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Bagian Atas Footer: Logo & Navigasi */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          {/* Kolom Kiri: Logo & Slogan */}
          <div className="flex-1 max-w-sm">
            {/* Logo (Sama seperti Header) */}
            <a 
              href="/" 
              className="text-3xl font-extrabold text-[#113F67] tracking-tight"
            >
              Nusantara<span className="text-emerald-600">Immersive</span>
            </a>
            
            <p className="mt-4 text-base text-gray-600">
              Menjelajahi kekayaan budaya Indonesia secara interaktif dan imersif 
              melalui teknologi Virtual Reality.
            </p>
          </div>
          
          {/* Kolom Kanan: Link Navigasi & Media Sosial (responsif) */}
          <div className="flex-1 flex flex-col sm:flex-row 
                          justify-start lg:justify-end 
                          gap-10 sm:gap-16">
            
            {/* Grup Link 1: Produk */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Produk
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                    VR Borobudur
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                    VR Pulau Komodo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                    VR Museum Batik
                  </a>
                </li>
              </ul>
            </div>

            {/* Grup Link 2: Perusahaan */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Perusahaan
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bagian Bawah Footer: Copyright & Socials */}
        <div className="mt-12 pt-8 border-t border-gray-200 
                        flex flex-col sm:flex-row 
                        justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-base text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Nusantara Immersive. All rights reserved.
          </p>

          {/* Ikon Media Sosial */}
          <div className="flex space-x-5">
            <a 
              href="#" 
              aria-label="Facebook"
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-300"
            >
              <FaFacebook size={22} />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-300"
            >
              <FaTwitter size={22} />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}