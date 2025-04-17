import React, { useState } from "react";
import imageUrls from "../data/imageUrls"; // Adjust path as needed

const BrochureGallery = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

  const currentImages = imageUrls.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📘 YCP Brochure</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentImages.map((url, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <img
              src={url}
              alt={`Brochure Page ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrochureGallery;
