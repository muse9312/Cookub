package com.cookub.backend.controller;

import java.util.List;

import com.cookub.backend.dto.recipe.IngredientDto;
import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

// import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/mypage")
@Transactional
@ResponseBody
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @PostMapping("/test")
    public void setRecipe2(@RequestBody String ttt) {
        System.out.println("result:" + ttt);
        // recipeService.setRecipe(recipeDto, userId);
    }

    // 레시피 정보 등록
    @PostMapping(value = "/recipe/{userId}")
    public void setRecipe(@RequestBody RecipeDto recipeDto, @PathVariable Long userId) {
        System.out.println(recipeDto);
        recipeService.setRecipe(recipeDto, userId);
    }

    // 내 레시피 목록 조회
    @GetMapping("/recipe/list/{userId}")
    public List<Recipe> myRecipe(@PathVariable("userId") Long userId) {
        return recipeService.myRecipe(userId);
    }

    // 내 레시피 목록 조회 - private
    @GetMapping("/private/{key}")
    public List<Recipe> myPrivate(@PathVariable("key") String key) {
        return recipeService.myPrivate(key);
    }

    // 레시피 '상세' 정보 조회
    @GetMapping("/recipe/{recipeId}")
    public Recipe findRecipe(@PathVariable("recipeId") long recipeId) {
        return recipeService.findRecipe(recipeId);
    }

    // 레시피 정보 수정
    @PostMapping(value = "/recipe/edit/{recipeId}")
    public String editRecipe(@RequestBody RecipeDto recipeDto, @PathVariable Long recipeId) {
        recipeService.editRecipe(recipeDto, recipeId);
        return "redirect:/";
    }

    // 내 레시피 삭제
    @DeleteMapping(value = "/recipe/{recipeId}")
    public String recipeDelete(@PathVariable("recipeId") long recipeId) {
        return recipeService.delRecipe(recipeId);
    }

    // 레시피 검색
    @PostMapping(value = "/search")
    public List<Recipe> searchRecipe(@RequestBody IngredientDto ingredientN) {
        return recipeService.searchRecipe(ingredientN.getIngredientName());
    }

}