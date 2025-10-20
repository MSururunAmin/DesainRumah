import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[75vh] md:h-[100vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Image/rumah1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Mewujudkan Hunian Impian Anda
        </h2>
        <p className="text-lg md:text-xl max-w-2xl">
          Desain arsitektur dan interior profesional yang fungsional dan
          estetis.
        </p>
        <a
          href="#portfolio"
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Lihat Proyek Kami
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
