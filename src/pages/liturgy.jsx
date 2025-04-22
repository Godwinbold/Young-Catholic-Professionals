import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for back navigation
import liturgyData from "../data/liturgy";

const Liturgy = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const navigate = useNavigate(); // ✅ Hook for going back

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = liturgyData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(liturgyData.length / cardsPerPage);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white p-4 relative">
      {/* Top Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
      >
        Back
      </button>

      <h1 className="text-xl font-bold mb-6 text-center">Liturgy</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentCards.map((url, index) => (
          <div key={index} className="bg-white rounded shadow p-2">
            <img src={url} alt={`Liturgy ${index + 1}`} className="w-full h-auto rounded" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
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

export default Liturgy;
