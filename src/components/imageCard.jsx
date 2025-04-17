import React from "react";

const ImageCard = ({ src, alt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default ImageCard;
