package com.cookub.backend.repository;

import com.cookub.backend.entity.url.Url;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UrlRepository extends JpaRepository<Url,Long> {
    
}
