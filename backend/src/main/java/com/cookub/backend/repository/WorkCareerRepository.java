package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.profilepage.WorkCareer;
import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkCareerRepository extends JpaRepository<WorkCareer,Long> {
    List<WorkCareer> findByWorkPlaceUser(User user);
}