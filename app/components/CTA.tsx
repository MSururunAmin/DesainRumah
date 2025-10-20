import React from "react";

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="bg-blue-600 text-white">
      <div className="container mx-auto text-center py-20 px-4">
        <h3 className="text-3xl font-bold mb-4">Siap Memulai Proyek Anda?</h3>
        <p className="max-w-xl mx-auto mb-8">
          Hubungi kami untuk konsultasi gratis dan mari kita wujudkan rumah
          impian Anda bersama.
        </p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20ArchiHome,%20saya%20tertarik%20untuk%20konsultasi%20desain%20rumah."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
        >
          Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
