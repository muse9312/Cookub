package com.cookub.backend.controller;

import java.util.List;

import com.cookub.backend.dto.url.UrlDto;
import com.cookub.backend.entity.url.Url;
import com.cookub.backend.service.UrlService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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

    // Make Url
    @PostMapping(value = "/{userId}")
    public String setUrl(@PathVariable Long userId, @RequestBody UrlDto urlDto) {
        return urlService.setUrl(userId, urlDto);
    }
    // http://localhost:3000/private/key


    // 내 레시피 목록 조회 - private -- 해당 내용은 recipe Controller.
    // @GetMapping("/private/{key}")
    // public List<Recipe> myPrivate(@PathVariable("key") String key) {
    // return recipeService.myPrivate(key);
    // }

    // delete url
    @DeleteMapping(value = "/{urlId}")
    public String recipeDelete(@PathVariable("urlId") long urlId) {
        return urlService.delUrl(urlId);
    }

    // url List 
    @GetMapping("/list/{userId}")
    public List<Url> mylist(@PathVariable("userId") Long userId) {
        return urlService.myUrl(userId);
    }

}
