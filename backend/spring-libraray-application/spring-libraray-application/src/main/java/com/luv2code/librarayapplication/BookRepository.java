package com.luv2code.librarayapplication;

import com.luv2code.librarayapplication.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
