import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../../Styles/app.css';

interface CustomModalProps {
  modalTitle: string;
  icon: React.ReactNode;
  buttonTitle: string;
  modalContent: React.ReactNode;
  modal_class: string;
}

const Custom_Modal: React.FC<CustomModalProps> = ({ modalTitle, icon, buttonTitle, modalContent , modal_class}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <a onClick={handleShow}    className="user_modalBtn">
        {icon} {buttonTitle}
      </a>

      <Modal show={show} onHide={handleClose} className={modal_class}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body >{modalContent}</Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose}> 
            Save 
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Custom_Modal;
