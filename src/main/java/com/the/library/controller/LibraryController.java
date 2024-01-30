package com.the.library.controller;

import com.the.library.model.Library;
import com.the.library.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
