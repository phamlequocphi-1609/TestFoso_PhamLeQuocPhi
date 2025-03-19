import React from "react";

interface PaginateProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 5) pages.push("...");
      const start = Math.max(4, currentPage - 1);
      const end = Math.min(totalPages - 3, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 4) pages.push("...");
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        className={`px-3 py-1 rounded ${
          currentPage === page ? "bg-green-200" : "bg-white"
        } ${typeof page === "string" ? "cursor-default" : ""}`}
        disabled={typeof page === "string"}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-between my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-500 disabled:opacity-50"
      >
        {"<"} Trang trước
      </button>

      <div className="flex space-x-2">{renderPageNumbers()}</div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-500 disabled:opacity-50"
      >
        Trang kế tiếp {">"}
      </button>
    </div>
  );
};

export default Paginate;
