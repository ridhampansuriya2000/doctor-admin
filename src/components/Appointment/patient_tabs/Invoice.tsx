import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import "../../../Styles/app.css";
import { BsSearch } from "react-icons/bs";

const initialData = [
  {
    id: 1,
    invoice_id: "DA7MTK",
    date: "2024-05-10",
    status: "Paid",
    amount: "$2,250.00",
  },
  {
    id: 2,
    invoice_id: "AA1UJY",
    date: "2024-05-10",
    status: "Not Paid",
    amount: "$2,250.00",
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

const getStatusClass = (status: string) => {
  switch (status) {
    case "Paid":
      return "badge bg-light-success";
    case "Not Paid":
      return "badge bg-light-danger";
    default:
      return "badge bg-light-gray";
  }
};

const Invoice = () => {
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
              <th>INVOICE ID</th>
              <th>INVOICE DATE</th>
              <th> STATUS</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={item.id}>
                <td>
                <div className="badge bg-light-info">{item.invoice_id} </div></td>
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.date)}
                  </div>
                </td>
                <td>
                <span className={getStatusClass(item.status)}>{item.status}</span>
                </td>
                <td>{item.amount}</td>
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

export default Invoice;
