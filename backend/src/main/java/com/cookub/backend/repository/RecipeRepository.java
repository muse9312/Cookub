package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RecipeRepository extends JpaRepository<Recipe,Long> {
    // List<Recipe> findByUserID(Long userId);  // 유저 레시피 리스트 조회 

}