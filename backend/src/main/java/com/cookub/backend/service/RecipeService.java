package com.cookub.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import com.cookub.backend.dto.CookMethodDto;
import com.cookub.backend.dto.IngredientDto;
import com.cookub.backend.dto.KeywordDto;
import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.CookMethod;
import com.cookub.backend.entity.Ingredient;
import com.cookub.backend.entity.Keyword;
import com.cookub.backend.entity.Recipe;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface RecipeService {

    // 레시피 정보 등록
    void setRecipe(RecipeDto recipeDto, Long userId);

    // 레시피 정보 수정
    String putRecipe(RecipeDto recipeDto, Long userId);

    // 레시피 목록 조회
    List<Recipe> myRecipe(Long userId);

    // 레시피 상세 정보 조회
    Recipe findRecipe(Long recipeId);

    // 레시피 삭제
    String delRecipe(Long recipeId);

}