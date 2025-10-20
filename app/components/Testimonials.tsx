// src/components/Testimonials.tsx

import React from "react";
import StarRating from "./StarRating"; // Import komponen bintang kita
import Image from "next/image";

// Data testimoni dummy, ganti dengan data asli Anda
const testimonialsData = [
  {
    id: 1,
    name: "Budi Santoso",
    title: "Pemilik Rumah, Semarang",
    quote:
      "Hasilnya melebihi ekspektasi! Tim ArchiHome sangat profesional dan detail. Rumah impian kami benar-benar terwujud.",
    rating: 5,
    avatar: "/Image/anime1.jpeg", // Siapkan gambar avatar di /public/images
  },
  {
    id: 2,
    name: "Citra Lestari",
    title: "Pengusaha Kafe",
    quote:
      "Desain interior kafenya keren banget! Pengunjung jadi betah dan omzet meningkat. Prosesnya juga cepat dan komunikatif.",
    rating: 4.5,
    avatar: "/Image/anime1.jpeg",
  },
  {
    id: 3,
    name: "Ahmad Yudha",
    title: "Keluarga Muda",
    quote:
      "Sangat direkomendasikan. Mereka bisa menerjemahkan keinginan kami yang abstrak menjadi desain yang fungsional dan indah.",
    rating: 5,
    avatar: "/Image/anime1.jpeg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-2">Apa Kata Klien Kami</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Kepercayaan dan kepuasan klien adalah prioritas utama kami.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg text-left flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <StarRating rating={testimonial.rating} className="mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
