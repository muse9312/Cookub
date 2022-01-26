package com.cookub.backend.controller;

import java.util.List;

import com.cookub.backend.dto.CookMethodDto;
import com.cookub.backend.dto.IngredientDto;
import com.cookub.backend.dto.KeywordDto;
import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.CookMethod;
import com.cookub.backend.entity.Ingredient;
import com.cookub.backend.entity.Keyword;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/mypage")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    ///////////////////////등록//////////////////////////
    // 레시피 정보 등록 (recipe)
    @RequestMapping(value = "/recipe", method = RequestMethod.POST)
    public Recipe setRecipe(@RequestBody RecipeDto recipeDto) {
        return recipeService.setRecipe(recipeDto);
    }

    // 레시피 정보 등록 ( CookMethod )
    @RequestMapping(value = "/cookMethod", method = RequestMethod.POST)
    public CookMethod setRecipe(@RequestBody CookMethodDto cookmethodDto) {
        return recipeService.setMethod(cookmethodDto);
    }

    // 레시피 정보 등록 ( Ingredient )
    @RequestMapping(value = "/ingredient", method = RequestMethod.POST)
    public Ingredient setIngredinet(@RequestBody IngredientDto ingredientDto) {
        return recipeService.setIngredient(ingredientDto);
    }

    // 레시피 정보 등록 ( keyword )
    @RequestMapping(value = "/mypage/keyword", method = RequestMethod.POST)
    public Keyword setKeyword(@RequestBody KeywordDto keywordDto) {
        return recipeService.setKeyword(keywordDto);
    }

    //////////////////////////////////////////수정///////////////////////////////
    // 레시피 정보 수정 (recipe)
    @PutMapping("/recipe")
    public Recipe putRecipe(@RequestBody RecipeDto recipeDto) {
        return recipeService.putRecipe(recipeDto);
    }

    // 레시피 정보 수정 ( CookMethod )
    @PutMapping("/cookMethod")
    public CookMethod putRecipe(@RequestBody CookMethodDto cookmethodDto) {
        return recipeService.putMethod(cookmethodDto);
    }

    // 레시피 정보 수정 ( Ingredient )
    @RequestMapping(value = "/ingredient", method = RequestMethod.PUT)
    public Ingredient putIngredinet(@RequestBody IngredientDto ingredientDto) {
        return recipeService.putIngredient(ingredientDto);
    }

    // 레시피 정보 수정 ( keyword )
    @PutMapping( "/keyword")
    public Keyword putKeyword(@RequestBody KeywordDto keywordDto) {
        return recipeService.putKeyword(keywordDto);
    }

    // 내 레시피 목록 조회
    @GetMapping("/{userId}/list")
    public List<Recipe> myRecipe(@PathVariable("userId") Long userId) {
        return recipeService.myRecipe(userId);
    }

    // 내 레시피 삭제
    @DeleteMapping("/{recipeId}")
    public String recipeDelete(@PathVariable("recipeId") long recipeId) {
        return recipeService.delRecipe(recipeId);
    }

    // 내 레시피 상세 정보 조회
    @GetMapping("/{recipeId}/find")
    public Recipe findRecipe(@PathVariable("recipeId") long recipeId) {
        return recipeService.findRecipe(recipeId);
    }

}