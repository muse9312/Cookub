package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DegreeRepository extends JpaRepository<Degree,Long> {
    List<Degree> findByDegreeUser(User user);
}
