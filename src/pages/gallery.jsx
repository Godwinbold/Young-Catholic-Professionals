import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import galleryData from "../data/gallery";

const Gallery = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); 

  const totalPages = Math.ceil(galleryData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = galleryData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 max-w-6xl mx-auto relative">
      {/* Top Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
      >
        Back
      </button>

      <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((url, index) => (
          <div key={index} className="rounded shadow">
            <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-auto rounded" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Bottom Back Button */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Gallery;
