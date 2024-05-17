import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";

interface DeleteModalProps {
  onDelete: () => void;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onDelete, onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="sm" >
   
      <Modal.Body>
      <div className='text-center'>
      <div className="delete_icn mb-3">
        <RiDeleteBin5Line />
        </div>
        <div className="title_sm">Delete!</div>
        <p>Are you sure want to delete this Patient Admission?</p>
      </div>
      </Modal.Body>
      <Modal.Footer className='delete_modal'>      
        <Button variant="danger" onClick={handleDelete}>
          Yes,Delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          No,Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
