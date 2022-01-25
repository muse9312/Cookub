package com.cookub.backend.repository;

import com.cookub.backend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository extends JpaRepository<Recipe,Long> {
    List<Recipe> findAllByIsOpenable(int openable);
}
