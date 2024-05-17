import React, { useState, useEffect } from "react";
import '../../Styles/app.css';
import { BsCalendarCheck, BsSearch, BsFilter } from 'react-icons/bs';
import { FaFilter, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
// import FilterDropdown from "./FilterDropdown";
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DeleteModal from '../../Common/DeleteModal';
const initialData = [
  {
    id: 1,
    admission_id: "B7ORRJCU",
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
    adminssion_date: "2024-05-10",
    discharge_date: "N/A",
    package: "Echo",
    insurance: "N/A",
    policy_no: "Dd",

  },
  {
    id: 2,
    admission_id: "B7ORRJCU",
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
    adminssion_date: "2024-05-10",
    discharge_date: "N/A",
    package: "Echo",
    insurance: "N/A",
    policy_no: "Dd",

  },


];
const formatDate = (dateString: string) => {
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

const getStatusClass = (status: string) => {
  switch (status) {
    case "Confirm":
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
      if (event.target instanceof HTMLElement && !event.target.closest('.dropdown')) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [checked, setChecked] = useState(false);

  const handleSwitchToggle = () => {
    setChecked(!checked);
  };

  // delete modal 
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
      <div className='d-lg-flex justify-content-between align-items-center mb-sm-7 mb-4'>
        <div className="body_search">
          <BsSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className='d-flex justify-content-end flex-wrap'>
          <a href="#" className="btn btn-icon btn-primary me-2"><FaFilter /></a>
          {/* <div className={`btn btn-icon btn-primary me-2 dropdown ${isFilterDropdownOpen ? 'show' : ''}`} onClick={toggleFilterDropdown}>
            <FaFilter />
            <div className={`dropdown-menu dropdown-menu-end ${isFilterDropdownOpen ? 'show' : ''}`} style={{ position: 'absolute', top: '100%', left: '0', width: '100%' }}>
              <FilterDropdown onFilter={handleFilter}/>
            </div>
          </div> */}
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">New Patient Admission</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Export to Axcel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* {isFilterDropdownOpen && <FilterDropdown onFilter={handleFilter}/>} */}
      <div className="table-responsive scroll">
        <Table striped className="admin_table mt-4">
          <thead>
            <tr>
              <th>ADMISSION ID</th>
              <th>PATIENT</th>
              <th>DOCTOR </th>
              <th>ADMISSION DATE</th>
              <th>DISCHARGE DATE</th>
              <th>PACKAGE</th>
              <th>INSURANCE</th>
              <th>POLICY NO</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={item.id}>
                <td><div  className="badge bg-light-info">{item.admission_id}</div></td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="image image-circle image-mini me-3">
                      <a
                        href="#"
                      >
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
                      <a
                        href="#"
                      >
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
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.adminssion_date)}</div>
                </td>

                <td>{item.discharge_date}</td>
                <td>{item.package}</td>
                <td>{item.insurance}</td>
                <td>{item.policy_no}</td>
                <td>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={checked}
                      onChange={handleSwitchToggle}
                    />
                  </Form>
                </td>
                <td>
                  <div className="action_icn">
                  <span className="edit"><FaEdit /></span>
                  <span className="delete" onClick={handleDeleteClick}><FaTrash /></span>
                  <span className="view"><FaEye /></span>
                  </div>
                </td>
                {showDeleteModal && <DeleteModal onDelete={handleConfirmDelete} onClose={handleCloseDeleteModal} />}
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