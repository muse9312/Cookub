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
    
    @PostMapping(value = "/set/{userId}")
    public void setUrl(@RequestBody UrlDto urlDto, @PathVariable Long userId) {
        urlService.setUrl(urlDto, userId);
    }

    @GetMapping(value = "/get/{userId}")
    public List<Url> getUrl(@PathVariable("userId") Long userId) {
        return urlService.getUrl(userId);
    }

    //getUrl
}
