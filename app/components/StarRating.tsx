// src/components/StarRating.tsx

import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        // Menentukan apakah bintang harus penuh atau kosong
        if (starValue <= rating) {
          // Bintang Penuh
          return (
            <Star
              key={index}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
            />
          );
        } else if (hasHalfStar && starValue === Math.ceil(rating)) {
          // Bintang Setengah (kita gunakan trik gradien)
          return (
            <div key={index} className="relative">
              <Star className="w-5 h-5 text-gray-300" fill="currentColor" />
              <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              </div>
            </div>
          );
        } else {
          // Bintang Kosong
          return (
            <Star
              key={index}
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
