import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Form } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { BsCalendarCheck, BsSearch, BsFilter } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import DeleteModal from "../../Common/DeleteModal";

// Initial data for hospitals
const initialData = [
  {
    id: 1,
    hospital: {
      name: "Zonke",
      email: "cimolli.jozi@gmail.com",
      image: "/path/to/doctor/image.jpg",
      slug: "zonke",
      type: "N/A",
    },
    date: "2024-05-10",
    city: "N/A",
    impersonate: "Impersonate",
    status: false,
    emailVerified: true,
  },
  {
    id: 2,
    hospital: {
      name: "Zoe Keith",
      email: "tawiwifyn@mailinator.com",
      image: "/path/to/doctor/image.jpg",
      slug: "sodewyt",
      type: "N/A",
    },
    date: "2024-05-10",
    city: "N/A",
    impersonate: "Impersonate",
    status: false,
    emailVerified: false,
  },
];

// Function to format the date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleDateString("en-US", options);
};

const Hospital_Listing = () => {
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

  // Toggle switch
  const handleStatusToggle = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

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
            <div
              className={`btn btn-icon btn-primary me-2 dropdown ${
                isFilterDropdownOpen ? "show" : ""
              }`}
              onClick={toggleFilterDropdown}
            >
              <FaFilter />
            </div>
            <a data-turbo="false" href="#" className="btn btn-primary">
              Add New Hospital
            </a>
          </div>
        </div>
        {/* Table Section */}
        <div className="table-responsive">
          <Table striped className="admin_table mt-4">
            <thead>
              <tr>
                <th>HOSPITAL</th>
                <th>HOSPITAL SLUG</th>
                <th>HOSPITAL TYPE</th>
                <th>CITY</th>
                <th>CREATED ON</th>
                <th>STATUS</th>
                <th>IMPERSONATE</th>
                <th>EMAIL VERIFIED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {displayedItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="image image-circle image-mini me-3">
                        <a href="#">
                          <div className="table_img">
                            {/* <img src={item.doctor.image} alt="Nav Image" /> */}
                            <img src="/image/nav_img.svg" alt="Nav Image" />
                          </div>
                        </a>
                      </div>

                      <div className="d-flex flex-column">
                        <a href="#">{item.hospital.name}</a>
                        <span>{item.hospital.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#">
                      {item.hospital.slug} <FaArrowUpRightFromSquare />
                    </a>
                  </td>
                  <td>
                    <div>{item.hospital.type}</div>
                  </td>
                  <td>
                    <div>{item.city}</div>
                  </td>
                  <td>
                    <div className="badge bg-light-info">
                      {formatDate(item.date)}
                    </div>
                  </td>
                  <td>
                    <Form>
                      <Form.Check
                        type="switch"
                        id={`custom-switch-${item.id}`}
                        checked={item.status}
                        onChange={() => handleStatusToggle(item.id)}
                      />
                    </Form>
                  </td>
                  <td>
                    <div>
                      <a
                        href="#"
                        className="btn btn-sm btn-primary user-hospital-impersonate"
                      >
                        Impersonate
                      </a>
                    </div>
                  </td>
                  <td>
                    <Form>
                      <Form.Check
                        type="switch"
                        id={`custom-switch-email-verified-${item.id}`}
                        checked={item.emailVerified}
                        disabled
                      />
                    </Form>
                  </td>
                  <td>
                    <div className="action_icn">
                      <span className="edit">
                        <FaEdit />
                      </span>
                      <span className="delete" onClick={handleDeleteClick}>
                        <FaTrash />
                      </span>
                      <span className="view">
                        <FaEye />
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

export default Hospital_Listing;
