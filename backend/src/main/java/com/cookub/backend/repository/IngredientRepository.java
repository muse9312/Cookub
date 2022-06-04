package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.recipeE.Ingredient;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
   List<Ingredient>findByingredientName(String ingredientName);
    
}
