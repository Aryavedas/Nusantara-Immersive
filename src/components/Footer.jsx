import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const FOOTER_LINKS = [
    // {
    //     title: "Produk",
    //     links: [
    //         { name: "VR Borobudur", href: "#" },
    //         { name: "VR Pulau Komodo", href: "#" },
    //         { name: "VR Museum Batik", href: "#" },
    //     ],
    // },
    {
        title: "Perusahaan",
        links: [
            { name: "Tentang Kami", href: "#" },
            { name: "Hubungi Kami", href: "https://wa.me/6285156010707?text=Halo%20saya%20ingin%20bertanya" },
        ],
    },
];

const SOCIAL_LINKS = [
    // { icon: FaFacebook, label: "Facebook", href: "#" },
    // { icon: FaInstagram, label: "Instagram", href: "#" },
    // { icon: FaTwitter, label: "Twitter", href: "#" },
    // { icon: FaLinkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-1 max-w-sm">
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
          
          <div className="flex-1 flex flex-col sm:flex-row justify-start lg:justify-end gap-10 sm:gap-16">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base text-gray-500 text-center sm:text-left">
            © {currentYear} Nusantara Immersive. All rights reserved.
          </p>
          <div className="flex space-x-5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.label}
                  href={social.href} 
                  aria-label={social.label}
                  className="text-gray-500 hover:text-emerald-600 transition-colors duration-300"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}