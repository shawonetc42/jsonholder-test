"use client"; // Mark this component as a client component
import React from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13+

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?page=${page}`); // Update the URL with the new page number
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
