package com.cookub.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.entity.recipeE.*;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface RecipeService {

    // 레시피 정보 등록
    void setRecipe(RecipeDto recipeDto, Long userId);

    // 레시피 정보 수정
    String editRecipe(RecipeDto recipeDto, Long userId);

    // 레시피 목록 조회
    List<Recipe> myRecipe(Long userId);

    // Private recipe Url
    List<Recipe> myPrivate(String key);

    // 레시피 상세 정보 조회
    Recipe findRecipe(Long recipeId);

    // 레시피 삭제
    String delRecipe(Long recipeId);

    // 레시피 검색 
    List<Recipe> searchRecipe(String searchingName);

}