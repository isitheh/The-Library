import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import LibraryDeleted from './LibraryDeleted';

const LibrariesList = () => {
    const [show, setShow] = useState(false);
    const [libraries, setLibraries] = useState([]);
    const [refreshScreen, setRefreshScreen] = useState(false);

    //Do when LibrariesList component mounts
    useEffect(() => {
        fetch('http://localhost:8080/libraries')
        .then(response => response.json())
        .then(data => setLibraries(data))
        .catch(error => console.error('Error gatting libraries: ', error));
    }, [refreshScreen]);

    const handleClose = (libId) => {
        setShow(false);
        deleteLibrary(libId);
    }
    const handleShow = () => {
        setShow(true);
    }

    const updateLibrary = (libId) => {
        console.log("X.0 ===================== Update Library:", libId);
    }

    const deleteLibrary = (libId) => {
        fetch('http://localhost:8080/libraries/' + libId, {
            method: "DELETE",
        })
        .then(() => { 
            setRefreshScreen(!refreshScreen);
            setLibraries(values => 
            { 
                return (values.filter(item => item.libId !== libId))
            }
        )})
        .catch(error => console.error('Error deleting a library entry: ', error));
    }

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
                        <td><Button variant="secondary">View {library.library_name} Genres</Button></td>
                        <td>
                            <Button variant="danger" onClick={handleShow}>Delete {library.library_name}</Button>
                            <LibraryDeleted show={show} onClose={() => handleClose(library.id)} lib={library.library_name}/>
                            <Button variant="info" onClick={() => updateLibrary(library.id)}>Update {library.library_name} </Button>
                        </td>
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