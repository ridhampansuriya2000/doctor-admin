import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import "../../../Styles/app.css";
import { BsSearch } from "react-icons/bs";
import { Id } from "react-flags-select";

const initialData = [
  {
    id: 1,
    doctor: {
      name: "Dr. Jane Smith",
      email: "jane@example.com",
      image: "/path/to/doctor/image.jpg",
    },
    depatment: "Allergists",
    date: "2024-05-10",
  },
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



const Patient_appointment = () => {
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
              <th>DOCTOR</th>
              <th>DOCTOR DEPARTMENT</th>
              <th> DATE</th>
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
                <td>{item.depatment}</td>
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.date)}
                  </div>
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

export default Patient_appointment;
