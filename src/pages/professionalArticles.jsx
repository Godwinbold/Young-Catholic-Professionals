import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this import
import professionalArticlesData from "../data/professionalArticleData";

const ITEMS_PER_PAGE = 12;

const ProfessionalArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // ✅ useNavigate hook

  const totalPages = Math.ceil(professionalArticlesData.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = professionalArticlesData.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="p-4 min-h-screen bg-gray-50 relative">
      {/* Top Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
      >
        Back
      </button>

      <h2 className="text-xl font-semibold mb-4 text-center">Professional Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((url, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={url} alt={`Article ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
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

export default ProfessionalArticles;
