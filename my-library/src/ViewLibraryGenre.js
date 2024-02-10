import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const ViewLibraryGenre = (props) => {
    const { show, onClose, lib } = props;

    return (
        <>
            <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>View {lib.library_name} Book Genres</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive striped bordered hover variant='light'>
                    <thead>
                        <tr>
                            <th>Comedy Genre</th>
                            <th>Religious Genre</th>
                            <th>Drama Genre</th>
                            <th>Crime Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key={lib.id}>
                        <td>{lib.bookGenres.Comedy}</td>
                        <td>{lib.bookGenres.Religious}</td>
                        <td>{lib.bookGenres.Drama}</td>
                        <td>{lib.bookGenres.Crime}</td>
                    </tr>
                    </tbody>
                </Table>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewLibraryGenre;