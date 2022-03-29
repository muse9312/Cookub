package com.cookub.backend.repository;

import com.cookub.backend.entity.profilepage.WorkCareer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkPlaceRepository extends JpaRepository<WorkCareer,Long> {

}