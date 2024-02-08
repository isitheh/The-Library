import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import LibraryDeleted from './LibraryDeleted';
import LibraryDeletedAll from './LibraryDeletedAll';
import AddLibrary from './AddLibrary';
import UpdateLibrary from './UpdateLibrary';

const LibrariesList = () => {
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [libraries, setLibraries] = useState([]);
    const [showUpdate, setShowUpdate] = useState(false);
    const [refreshScreen, setRefreshScreen] = useState(false);

    const handleCloseAdd = () => {
        setShowAdd(false);
        addLibrary();
    }
    const handleShowAdd = () => {
        setShowAdd(true);
    }

    const handleCloseUpdate = (libId) => {
        setShowUpdate(false);
        updateLibrary(libId);
    }
    const handleShowUpdate = () => {
        setShowUpdate(true);
    }

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

    const handleCloseAll = () => {
        setShowAll(false);
        deleteAllLibrary();
    }
    const handleShowAll = () => {
        setShowAll(true);
    }

    const updateLibrary = (libId) => {
        console.log("4.0 ========================== updateLibrary: ", libId);
    }

    const addLibrary = () => {
        console.log("5.0 =========== add Library ==============");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: 'React Hooks POST Request Example' 
            })
        };
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

    const deleteAllLibrary = () => {
        fetch('http://localhost:8080/libraries', {
            method: "DELETE",
        })
        .then(() => setRefreshScreen(!refreshScreen))
        .catch(error => console.error('Error deleting all libraries: ', error));
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
                            <Button variant="info" onClick={handleShowUpdate}>Update {library.library_name}</Button>
                            <UpdateLibrary show={showUpdate} onClose={() => handleCloseUpdate(library.id)} lib={library.library_name}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <br/>
            <Button variant="primary" onClick={handleShowAdd}>New Library</Button>{' '}
            <Button variant="danger" onClick={handleShowAll}>Delete All</Button>
            <LibraryDeletedAll show={showAll} onClose={handleCloseAll}/>  
            <AddLibrary show={showAdd} onClose={handleCloseAdd}/>  
        </div>
    )
}

export default LibrariesList;