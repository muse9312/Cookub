package com.cookub.backend.repository;

import com.cookub.backend.entity.Keyword;

import org.springframework.data.jpa.repository.JpaRepository;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {
    // Keyword updateByKeyword(Keyword keyword);
}
