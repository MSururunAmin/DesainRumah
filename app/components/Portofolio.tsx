// src/components/Portfolio.tsx

import React from "react";
import Image from "next/image";

// Tipe data untuk item portofolio (seperti saran sebelumnya, ini lebih baik)
interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, src: "/Image/rumah1.jpeg", alt: "Desain Rumah Minimalis" },
  { id: 2, src: "/Image/rumah2.jpeg", alt: "Interior Modern" },
  { id: 3, src: "/Image/rumah3.jpeg", alt: "Fasad Klasik" },
  { id: 4, src: "/Image/rumah4.jpeg", alt: "Renovasi Dapur" },
  { id: 5, src: "/Image/rumah5.jpeg", alt: "Taman Belakang" }, // Ganti nama file dan alt sesuai Anda
  { id: 6, src: "/Image/rumah6.jpeg", alt: "Ruang Kerja" }, // Ganti nama file dan alt sesuai Anda
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-2">Portofolio Proyek</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Beberapa karya terbaik yang telah kami selesaikan untuk klien kami.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              {/* Ini adalah container yang mengontrol ukuran gambar */}
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                {" "}
                {/* <--- DIUBAH DI SINI */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill // <--- DIUBAH DI SINI: Gunakan 'fill' agar gambar mengisi container
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200"></div>
              {/* Opsional: Tambahkan info proyek di overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <h4 className="font-bold text-lg">{item.alt}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
