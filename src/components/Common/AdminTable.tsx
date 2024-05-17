import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "./Table_Pagination";
import "../../Styles/app.css";

const data = [
  { id: 1, name: "John Doe", specialist: "Cardiology", status: "Active" },
  { id: 2, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
  { id: 3, name: "John Doe", specialist: "Cardiology", status: "Active" },
  { id: 4, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
  { id: 5, name: "John Doe", specialist: "Cardiology", status: "Active" },
  { id: 6, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
  { id: 7, name: "John Doe", specialist: "Cardiology", status: "Active" },
  { id: 8, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
  { id: 9, name: "Jane Smith", specialist: "Neurology", status: "Active" },
  { id: 10, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
  { id: 11, name: "John Doe", specialist: "Cardiology", status: "Active" },
  { id: 12, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
  { id: 13, name: "John Doe", specialist: "Cardiology", status: "Active" },
  { id: 14, name: "Jane Smith", specialist: "Neurology", status: "Inactive" },
];

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

const AdminTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };
  return (
    <div>
       <div className="table-responsive">
      <Table striped className="admin_table mt-4">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>SPECIALIST</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="image image-circle image-mini me-3">
                    <a
                      href={`https://hms-saas.infyom.com/employee/doctor/${item.id}`}
                    >
                      <div className="table_img">
                        <img src="/image/nav_img.svg" alt="Nav Image" />
                      </div>
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-decoration-none mb-1"
                    >
                      {item.name}
                    </a>
                    <span>{item.name}</span>
                  </div>
                </div>
              </td>
              <td>{item.specialist}</td>
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

export default AdminTable;
