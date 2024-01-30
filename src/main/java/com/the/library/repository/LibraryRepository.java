package com.the.library.repository;

import com.the.library.model.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//JpaRepository interface provides generic methods to interact with the database.
//@Repository tells Spring that this is a repository.
@Repository
public interface LibraryRepository extends JpaRepository<Library, Long> {
}
