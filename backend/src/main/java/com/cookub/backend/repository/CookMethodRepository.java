package com.cookub.backend.repository;

import com.cookub.backend.entity.recipeE.*;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CookMethodRepository extends JpaRepository<CookMethod,Long> {
    // CookMethod updateByCookMethod(CookMethod cookMethod);
}
