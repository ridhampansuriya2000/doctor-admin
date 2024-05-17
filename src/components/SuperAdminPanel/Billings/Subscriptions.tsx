import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import { FaFilter,FaEdit, FaEye } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

// Initial data for Subscriptions
const initialData = [
  {
    id: 1,
    hospital: {
      name: "SIMS Hospital",
    },
    planmame: "Professional",
    amount: "$999.00",
    date: {
      start: "2024-05-16",
      end: "2024-05-23",
    },
    frequency: "Year",
    status: "Active",
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
const getStatusClass = (status: string): string => {
    switch (status) {
      case "Active":
        return "badge bg-light-success";
      case "Deactive":
        return "badge bg-light-danger";
      default:
        return "badge bg-light-gray";
    }
  };
  // Function to get CSS class based on status
  const getFrequencyClass = (frequency: string): string => {
    switch (frequency) {
      case "Month":
        return "badge bg-light-success";
      case "Year":
        return "badge bg-light-danger";
      default:
        return "badge bg-light-gray";
    }
  };
  
const Subscriptions = () => {
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


  return <div>
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
              <th>PLAN NAME</th>
              <th>AMOUNT</th>
              <th>START DATE</th>
              <th>EXPIRES ON</th>
              <th>FREQUENCY</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.hospital.name}</td>
                <td>{item.planmame}</td>
                <td>{item.amount}</td>
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.date.start)}
                  </div>
                </td>
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.date.end)}
                  </div>
                </td>
                <td>
                  <span className={getFrequencyClass(item.frequency)}>
                    {item.frequency}
                  </span>
                </td>           
             
                    
                <td> <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span></td>
                  <td>
                  <div className="action_icn">
                  <span className="view">
                      <FaEye />
                    </span>
                    <span className="edit">
                      <FaEdit />
                    </span>                 
                  
                  </div>
                </td>
             
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
  </div>;
};

export default Subscriptions;
