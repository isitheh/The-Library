import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
    
const LibraryDeletedAll = (props) => {
    const { show, onClose } = props;

    return (
        <>
            <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete All</Modal.Title>
            </Modal.Header>
            <Modal.Body>Successfully Deleted All Libraries!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default LibraryDeletedAll;