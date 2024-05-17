import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import { FaFilter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import FilterDropdown from "../../Appointment/FilterDropdown";
// Initial data for transaction
const initialData = [
  {
    id: 1,
    hospital: {
      name: "SIMS Hospital",
    },
    payment: "Cash",
    amount: "$999.00",
    date: "2024-05-23",
    payment_status: "Unpaid",
    payment_approval: "Approved",
  },
  {
    id: 2,
    hospital: {
      name: "City Hospital N/A",
    },
    payment: "PhonePe",
    amount: "$584.00",
    date: "2024-05-23",
    payment_status: "Paid",
    payment_approval: "Disapprove",
  },
  {
    id: 3,
    hospital: {
      name: "SIMS Hospital",
    },
    payment: "FlutterWave",
    amount: "$999.00",
    date: "2024-05-23",
    payment_status: "Paid",
    payment_approval: "Approved",
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

// Function to get CSS class based on status
const getStatusClass = (payment_status: string): string => {
  switch (payment_status) {
    case "Paid":
      return "badge bg-light-success";
    case "Unpaid":
      return "badge bg-light-danger";
    default:
      return "badge bg-light-gray";
  }
};
// Function to get CSS class based on status
const getPaymetApproveClass = (payment_approval: string): string => {
  switch (payment_approval) {
    case "Approved":
      return "badge bg-light-success";
    case "Disapprove":
      return "badge bg-light-danger";
    default:
      return "badge bg-light-gray";
  }
};
// Function to get CSS class based on PAYMENT TYPE
const getPaymentTypeClass = (payment: string): string => {
  switch (payment) {
    case "Cash":
      return "badge bg-light-primary";
    case "PhonePe":
      return "badge bg-light-success";
    case "FlutterWave":
      return "badge bg-light-info";
    default:
      return "badge bg-light-gray";
  }
};

const Transactions = () => {
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

  return (
    <div>
      {/* Search and filter section */}
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
            {/* <div className={`dropdown-menu dropdown-menu-end ${isFilterDropdownOpen ? 'show' : ''}`} style={{ position: 'absolute', top: '100%', left: '0', width: '100%' }}>
              <FilterDropdown onFilter={handleFilter}/>
            </div> */}
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="table-responsive">
        <Table striped className="admin_table mt-4">
          <thead>
            <tr>
              <th>HOSPITAL NAME</th>
              <th>PAYMENTS</th>
              <th>AMOUNT</th>
              <th>TRANSACTION DATE</th>
              <th>PAYMENT APPROVED</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.hospital.name}</td>
                <td>
                  <span className={getPaymentTypeClass(item.payment)}>
                    {item.payment}
                  </span>
                </td>
                <td>
                  <div>{item.amount}</div>
                </td>
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.date)}
                  </div>
                </td>
                <td>
                <span className={getPaymetApproveClass(item.payment_approval)}>
                    {item.payment_approval}
                    </span>
                    </td>
                    
                <td> <span className={getStatusClass(item.payment_status)}>
                    {item.payment_status}
                  </span></td>
             
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

export default Transactions;
