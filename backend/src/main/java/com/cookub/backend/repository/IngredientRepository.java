package com.cookub.backend.repository;

import com.cookub.backend.entity.Ingredient;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    // Ingredient updateByIngredient(Ingredient ingredient);
}
