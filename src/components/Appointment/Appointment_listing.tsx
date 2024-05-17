import React, { useState, useEffect } from "react";
import AdminTable from '../../components/Common/AdminTable';
import '../../Styles/app.css';
import { BsCalendarCheck, BsSearch, BsFilter } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import Table from "react-bootstrap/Table";
import TablePagination from "../Common/Table_Pagination";
import FilterDropdown from "./FilterDropdown";

// Initial data for appointments
const initialData = [
  {
    id: 1,
    patient: {
      name: "John Doe",
      email: "john@example.com",
      image: "/image/nav_img.svg"
    },
    doctor: {
      name: "Dr. Jane Smith",
      email: "jane@example.com",
      department: "Cardiology",
      image: "/path/to/doctor/image.jpg"
    },
    date: "2024-05-10",
    status: "Confirm"
  },
  // ... other entries
];

// Function to format the date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  return date.toLocaleDateString('en-US', options);
};

// Function to get CSS class based on status
const getStatusClass = (status: string): string => {
  switch (status) {
    case "Confirm":
      return "badge bg-light-success";
    case "Inactive":
      return "badge bg-light-danger";
    default:
      return "badge bg-light-gray";
  }
};

const Appointment_listing = () => {
  // State variables for pagination, data, and filter dropdown
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

  // Handle filtering of data
  const handleFilter = (filterValues: any) => {
    const filteredData = data.filter((item) => {
      return item.patient.name.toLowerCase().includes(filterValues.patientName.toLowerCase());
    });

    setData(filteredData);
    setCurrentPage(1);
  };

  // Toggle filter dropdown visibility
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(true);
  };

  // Close the filter dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && !event.target.closest('.dropdown')) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Search and filter section */}
      <div className='d-lg-flex justify-content-between align-items-center mb-sm-7 mb-4'>
        <div className="body_search">
          <BsSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className='d-flex justify-content-end flex-wrap'>
          <a href="#" className="btn btn-icon btn-primary me-2"><BsCalendarCheck /></a>
          <div className={`btn btn-icon btn-primary me-2 dropdown ${isFilterDropdownOpen ? 'show' : ''}`} onClick={toggleFilterDropdown}>
            <FaFilter />
            <div className={`dropdown-menu dropdown-menu-end ${isFilterDropdownOpen ? 'show' : ''}`} style={{ position: 'absolute', top: '100%', left: '0', width: '100%' }}>
              <FilterDropdown onFilter={handleFilter} />
            </div>
          </div>
          <a data-turbo="false" href="#" className="btn btn-primary">Export to Excel</a>
        </div>
      </div>

      {/* Table section */}
      <div className="table-responsive">
        <Table striped className="admin_table mt-4">
          <thead>
            <tr>
              <th>PATIENT</th>
              <th>DOCTOR</th>
              <th>DOCTOR DEPARTMENT</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="image image-circle image-mini me-3">
                      <a href="#">
                        <div className="table_img">
                          <img src="/image/nav_img.svg" alt="Nav Image" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="#">{item.patient.name}</a>
                      <span>{item.patient.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="image image-circle image-mini me-3">
                      <a href="#">
                        <div className="table_img">
                          <img src="/image/nav_img.svg" alt="Nav Image" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="#">{item.doctor.name}</a>
                      <span>{item.doctor.email}</span>
                    </div>
                  </div>
                </td>
                <td><a href="#">{item.doctor.department}</a></td>
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.date)}
                  </div>
                </td>
                <td>
                  <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination section */}
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

export default Appointment_listing;
