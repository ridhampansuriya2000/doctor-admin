import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { BsPencil } from "react-icons/bs";
import "../../Styles/flag.css";

type CountryCode = string;

const Edit_profile: React.FC = () => {
  const [select, setSelect] = useState<CountryCode>("SE");

  const onSelect = (code: CountryCode) => setSelect(code);

  console.log("SELECT", select);

  const handleEditClick = () => {
    // Trigger click event of the file input when edit button is clicked
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file change event here
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can perform further actions with the selected file
    }
  };

  return (
    <>
      <form action="#">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-sm-7 mb-4">
              <label htmlFor="formInputEmail" className="form-label">
                First Name <span className="required"></span>
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Vatsal"
                id="formInputEmail"
                value={"Vatsal"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-sm-7 mb-4">
              <label htmlFor="formInputEmail" className="form-label">
                Last Name <span className="required"></span>
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Sakariya"
                id="formInputEmail"
                value={"Sakariya"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-sm-7 mb-4">
              <label htmlFor="formInputEmail" className="form-label">
                Email <span className="required"></span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder=" Vatsal@gamil.com"
                id="formInputEmail"
                value={" Vatsal@gamil.com"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="formInputEmail" className="form-label">
              Phone 
            </label>
            <ReactFlagsSelect
              selected={select}
              onSelect={onSelect}
              searchable={false}
              showSelectedLabel={true}
              className="edit_country"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formInputEmail" className="form-label">
              Profile 
            </label>
            <div className="change_img">
              <img src="/image/nav_img.svg" alt="Nav Image" />
              <button className="edit_button" onClick={handleEditClick}>
                <BsPencil />
              </button>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                className="file_input"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Edit_profile;
