import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddLibrary = (props) => {
    const { show, onClose } = props;
    const [libraryName, setLibraryName] = useState('');
    const [libraryNumBooks, setLibraryNumBooks] = useState(0);
    const [comedyGenreNum, setComedyGenreNum] = useState(0);
    const [religiousGenreNum, setReligiousGenreNum] = useState(0);
    const [dramaGenreNum, setDramaGenreNum] = useState(0);
    const [crimeGenreNum, setCrimeGenreNum] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let numBooks = Number(comedyGenreNum) + Number(religiousGenreNum) + Number(dramaGenreNum) + Number(crimeGenreNum);
        setLibraryNumBooks(numBooks);
        const requestOptions = {
            method: 'POST',
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
        fetch('http://localhost:8080/libraries', requestOptions)
        .then(response => { response.json() })
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
                            <Form.Control type="number" placeholder="Num Books" onChange={(e) => setLibraryNumBooks(e.target.value)} value={libraryNumBooks}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <hr/>
                            <Form.Label className="mb-3">Populate Genres</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Comedy</Form.Label>
                                        <Form.Control type="number" placeholder="#Comedy" onChange={(e) => setComedyGenreNum(e.target.value)} value={comedyGenreNum}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Religious</Form.Label>
                                        <Form.Control type="number" placeholder="#Religious" onChange={(e) => setReligiousGenreNum(e.target.value)} value={religiousGenreNum}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    
                                    <Form.Group className="mb-6">
                                        <Form.Label>Drama</Form.Label>
                                        <Form.Control type="number" placeholder="#Drama" onChange={(e) => setDramaGenreNum(e.target.value)} value={dramaGenreNum}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-6">
                                        <Form.Label>Crime</Form.Label>
                                        <Form.Control type="number" placeholder="#Crime" onChange={(e) => setCrimeGenreNum(e.target.value)} value={crimeGenreNum}/>
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
