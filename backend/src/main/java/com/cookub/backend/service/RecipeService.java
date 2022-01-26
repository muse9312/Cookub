package com.cookub.backend.service;

import java.util.List;

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
public interface RecipeService {

    // 레시피 정보 등록 
    Recipe setRecipe (RecipeDto recipeDto,Long userId);
    CookMethod setMethod (CookMethodDto cookMethodDto);
    Ingredient setIngredient (IngredientDto ingredientDto);
    Keyword setKeyword (KeywordDto keywordDto);

    // 레시피 정보 수정 
    Recipe putRecipe(RecipeDto recipeDto);
    CookMethod putMethod (CookMethodDto cookMethodDto);
    Ingredient putIngredient (IngredientDto ingredientDto);
    Keyword putKeyword (KeywordDto keywordDto);

    List<Recipe> myRecipe (Long userId);
    String delRecipe (Long recipeId);
    Recipe findRecipe (Long recipeId);

}