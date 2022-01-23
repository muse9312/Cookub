package com.cookub.backend.service;

import java.util.List;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.entity.User;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository; 

    // 레시피 조회 
    @Override 
    public Recipe setRecipe(RecipeDto recipeDto) {

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
    public List<Recipe> myRecipe(Long userId) {
        User user = userRepository.findById(userId).get();
        List<Recipe> list = recipeRepository.findByUser(user);

        return list;
    }

    // 레시피 리스트 삭제 
    @Override
    public String delRecipe(Long recipeId) {
        recipeRepository.deleteById(recipeId);
        return "redirect:/";
    }

}