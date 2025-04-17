// src/pages/Program.js
import React, { useState } from "react";
import ImageCard from "../components/imageCard";

const images = [
  // Replace with Cloudinary URLs for the "Program" section
  "https://res.cloudinary.com/your-cloud-name/image/upload/v1/program1.jpg",
  "https://res.cloudinary.com/your-cloud-name/image/upload/v1/program2.jpg",
  // ...up to 12 or more
];

const Program = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="min-h-screen p-4 bg-white text-center">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Program</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentImages.map((url, index) => (
          <ImageCard key={index} imageUrl={url} />
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Program;
