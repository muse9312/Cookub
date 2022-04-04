package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AwardsCareerRepository extends JpaRepository<AwardsCareer,Long> {
    List<AwardsCareer> findBycareerUser(User user);
}
