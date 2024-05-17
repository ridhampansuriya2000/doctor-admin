import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import { BsPencil } from "react-icons/bs";
import "../../Styles/app.css";

const Edit_patient = () => {
    const [BloodGp, setBloodGp] = useState(""); 
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null); 
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState(false); 
    const [checked, setChecked] = useState(false);

    const handleSwitchToggle = () => {
        setChecked(!checked);
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };

    const handleStatusChange = () => {
        setStatus(!status);
    };

    const handleEditClick = () => {
        const fileInput = document.getElementById("fileInput");
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    return (
        <div>
            <div>
                <div className='content d-flex flex-column flex-column-fluid pt-7'>
                    <div className="container-fluid">
                        <div className="d-md-flex align-items-center justify-content-between mb-5">
                            <h1 className="mb-0 title_sm">Edit Patient</h1>
                            <div className="text-end mt-4 mt-md-0">
                                <a
                                    href="https://hms-saas.infyom.com/appointments"
                                    className="btn btn-outline-primary"
                                >
                                    Back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap flex-column-fluid">
                    <div className="container-fluid">
                        <div className="d-flex flex-column">
                            <div className="card">
                                <input className="isEdit" name="isEdit" type="hidden" value="1" />
                                <div className="card-body p-12">
                                    <form action="#">
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="firstName" className="form-label">
                                                        First Name <span className="required"></span>
                                                    </label>
                                                    <input type="text" className="form-control" name="firstName" defaultValue={"nery"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="lastName" className="form-label">
                                                        Last Name <span className="required"></span>
                                                    </label>
                                                    <input type="text" className="form-control" name="lastName" defaultValue={"test"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="email" className="form-label">
                                                        Email <span className="required"></span>
                                                    </label>
                                                    <input type="email" className="form-control" name="email" defaultValue={"g@hotmail.com"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="dateOfBirth" className="form-label">
                                                        Date Of Birth <span className="required"></span>
                                                    </label>
                                                    <DatePicker
                                                        selected={dateOfBirth}
                                                        onChange={(date) => setDateOfBirth(date)}
                                                        className="form-control"
                                                        id="dateOfBirth"
                                                        placeholderText='Date of Birth'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="contact" className="form-label">
                                                        Contact
                                                    </label>
                                                    <input type="text" className="form-control" name="contact" defaultValue={"128764356"} />
                                                </div>
                                            </div>
                                            <div className="col-md-3 d-flex align-items-center">
                                                <div className="mb-sm-7 mb-4">
                                                    <label className="form-label">
                                                        Gender:
                                                    </label>
                                                    <div className="form-check d-flex align-items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input me-2"
                                                            name="gender"
                                                            value="male"
                                                            checked={gender === "male"}
                                                            onChange={handleGenderChange}
                                                        />
                                                        <label className="form-check-label me-4" htmlFor="male">Male</label>
                                                        <input
                                                            type="radio"
                                                            className="form-check-input me-2"
                                                            name="gender"
                                                            value="female"
                                                            checked={gender === "female"}
                                                            onChange={handleGenderChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="female">Female</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mb-sm-7 mb-4">
                                                    <label className="form-label">
                                                        Status:
                                                    </label>
                                                    <Form>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            checked={status}
                                                            onChange={handleStatusChange}
                                                        />
                                                    </Form>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="bloodGroup" className="form-label">
                                                        Blood Group
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        value={BloodGp}
                                                        onChange={(e) => setBloodGp(e.target.value)}
                                                        name="bloodGroup"
                                                    >
                                                        <option value="">Select Blood Group</option>
                                                        <option value="A">A</option>
                                                        <option value="A+">A+</option>
                                                        <option value="AB+">AB+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-12 mb-5">
                                                <label htmlFor="insuranceNumber" className="form-label">Insurance Nr.</label>
                                                <textarea className="form-control" placeholder="Insurance Nr." rows={4} name="insuranceNumber" id="insuranceNumber"></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="profile" className="form-label">
                                                    Profile
                                                </label>
                                                <div className="change_img">
                                                    <img src="/image/nav_img.svg" alt="Nav Image" />
                                                    <button className="edit_button" type="button" onClick={handleEditClick}>
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
                                        <hr />
                                        <div className="row mt-5 mb-3">
                                            <div className="col-md-12 mb-3">
                                                <h5>Address Details</h5>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="address1" className="form-label">Address 1:</label>
                                                    <input className="form-control" placeholder="Address 1" name="address1" type="text" id="address1" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="address2" className="form-label">Address 2:</label>
                                                    <input className="form-control" placeholder="Address 2" name="address2" type="text" id="address2" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="city" className="form-label">City:</label>
                                                    <input className="form-control" placeholder="City" name="city" type="text" id="city" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="zip" className="form-label">Zip:</label>
                                                    <input className="form-control" maxLength={6} minLength={6} placeholder="Zip" name="zip" type="text" id="zip" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mt-5 mb-5">
                                            <div className="col-md-12 mb-3">
                                                <h5>Social Details</h5>
                                            </div>
                                            <div className="form-group col-sm-6 mb-5">
                                                <label htmlFor="facebook_url" className="form-label">Facebook URL:</label>
                                                <input className="form-control" placeholder="Facebook URL" name="facebook_url" type="text" id="facebook_url" />
                                            </div>
                                            <div className="form-group col-sm-6 mb-5">
                                                <label htmlFor="twitter_url" className="form-label">Twitter URL:</label>
                                                <input className="form-control" placeholder="Twitter URL" name="twitter_url" type="text" id="twitter_url" />
                                            </div>
                                            <div className="form-group col-sm-6 mb-5">
                                                <label htmlFor="instagram_url" className="form-label">Instagram URL:</label>
                                                <input className="form-control" placeholder="Instagram URL" name="instagram_url" type="text" id="instagram_url" />
                                            </div>
                                            <div className="form-group col-sm-6 mb-5">
                                                <label htmlFor="linkedIn_url" className="form-label">LinkedIn URL:</label>
                                                <input className="form-control" placeholder="LinkedIn URL" name="linkedIn_url" type="text" id="linkedIn_url" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <input className="btn btn-primary me-2" id="saveBtn" type="submit" value="Save" />
                                            <a href="https://hms-saas.infyom.com/patient-admissions" className="btn btn-secondary">Cancel</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit_patient;
