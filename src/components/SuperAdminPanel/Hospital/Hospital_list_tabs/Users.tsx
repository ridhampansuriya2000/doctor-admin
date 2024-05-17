import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../../Common/Table_Pagination";
import { BsCalendarCheck, BsSearch, BsFilter } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

const initialData = [
  {
    id: 1,
    users: {
      name: "Ken Innocent",
      email: "kensleyinnoce@gmail.com",
      image: "/path/to/doctor/image.jpg",     
    },
    role: "",
    phone: "1204510785",
    status: "Active",
    date: "2024-05-10",
    impersonate: "Impersonate",
  },
  {
    id: 2,
    users: {
      name: "Ken Innocent",
      email: "kensleyinnoce@gmail.com",
      image: "/path/to/doctor/image.jpg",     
    },
    role: "",
    phone: "1204510785",
    status: "Active",
    date: "2024-05-10",
    impersonate: "Impersonate",
  },
];
// Function to get CSS class based on status
const getStatusClass = (status: string): string => {
    switch (status) {
      case "Active":
        return "badge bg-light-success";
      case "Inactive":
        return "badge bg-light-danger";
      default:
        return "badge bg-light-gray";
    }
  };
const Users = () => {
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
        
        </div>
        
      </div>
      <div className="table-responsive">
            <Table striped className="admin_table mt-4">
              <thead>
                <tr>
                  <th>Users</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>Status </th>
                  <th>Created On</th>
                  <th>Impersonate </th>
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
                          <a href="#">{item.users.name}</a>
                          <span>{item.users.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#">
                        {item.role} 
                      </a>
                    </td>
                    <td>
                      <div>{item.phone}</div>
                    </td>
                    <td>
                    <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span>
                    </td>
                    <td>
                      <div className="badge bg-light-info">
                        {formatDate(item.date)}
                      </div>
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

export default Users;
