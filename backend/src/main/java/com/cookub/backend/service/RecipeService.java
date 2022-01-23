package com.cookub.backend.service;


import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;


import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public interface RecipeService {

    Recipe getRecipe (RecipeDto recipeDto);

    String myRecipe (Model model);

    String delRecipe (Long userId);

}