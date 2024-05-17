import React, {useEffect , useState} from 'react'
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import "../../../Styles/app.css";
import { BsSearch } from "react-icons/bs";

const initialData = [
    {
      id: 1,
      bill_id : 1,     
      amount: "$300",
      bill_date: "2024-05-10",
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
  

const Bills = () => {

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
  
    // const handleFilter = (filterValues: any) => {
    //   // Filter the data based on the filterValues
    //   const filteredData = data.filter((item) => {
    //     return item.doctor
    //       .toLowerCase()
    //       .includes(filterValues.patientName.toLowerCase());
    //   });
  
    //   // Update the state with the filtered data
    //   setData(filteredData);
    //   setCurrentPage(1);
    // };
  
    const toggleFilterDropdown = () => {
      setIsFilterDropdownOpen(true);
    };
  

  

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
              <th>BILL ID</th>
              <th>BILL DATE</th>
              <th> AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={item.bill_id}>   
                <td>
                    {item.amount}
                </td>           
                <td>
                  <div className="badge bg-light-info">
                    {formatDate(item.bill_date)}
                  </div>
                </td>
                <td> {item.amount}</td>              
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

export default Bills