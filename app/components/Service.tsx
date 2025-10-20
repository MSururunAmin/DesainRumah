import React from "react";
import { Building, Home, Dices } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-2">Layanan Kami</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Kami menyediakan solusi desain lengkap dari konsep hingga visualisasi
          akhir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Building className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Desain Arsitektur</h4>
            <p className="text-gray-600">
              Perancangan bangunan dari denah, tampak, hingga gambar kerja
              detail.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Home className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Desain Interior</h4>
            <p className="text-gray-600">
              Menciptakan ruang interior yang nyaman, fungsional, dan sesuai
              gaya Anda.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Dices className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Visualisasi 3D</h4>
            <p className="text-gray-600">
              Gambar dan animasi 3D realistis untuk melihat hasil akhir sebelum
              dibangun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
