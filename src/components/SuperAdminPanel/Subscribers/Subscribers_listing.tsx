import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import {  FaTrash} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import DeleteModal from "../../Common/DeleteModal";

const initialData = [
    {
      id: 1,
      email: "cityhospital@gmail.com",
    },
    {
      id: 2,
      email: "admin@hms.com",
    },
    {
      id: 3,
      email: "admin@infycrm.com",
    },
    {
        id: 4,
        email: "cityhospital@gmail.com",
      },
  ];

const Subscribers_listing = () => {
    // State variables for pagination and data
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  // Handle page change for pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle items per page change for pagination
  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  // Toggle filter dropdown visibility
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(true);
  };

  // Close the filter dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".dropdown")
      ) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    // Perform delete operation here
    setShowDeleteModal(false);
  };
  return (
    <div>
    {/* Search and Filter Section */}
    <div className="d-lg-flex justify-content-between align-items-center mb-sm-7 mb-4">
      <div className="body_search">
        <BsSearch />
        <input type="text" placeholder="Search" />
      </div>
      
    </div>
    <div className="table-responsive">
      <Table striped className="admin_table mt-4">
        <thead>
          <tr>
            <th>NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.email}</td>
              <td>
                <div className="action_icn">
             
                  <span className="delete" onClick={handleDeleteClick}>
                    <FaTrash />
                  </span>
                </div>
              </td>
              {showDeleteModal && (
                <DeleteModal
                  onDelete={handleConfirmDelete}
                  onClose={handleCloseDeleteModal}
                />
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    {/* Pagination Section */}
    <TablePagination
      currentPage={currentPage}
      totalPages={totalPages}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      startIndex={startIndex}
      endIndex={endIndex}
      onPageChange={handlePageChange}
      onItemsPerPageChange={handleItemsPerPageChange}
    />
  </div>
  )
}

export default Subscribers_listing