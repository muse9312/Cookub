package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<Certification,Long> {
    List<Certification> findByCertificationUser(User user);
}
