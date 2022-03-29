package com.cookub.backend.repository;

import com.cookub.backend.entity.profilepage.Certification;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<Certification,Long> {
    
}
