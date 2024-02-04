import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

const LibrariesList = () => {
    const [libraries, setLibraries] = useState([]);

    //Do when LibrariesList component mounts
    useEffect(() => {
        fetch('http://localhost:8080/libraries')
        .then(response => response.json())
        .then(data => setLibraries(data))
        .catch(error => console.error('Error gatting libraries: ', error));
    }, []);

    return (
        <div>
            <Table responsive striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Library Name</th>
                        <th>Number of Books</th>
                        <th>Book Genres</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                {libraries.map((library) => (
                    <tr key={library.id}>
                        <td>{library.library_name}</td>
                        <td>{library.number_of_books}</td>
                        <td><Button  variant="secondary">View {library.library_name} Genres</Button></td>
                        <td><Button  variant="danger">Delete {library.library_name}</Button><Button  variant="info">Update {library.library_name} </Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <br/>
            <Button  variant="primary">New Library</Button>
        </div>
    )
}

export default LibrariesList;