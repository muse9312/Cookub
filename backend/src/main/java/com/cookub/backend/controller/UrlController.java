package com.cookub.backend.controller;

import java.util.List;

import com.cookub.backend.dto.url.UrlDto;
import com.cookub.backend.entity.url.Url;
import com.cookub.backend.service.UrlService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/url")
@Transactional
public class UrlController {

    @Autowired
    private UrlService urlService;
    
    @PostMapping(value = "/{userId}")
    public String setUrl(@PathVariable Long userId) {
        return urlService.setUrl(userId);

    }

   // http://localhost:3000/private/key
}
