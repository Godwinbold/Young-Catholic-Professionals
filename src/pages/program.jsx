import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import programImages from "../data/programData"; // ✅ this is the import

const Program = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = programImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(programImages.length / imagesPerPage);

  return (
    <div className="p-6 relative min-h-screen">
      {/* Top Back Icon */}
      <Link
        to="/"
        className="absolute top-4 right-4 text-gray-600 hover:text-blue-600"
        title="Go back"
      >
        <ArrowLeft size={24} />
      </Link>

      <h2 className="text-xl font-semibold mb-4">Program</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((url, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img src={url} alt={`Program ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Bottom Back Icon */}
      <div className="mt-10 flex justify-end">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600"
          title="Back to Home"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Program;
