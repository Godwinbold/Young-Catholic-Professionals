import { useState } from "react";
import divineAuthorities from "../data/divineAuthorities";
import ImageGrid from "../components/imageCard";
import Pagination from "../components/header";

const IMAGES_PER_PAGE = 12;

const DivineAuthorities = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(divineAuthorities.length / IMAGES_PER_PAGE);

  const currentImages = divineAuthorities.slice(
    page * IMAGES_PER_PAGE,
    (page + 1) * IMAGES_PER_PAGE
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Divine Authorities</h2>
      <ImageGrid images={currentImages} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default DivineAuthorities;
