import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const UpdateLibrary = (props) => {
    const { show, onClose, lib } = props;
    const [libraryName, setLibraryName] = useState(lib.library_name);
    const [libraryNumBooks, setLibraryNumBooks] = useState(lib.number_of_books);
    const [comedyGenreNum, setComedyGenreNum] = useState(lib.bookGenres.Comedy);
    const [religiousGenreNum, setReligiousGenreNum] = useState(lib.bookGenres.Religious);
    const [dramaGenreNum, setDramaGenreNum] = useState(lib.bookGenres.Drama);
    const [crimeGenreNum, setCrimeGenreNum] = useState(lib.bookGenres.Crime);

    const handleSubmit = (e) => {
        e.preventDefault();
        let numBooks = Number(comedyGenreNum) + Number(religiousGenreNum) + Number(dramaGenreNum) + Number(crimeGenreNum);
        setLibraryNumBooks(numBooks);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'library_name': libraryName,
                'number_of_books': libraryNumBooks,
                'bookGenres': {
                    'Comedy': Number(comedyGenreNum),
                    'Religious': Number(religiousGenreNum),
                    'Drama': Number(dramaGenreNum),
                    'Crime': Number(crimeGenreNum)
                } 
            })
        };
        fetch('http://localhost:8080/libraries/' + lib.id, requestOptions)
        .then(response => response.json())
    }

    //Do when Book Genres is modified
    useEffect(() => {
        let numBooks = Number(comedyGenreNum) + Number(religiousGenreNum) + Number(dramaGenreNum) + Number(crimeGenreNum);
        setLibraryNumBooks(numBooks);
    }, [comedyGenreNum, religiousGenreNum, dramaGenreNum, crimeGenreNum]);

    return (
        <>
            <Offcanvas show={show} onHide={onClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Update Library {lib.library_name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Form onSubmit = {handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Library Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setLibraryName(e.target.value)} value={libraryName} placeholder={libraryName} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of Books</Form.Label>
                            <Form.Control type="number" onChange={(e) => setLibraryNumBooks(e.target.value)} value={libraryNumBooks} placeholder={libraryNumBooks} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <hr/>
                            <Form.Label className="mb-3">Populate Genres</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Comedy</Form.Label>
                                        <Form.Control type="number" onChange={(e) => setComedyGenreNum(e.target.value)} value={comedyGenreNum} placeholder={comedyGenreNum} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Religious</Form.Label>
                                        <Form.Control type="number" onChange={(e) => setReligiousGenreNum(e.target.value)} value={religiousGenreNum} placeholder={religiousGenreNum} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    
                                    <Form.Group className="mb-6">
                                        <Form.Label>Drama</Form.Label>
                                        <Form.Control type="number" onChange={(e) => setDramaGenreNum(e.target.value)} value={dramaGenreNum} placeholder={dramaGenreNum} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Crime</Form.Label>
                                        <Form.Control type="number" onChange={(e) => setCrimeGenreNum(e.target.value)} value={crimeGenreNum} placeholder={crimeGenreNum} />
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

export default UpdateLibrary;
