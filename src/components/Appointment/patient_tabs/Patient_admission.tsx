import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import "../../../Styles/app.css";
import { BsSearch } from "react-icons/bs";

const initialData = [
    {
      id: 1,
      doctor: {
        name: "Dr. Jane Smith",
        email: "jane@example.com",
        image: "/path/to/doctor/image.jpg",
      },
      admission_date: "2024-05-10",
      discharge_date: "2024-05-10",      
  
      status: "Active",
      Action: "",
    }, 
]

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
const Patient_admission = () => {

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

      return item.doctor.name.toLowerCase().includes(filterValues.patientName.toLowerCase());
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
            <th>ADMISSION ID</th>
            <th>DOCTOR</th>
            <th>ADMISSION DATE</th>
            <th>DISCHARGE DATE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">                 
                    {item.id}
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
                  {formatDate(item.admission_date)}
                </div>
              </td>             
              <td>
                <div className="badge bg-light-info">
                  {formatDate(item.discharge_date)}
                </div>
              </td>
              <td>
                <span className={getStatusClass(item.status)}>
                  {item.status}
                </span>
              </td>
              <td>
              {item.Action}
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
  )
}

export default Patient_admission