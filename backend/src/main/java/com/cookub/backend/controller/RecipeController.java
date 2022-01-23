package com.cookub.backend.controller;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.entity.User;
import com.cookub.backend.service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.ui.Model;

@RestController
@RequestMapping("/mypage")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    // 레시피 정보 입력
    @RequestMapping(value = "/mypage", method = RequestMethod.POST)
    public Recipe getRecipe(@RequestBody RecipeDto recipeDto) {
        return recipeService.getRecipe(recipeDto);
    }

    //내 레시피 조회
    @GetMapping("/mypage/{userId}")
    public Recipe myRecipe(@PathVariable("userId") User userId) {
        return recipeService.myRecipe(userId);
    }

    // 내 레시피 삭제
    @GetMapping("/mypage/{recipeId}")
    public String recipeDelete(@PathVariable("recipeId") long recipeId) {
        return recipeService.delRecipe(recipeId);
    }

    // => return타입 형태를 어떻게 바꾸는게 좋을지?
}
