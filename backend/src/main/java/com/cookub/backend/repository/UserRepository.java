package com.cookub.backend.repository;

import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);

}
