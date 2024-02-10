import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import LibraryDeleted from './LibraryDeleted';
import LibraryDeletedAll from './LibraryDeletedAll';
import AddLibrary from './AddLibrary';
import UpdateLibrary from './UpdateLibrary';
import ViewLibraryGenre from './ViewLibraryGenre';

const LibrariesList = () => {
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [libraries, setLibraries] = useState([]);
    const [showGenre, setShowGenre] = useState(false);
    const [delLibrary, setDelLibrary] = useState(null);
    const [showUpdate, setShowUpdate] = useState(false);
    const [refreshScreen, setRefreshScreen] = useState(false);
    const [viewLibraryGenre, setViewLibraryGenre] = useState(null);

    const handleCloseAdd = () => {
        setShowAdd(false);
        addLibrary();
    }

    const handleShowAdd = () => {
        setShowAdd(true);
    }

    const handleCloseUpdate = (lib) => {
        setShowUpdate(false);
        updateLibrary(lib);
    }
    const handleShowUpdate = () => {
        setShowUpdate(true);
    }

    useEffect(() => {
        //A dummy JSON Library
        const JSON_VAR = {
            'library_name': "Test",
            'number_of_books': 4,
            'bookGenres': {
                'Comedy': 1,
                'Religious': 1,
                'Drama': 1,
                'Crime': 1
            } 
        };
        setDelLibrary(JSON_VAR);
        setViewLibraryGenre(JSON_VAR);
    }, []);

    //Do when LibrariesList component mounts
    useEffect(() => {
        fetch('http://localhost:8080/libraries')
        .then(response => response.json())
        .then(data => setLibraries(data))
        .catch(error => console.error('Error gatting libraries: ', error));
    }, [refreshScreen]);

    const handleCloseGenre = (libId) => {
        setShowGenre(false);
    }

    const handleShowGenre = (library) => {
        setViewLibraryGenre(library);
        setShowGenre(true);
    }

    const handleClose = (libId) => {
        setShow(false);
        deleteLibrary(libId);
    }

    const handleShow = (library) => {
        setDelLibrary(library);
        setShow(true);
    }

    const handleCloseAll = () => {
        setShowAll(false);
        deleteAllLibrary();
    }

    const handleShowAll = () => {
        setShowAll(true);
    }

    const updateLibrary = (lib) => {
        setRefreshScreen(!refreshScreen);
    }

    const addLibrary = () => {
        setRefreshScreen(!refreshScreen);
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
                        <td>
                            <Button variant="secondary" onClick={() => handleShowGenre(library)}>View {library.library_name} Genres</Button>
                            <ViewLibraryGenre show={showGenre} onClose={() => handleCloseGenre(viewLibraryGenre.id)} lib={viewLibraryGenre}/> 
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => handleShow(library)}>Delete {library.library_name}</Button>
                            <LibraryDeleted show={show} onClose={() => handleClose(delLibrary.id)} lib={delLibrary}/> 
                            <Button variant="info" onClick={handleShowUpdate}>Update {library.library_name}</Button>
                            <UpdateLibrary show={showUpdate} onClose={() => handleCloseUpdate(library)} lib={library}/>
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