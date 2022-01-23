package com.cookub.backend.service;


import java.util.List;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;


import org.springframework.stereotype.Service;

@Service
public interface RecipeService {

    Recipe setRecipe (RecipeDto recipeDto);

    List<Recipe> myRecipe (Long userId);

    String delRecipe (Long recipeId);

}