package com.cookub.backend.repository;

import com.cookub.backend.entity.profilepage.Degree;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DegreeRepository extends JpaRepository<Degree,Long> {
    
}
