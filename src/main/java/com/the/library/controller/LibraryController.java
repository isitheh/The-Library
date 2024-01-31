package com.the.library.controller;

import com.the.library.model.Library;
import com.the.library.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/libraries")
public class LibraryController {
    @Autowired
    private LibraryRepository libraryRepository;

    @GetMapping("")
    public List<Library> getAllLibraries() {
        return libraryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Library> getLibraryById(@PathVariable("id") Long id) {
        Library library = libraryRepository.findById(id).orElse(null);
        if(library == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(library, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Library> createLibrary(@RequestBody Library library) {
        Library savedLibrary = libraryRepository.save(library);
        return new ResponseEntity<>(savedLibrary, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Library> updateLibrary(@PathVariable("id") Long id, @RequestBody Library library) {
        //Get the library to be updated
        Library libraryToUpdate = libraryRepository.findById(id).orElse(null);
        if(libraryToUpdate == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        libraryToUpdate.setLibrary_name(library.getLibrary_name());
        libraryToUpdate.setNumber_of_books(library.getNumber_of_books());
        libraryToUpdate.setBookGenres(library.getBookGenres());
        Library updatedLibrary = libraryRepository.save(libraryToUpdate);
        return new ResponseEntity<>(updatedLibrary, HttpStatus.OK);
    }

    @DeleteMapping("")
    public void deleteAllLibraries() {
        libraryRepository.deleteAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Library> deleteLibrariesById(@PathVariable("id") Long id) {
        Library library = libraryRepository.findById(id).orElse(null);
        if(library == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        libraryRepository.delete(library);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
