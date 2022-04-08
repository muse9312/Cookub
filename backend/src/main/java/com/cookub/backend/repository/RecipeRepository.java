package com.cookub.backend.repository;


import java.util.List;

import com.cookub.backend.entity.recipeE.Ingredient;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe,Long> {
    List<Recipe> findByUser(User user);  // 유저 레시피 리스트 조회
    List<Recipe> findByisOpenable(Integer isOpenablelist);
//    List<Recipe> findById(Long recipeId); // 레시피 상세정보 조회[]



}