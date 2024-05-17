import React from "react";
import Pagination from "react-bootstrap/Pagination";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  startIndex,
  endIndex,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    onItemsPerPageChange(newItemsPerPage);
  };

  return (
    <div className="pagination_parent d-flex align-items-center flex-xl-row flex-column mb-5 mt-3">
      <div className="pagination_result d-flex align-items-center flex-xl-row flex-column mt-3">
        <div className="me-2 d-flex">
          <span className="me-3 text-gray-600 fs-5 fs-xl-6">Show</span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="form-select form-select-arrow"
            style={{ appearance: "auto", paddingRight: "1rem" }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="results_info">
          Showing <b>{startIndex + 1}</b> to{" "}
          <b>{endIndex > totalItems ? totalItems : endIndex}</b> of <b>{totalItems}{" "}</b>
          results
        </div>
      </div>
      <Pagination className="mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default TablePagination;
