package com.the.library.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Map;

//@Entity tells Spring that this class is an entity and should be mapped to a database.
@Entity
public class Library {
    //@Id marks the primary key of the tables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    //Next fields are the columns of the table
    private int number_of_books;
    private String library_name;
    @JdbcTypeCode(SqlTypes.JSON)
    private Map<String, Integer> bookGenres;

    public Library() {}

    public Library(int id, int number_of_books, String library_name, Map<String, Integer> bookGenres) {
        this.id = id;
        this.number_of_books = number_of_books;
        this.library_name = library_name;
        this.bookGenres = bookGenres;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumber_of_books() {
        return number_of_books;
    }

    public void setNumber_of_books(int number_of_books) {
        this.number_of_books = number_of_books;
    }

    public String getLibrary_name() {
        return library_name;
    }

    public void setLibrary_name(String library_name) {
        this.library_name = library_name;
    }

    public Map<String, Integer> getBookGenres() {
        return bookGenres;
    }

    public void setBookGenres(Map<String, Integer> bookGenres) {
        this.bookGenres = bookGenres;
    }
}
