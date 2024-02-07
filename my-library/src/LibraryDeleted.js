import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
    
const LibraryDeleted = (props) => {
    const { show, onClose, lib} = props;

    return (
        <>
            <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete {lib}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{lib} Library Deleted Successfully!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default LibraryDeleted;