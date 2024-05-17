import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TablePagination from "../../Common/Table_Pagination";
import "../../../Styles/app.css";
import { BsSearch } from "react-icons/bs";

const initialData = [
    {
        id: 1,
        avaiable_on: "Monday",
        avaiable_from: "14:30 PM",
        avaiable_to: "15:00 PM",
    },
    {
        id: 2,
        avaiable_on: "Wednesday",
        avaiable_from: "14:30 PM",
        avaiable_to: "15:00 PM",
    },
];


const Schudules = () => {

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
                                <th>AVAILABLE ON</th>
                                <th>AVAILABLE FROM</th>
                                <th> AVAILABLE TO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.avaiable_on}  </td>  
                                    <td>{item.avaiable_from}  </td>  
                                    <td>{item.avaiable_to}  </td>                                      
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
        </div>
    )
}

export default Schudules