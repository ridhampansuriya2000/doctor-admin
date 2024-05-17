import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface TableModalProps {
  modalTitle: string;
  icon?: React.ReactNode;
  modalContent: React.ReactNode;
  modal_class: string;
  button_name : string
}

const Table_modal: React.FC<TableModalProps> = ({
  modalTitle,
  icon = null, // Set default value to null
  modalContent,
  modal_class,
  button_name ,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <a onClick={handleShow} className="user_modalBtn">
        {icon} {button_name}
      </a>

      <Modal show={show} onHide={handleClose} className={modal_class}>
        <Modal.Header closeButton>
          <Modal.Title className="title_sm">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Save</Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Table_modal;
