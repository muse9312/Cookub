package com.cookub.backend.service;

import java.util.List;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;

import com.cookub.backend.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    // 레시피 조회 
    @Override 
    public Recipe getRecipe(RecipeDto recipeDto) {

        Recipe reicpeEntity = Recipe.builder()
                .keypoint(recipeDto.getKeypoint())
                .isOpenable(recipeDto.isOpenable())
                .level(recipeDto.getLevel())
                .cookingTime(recipeDto.getCookingTime())
                .likeCnt(recipeDto.getLikeCnt())
                .views(recipeDto.getViews())
                .build();
        recipeRepository.save(reicpeEntity);
        return null;
    }

    // 레시피 리스트 조회
    @Override
    public String myRecipe(Model model) {
        List<Recipe> list = recipeRepository.findAll();
        model.addAttribute("list", list);
        return "redirect:/";
    }

    
    // 레시피 리스트 삭제 
    @Override
    public String delRecipe (Long userId) {
        recipeRepository.deleteById(userId);
        return "redirect:/";
    }

}