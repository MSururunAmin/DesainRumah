// src/components/FAQItem.tsx
"use client"; // This is required for components with interactivity

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 pr-8">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
