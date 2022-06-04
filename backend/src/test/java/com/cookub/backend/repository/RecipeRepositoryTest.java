package com.cookub.backend.repository;

import java.util.List;

import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.entity.recipeE.Recipe;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest

public class RecipeRepositoryTest {
    
    @Autowired
    RecipeRepository recipeRepository;

    // 레시피 등록 테스트

    @Test
    public void getrecipe(){
        RecipeDto recipeDto = RecipeDto.builder()
        .keypoint("오전테스트")
        .isOpenable(1)
        .level("중")
        .cookingTime(15)
        .likeCnt("23")
        .views(244)
        .build();

    Recipe reicpeEntity = Recipe.builder()
        .keypoint(recipeDto.getKeypoint())
        .isOpenable(recipeDto.getIsOpenable())
        .level(recipeDto.getLevel())
        .cookingTime(recipeDto.getCookingTime())
        .likeCnt(recipeDto.getLikeCnt())
        .views(recipeDto.getViews())
        .build();
        recipeRepository.save(reicpeEntity);
    }



}