package com.the.library.controller;

import com.the.library.model.Library;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)
public class LibraryControllerTests {
    @Mock
    private LibraryController libraryController;

    @Test
    public void testCreateLibrary() {
        MockHttpServletRequest req = new MockHttpServletRequest();
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(req));
        Map<String, Integer> mBookGenres = new HashMap<>();
        mBookGenres.put("Dashboard", 12);
        mBookGenres.put("Reporter", 19);
        mBookGenres.put("Research", 14);
        Library library = new Library(7, 45, "Connection", mBookGenres);
        ResponseEntity<Library> responseEntity = libraryController.createLibrary(library);

        assertEquals(201, responseEntity.getStatusCode().value());
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertThat(Objects.requireNonNull(responseEntity.getHeaders().getLocation()).getPath()).isEqualTo("/1");
    }

    @Test
    public void testGetLibrary() {
        MockHttpServletRequest req = new MockHttpServletRequest();
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(req));
        Map<String, Integer> mBookGenres = new HashMap<>();
        mBookGenres.put("Children", 4);
        mBookGenres.put("Planning", 5);
        mBookGenres.put("Retirement", 3);
        Library library = new Library(8, 12, "MainHall", mBookGenres);
        ResponseEntity<Library> responseEntity = libraryController.createLibrary(library);

        Library mLibrary = libraryController.getLibraryById(8L).getBody();
        assertEquals(201, responseEntity.getStatusCode().value());
        assertNotNull(mLibrary);
        assertEquals(12, mLibrary.getNumber_of_books());
    }
}
