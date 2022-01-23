package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.Recipe;
import com.cookub.backend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;


public interface RecipeRepository extends JpaRepository<Recipe,Long> {
    List<Recipe> findByUser(User user);  // 유저 레시피 리스트 조회 

}