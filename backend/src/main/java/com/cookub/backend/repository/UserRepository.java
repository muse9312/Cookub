package com.cookub.backend.repository;

import com.cookub.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
<<<<<<< HEAD
    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);
=======


>>>>>>> main
}
