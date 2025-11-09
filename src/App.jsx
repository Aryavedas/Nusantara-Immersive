import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";

// Import halaman
import Home from "./pages/Home";
import About from "./pages/About";
import Download from "./pages/Download";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas setiap kali path berubah
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // bisa "auto" jika tidak mau animasi
    });
  }, [pathname]);

  return null; // Tidak merender elemen apa pun
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			
			<main className="">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/download" element={<Download />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
