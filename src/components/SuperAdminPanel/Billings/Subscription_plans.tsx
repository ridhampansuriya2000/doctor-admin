import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { BsCalendarCheck, BsSearch, BsFilter } from "react-icons/bs";
import DeleteModal from "../../Common/DeleteModal";

const initialData = [
  {
    id: 1,
    name: "Enterprise",
    price: "INR49 ",
    frequency: "Month",
    trial_days: "7 Days",
    active_plans: "30",
    status: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "$999.00",
    frequency: "Month",
    trial_days: "7 Days",
    active_plans: "30",
    status: true,
  },
  {
    id: 3,
    name: "Professional",
    price: "$999.00",
    frequency: "Month",
    trial_days: "7 Days",
    active_plans: "30",
    status: false,
  },
];

const Subscription_plans = () => {
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
  const [defaultPlan, setDefaultPlan] = useState<{
    id: number;
    name: string;
  } | null>(null);

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

  // Toggle status
  const handleStatusToggle = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, status: !item.status }
          : { ...item, status: false }
      )
    );
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
      {/* Table Section */}
      <div className="table-responsive">
        <Table striped className="admin_table mt-4">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRICE</th>
              <th>FREQUENCY</th>
              <th>TRIAL DAYS</th>
              <th>ACTIVE PLANS</th>
              <th>MAKE DEFAULT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.frequency}</td>
                <td>{item.trial_days}</td>
                <td>
                  <span
                    className={`bg-light-primary badge-circle ${
                      defaultPlan?.id === item.id ? "default-plan" : ""
                    }`}
                  >
                    {item.active_plans}
                  </span>
                </td>
                <td>
                  {item.status ? (
                    <span className="default-plan-text">Default Plan</span>
                  ) : (
                    <Form>
                      <Form.Check
                        type="switch"
                        id={`custom-switch-${item.id}`}
                        checked={item.status}
                        onChange={() => handleStatusToggle(item.id)}
                      />
                    </Form>
                  )}
                </td>
                <td>
                  <div className="action_icn">
                  <span className="view">
                      <FaEye />
                    </span>
                    <span className="edit">
                      <FaEdit />
                    </span>
                    <span className="delete" onClick={handleDeleteClick}>
                      <FaTrash />
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
    </div>
  );
};

export default Subscription_plans;
