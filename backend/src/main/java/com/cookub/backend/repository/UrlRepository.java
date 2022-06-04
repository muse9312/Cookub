package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.entity.url.Url;
import com.cookub.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UrlRepository extends JpaRepository<Url,Long> {
    List<Url> findByUrlUser(User user);  // 유저 레시피 리스트 조회    
    Url findByPrivateKey(String key);
    
}
