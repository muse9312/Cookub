package com.cookub.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import com.cookub.backend.dto.url.UrlDto;
import com.cookub.backend.entity.url.Url;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface UrlService {

    // Make Url
    public String setUrl(Long userId, UrlDto urlDto);

    // Delete Url
    public String delUrl(Long urlId);

    // list Url
    public List<Url> myUrl(Long userId);

}   
