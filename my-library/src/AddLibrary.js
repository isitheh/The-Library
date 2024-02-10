import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddLibrary = (props) => {
    const { show, onClose } = props;
    const [libraryName, setLibraryName] = useState('');
    const [libraryNumBooks, setLibraryNumBooks] = useState('');
    const [comedyGenreName, setComedyGenreName] = useState('');
    const [religiousGenreName, setReligiousGenreName] = useState('');
    const [dramaGenreName, setDramaGenreName] = useState('');
    const [crimeGenreName, setCrimeGenreName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Offcanvas show={show} onHide={onClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add New Library</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Library Name</Form.Label>
                            <Form.Control type="text" placeholder="Library Name" onChange={(e) => setLibraryName(e.target.value)} value={libraryName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Books</Form.Label>
                            <Form.Control type="text" placeholder="Num Books" onChange={(e) => setLibraryNumBooks(e.target.value)} value={libraryNumBooks}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <hr/>
                            <Form.Label className="mb-3">Populate Genres</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Comedy</Form.Label>
                                        <Form.Control type="text" placeholder="#Comedy" onChange={(e) => setComedyGenreName(e.target.value)} value={comedyGenreName}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Religious</Form.Label>
                                        <Form.Control type="text" placeholder="#Religious" onChange={(e) => setReligiousGenreName(e.target.value)} value={religiousGenreName}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    
                                    <Form.Group className="mb-6">
                                        <Form.Label>Drama</Form.Label>
                                        <Form.Control type="text" placeholder="#Drama" onChange={(e) => setDramaGenreName(e.target.value)} value={dramaGenreName}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Crime</Form.Label>
                                        <Form.Control type="text" placeholder="#Crime" onChange={(e) => setCrimeGenreName(e.target.value)} value={crimeGenreName}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <hr/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button variant="primary" type='submit' onClick={onClose}>Submit</Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AddLibrary;
