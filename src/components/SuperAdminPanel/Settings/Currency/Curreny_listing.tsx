import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../../Common/Table_Pagination";
import DeleteModal from "../../../Common/DeleteModal";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { BsCalendarCheck, BsSearch, BsFilter } from "react-icons/bs";
import Table_modal from "../../../Common/Table_modal";

const initialData = [
  {
    id: 1,
    name: "Indian Rupees",
    icon: "Rs",
    code: "LKR",
  },
  {
    id: 2,
    name: "West African CFA franc",
    icon: "INR",
    code: "INR",
  },
];

const Curreny_listing = () => {
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
        <div className="d-flex justify-content-end flex-wrap">
          <a data-turbo="false" href="#" className="btn btn-primary">
            {/* <Table_modal
              modalTitle="New Hospital Type"
              modalContent={<Add_hospital_type />}
              modal_class="modal-md"
              button_name={"New Hospital Type"}
            /> */}
          </a>
        </div>
      </div>
      <div className="table-responsive">
        <Table striped className="admin_table mt-4">
          <thead>
            <tr>
              <th>CURRENCY NAME</th>
              <th>CURRENCY ICON</th>
              <th>CURRENCY CODE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.icon}</td>
                <td>{item.code}</td>
                <td>
                  <div className="action_icn">
                    <span className="edit">
                      {/* <Table_modal
                        icon={<FaEdit />}
                        modalTitle="Edit Hospital Type"
                        modalContent={<Edit_hospital_type />}
                        modal_class="modal-md"
                        button_name={""}
                      /> */}
                      <FaEdit/>
                    </span>
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
  );
};

export default Curreny_listing;
