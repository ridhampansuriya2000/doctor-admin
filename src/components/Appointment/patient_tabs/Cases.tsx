import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import "../../../Styles/app.css";
import { BsSearch } from "react-icons/bs";

const initialData = [
  {
    id: 1,
    caseId: "3KRC3BG4",
    doctor: {
      name: "Dr. Jane Smith",
      email: "jane@example.com",
      image: "/path/to/doctor/image.jpg",
    },
    date: "2024-05-10",
    
    patient: {
      name: "John Doe",
      email: "john@example.com",
      image: "",
      caseId: "3KRC3BG4",
      caseDate: "22nd Apr, 2024",
      caseFee: "$20.00",
      caseStatus: "Active",
      caseIdInfo: "info@kush.co.tz",
    },
    status: "Active",
    fee: "$200",
  },
  {
    id: 2,
    caseId: "XJITEHXE",
    doctor: {
      name: "Dr. Jane Smith",
      email: "jane@example.com",
      image: "/path/to/doctor/image.jpg",
    },
    date: "2024-05-10",
    
    patient: {
      name: "Akoth Lucy",
      email: "info@kush.co.tz",
      image: "/image/nav_img.svg",
      caseId: "XJITEHXE",
      caseDate: "12th Apr, 2024",
      caseFee: "$200.00",
      caseStatus: "Active",
      caseIdInfo: "info@kush.co.tz",
    },
    status: "Active",
    fee:" $300",
  },
  // Add more data objects as needed
];

const formatDate = (dateString: string) => {
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

const getStatusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "badge bg-light-success";
    case "Inactive":
      return "badge bg-light-danger";
    default:
      return "badge bg-light-gray";
  }
};

const Cases = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  const handleFilter = (filterValues: any) => {
    // Filter the data based on the filterValues
    const filteredData = data.filter((item) => {
      // Add your filtering logic here
      // For example, filter by patient name
      return item.patient.name.toLowerCase().includes(filterValues.patientName.toLowerCase());
    });

    // Update the state with the filtered data
    setData(filteredData);
    setCurrentPage(1);
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && !event.target.closest(".dropdown")) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
            <th>CASE ID</th>
            <th>DOCTOR</th>
            <th>DATE</th>
            <th>FEE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="badge bg-light-info">
                    {item.caseId}</div>
                </div>
              </td>
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
                    <a href="#">{item.doctor.name}</a>
                    <span>{item.doctor.email}</span>
                  </div>
                </div>
              </td>
             
              <td>
                <div className="badge bg-light-info">
                  {formatDate(item.date)}
                </div>
              </td>             
              <td>
                <div className="">
                  {(item.fee)}
                </div>
              </td>
              <td>
                <span className={getStatusClass(item.status)}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
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

export default Cases;