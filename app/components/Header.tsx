import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">ArchiHome</h1>
        <nav className="hidden md:flex space-x-10">
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Layanan
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Portofolio
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Kontak
          </a>
        </nav>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
};

export default Header;
