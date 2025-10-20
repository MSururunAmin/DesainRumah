// src/components/FAQ.tsx
import React from "react";
import FAQItem from "./FAQitem"; // <-- PERUBAHAN DI SINI

const faqData = [
  {
    question: "Berapa lama proses desain biasanya berlangsung?",
    answer:
      "Proses desain biasanya memakan waktu antara 4 hingga 8 minggu, tergantung pada kompleksitas proyek dan kecepatan feedback dari klien. Kami akan memberikan timeline yang lebih detail setelah konsultasi awal.",
  },
  {
    question: "Apa saja yang saya dapatkan di akhir proses desain?",
    answer:
      "Anda akan menerima satu set lengkap gambar kerja, termasuk denah, tampak, potongan, detail arsitektur, rencana MEP (Mekanikal, Elektrikal, Plumbing), serta visualisasi 3D render yang realistis.",
  },
  {
    question: "Apakah ArchiHome juga melayani jasa pembangunan?",
    answer:
      "Fokus utama kami adalah pada jasa desain arsitektur dan interior. Namun, kami memiliki jaringan kontraktor rekanan yang terpercaya dan dapat memberikan rekomendasi serta membantu mengawasi proses pembangunan jika diperlukan.",
  },
  {
    question: "Bagaimana jika saya ingin melakukan revisi desain?",
    answer:
      "Kami menyediakan beberapa sesi revisi pada setiap tahap desain (konsep, pengembangan, dan detail). Kami percaya komunikasi yang baik adalah kunci, jadi jangan ragu untuk menyampaikan masukan Anda agar hasilnya sesuai impian.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">Pertanyaan Umum (FAQ)</h3>
          <p className="text-gray-600 mt-2">
            Jawaban untuk beberapa pertanyaan yang paling sering diajukan oleh
            klien kami.
          </p>
        </div>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
