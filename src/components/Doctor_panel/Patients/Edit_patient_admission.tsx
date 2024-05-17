import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import "../../Styles/app.css";

const Edit_patient_admission = () => {
    const [patient, setPatient] = useState(""); // State for patient selection
    const [packageType, setPackageType] = useState(""); // State for package selection
    const [insurance, setInsurance] = useState(""); // State for insurance selection
    const [bed, setBed] = useState(""); // State for bed selection
    const [admissionDate, setAdmissionDate] = useState<Date | null>(null); // State for admission date
    const [dischargeDate, setDischargeDate] = useState<Date | null>(null); // State for discharge date
    const [checked, setChecked] = useState(false);

    const handleSwitchToggle = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <div>
                <div className='content d-flex flex-column flex-column-fluid pt-7'>
                    <div className="container-fluid">
                        <div className="d-md-flex align-items-center justify-content-between mb-5">
                            <h1 className="mb-0 title_sm">Edit Patient Admission</h1>
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
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formSelectPatient" className="form-label">
                                                        Patient <span className="required"></span>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        value={patient}
                                                        onChange={(e) => setPatient(e.target.value)}
                                                    >
                                                        <option value="">Select Patient</option>
                                                        <option value="patient1">Patient 1</option>
                                                        <option value="patient2">Patient 2</option>
                                                        <option value="patient3">Patient 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formAdmissionDate" className="form-label">
                                                        Admission Date <span className="required"></span>
                                                    </label>
                                                    <DatePicker
                                                        selected={admissionDate}
                                                        onChange={(date) => setAdmissionDate(date)}
                                                        className="form-control"
                                                        id="formAdmissionDate"
                                                        placeholderText='Admission Date'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formDischargeDate" className="form-label">
                                                        Discharge Date
                                                    </label>
                                                    <DatePicker
                                                        selected={dischargeDate}
                                                        onChange={(date) => setDischargeDate(date)}
                                                        className="form-control"
                                                        id="formDischargeDate"
                                                        placeholderText='Discharge Date'
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formPackageType" className="form-label">
                                                        Package Type
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        value={packageType}
                                                        onChange={(e) => setPackageType(e.target.value)}
                                                    >
                                                        <option value="">Select Package</option>
                                                        <option value="package1">Package 1</option>
                                                        <option value="package2">Package 2</option>
                                                        <option value="package3">Package 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInsurance" className="form-label">
                                                        Insurance
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        value={insurance}
                                                        onChange={(e) => setInsurance(e.target.value)}
                                                    >
                                                        <option value="">Select Insurance</option>
                                                        <option value="insurance1">Insurance 1</option>
                                                        <option value="insurance2">Insurance 2</option>
                                                        <option value="insurance3">Insurance 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formBed" className="form-label">
                                                        Bed
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        value={bed}
                                                        onChange={(e) => setBed(e.target.value)}
                                                    >
                                                        <option value="">Select Bed</option>
                                                        <option value="bed1">Bed 1</option>
                                                        <option value="bed2">Bed 2</option>
                                                        <option value="bed3">Bed 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Policy No
                                                    </label>
                                                    <input type="text" className="form-control" name="Policy_no" value={"Dd"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Agent Name
                                                    </label>
                                                    <input type="text" className="form-control" name="agent" value={"Tt"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Guardian Name
                                                    </label>
                                                    <input type="text" className="form-control" name="guardian" value={"Fffgh"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Guardian Relation
                                                    </label>
                                                    <input type="text" className="form-control" name="guardian" value={"Ggh"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Guardian Contact
                                                    </label>
                                                    <input type="text" className="form-control" name="contact" value={"128764356"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Guardian Address
                                                    </label>
                                                    <input type="text" className="form-control" name="address" value={"Ggh"} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-sm-7 mb-4">
                                                    <label htmlFor="formInputEmail" className="form-label">
                                                        Status:
                                                    </label>
                                                    <Form>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            checked={checked}
                                                            onChange={handleSwitchToggle}
                                                        />
                                                    </Form>
                                                </div>
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

export default Edit_patient_admission;
