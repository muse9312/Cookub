package com.cookub.backend.controller;

import java.util.List;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/mypage")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    // 레시피 정보 입력
    @RequestMapping(value = "/mypage", method = RequestMethod.POST)
    public Recipe getRecipe(@RequestBody RecipeDto recipeDto) {
        return recipeService.setRecipe(recipeDto);
    }

    //내 레시피 조회
    @GetMapping("/mypage/{userId}/list")
    public List<Recipe> myRecipe(@PathVariable("userId") Long userId) {
        return recipeService.myRecipe(userId);
    }

    // 내 레시피 삭제
    @DeleteMapping("/mypage/{recipeId}")
    public String recipeDelete(@PathVariable("recipeId") long recipeId) {
        return recipeService.delRecipe(recipeId);
    }

    // => return타입 형태를 어떻게 바꾸는게 좋을지?
}