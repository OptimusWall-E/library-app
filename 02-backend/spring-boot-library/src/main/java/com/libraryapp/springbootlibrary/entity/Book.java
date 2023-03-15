package com.libraryapp.springbootlibrary.entity;

import jakarta.persistence.*; //for passing in everything we need for creating tables as entities
import lombok.Data;

@Entity
@Table(name = "book") // "book" is the name of the table in mySQL database
@Data // from Lombok. Automatically creates all getters and setters for book
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "copies")
    private int copies;

    @Column(name = "copies_available")
    private int copiesAvailable;

    @Column(name = "img")
    private String img;
}
