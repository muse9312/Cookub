package com.cookub.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.cookub.backend.entity.recipeE.Recipe;

public interface CardRepository extends JpaRepository<Recipe,Long> {
    List<Recipe> findAllByIsOpenable(int openable);
}
