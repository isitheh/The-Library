import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const UpdateLibrary = (props) => {
    const { show, onClose, lib } = props;
    
    return (
        <>
            <Offcanvas show={show} onHide={onClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Update Library {lib}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Library Name</Form.Label>
                            <Form.Control type="text" placeholder="Library Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Books</Form.Label>
                            <Form.Control type="text" placeholder="Num Books" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <hr/>
                            <Form.Label className="mb-3">Populate Genres</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Comedy</Form.Label>
                                        <Form.Control type="text" placeholder="#Comedy" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Religious</Form.Label>
                                        <Form.Control type="text" placeholder="#Religious" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    
                                    <Form.Group className="mb-6">
                                        <Form.Label>Drama</Form.Label>
                                        <Form.Control type="text" placeholder="#Drama" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Crime</Form.Label>
                                        <Form.Control type="text" placeholder="#Crime" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <hr/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button>Submit</Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default UpdateLibrary;
