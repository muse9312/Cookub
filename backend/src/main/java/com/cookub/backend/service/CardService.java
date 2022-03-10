package com.cookub.backend.service;

import com.cookub.backend.entity.Recipe;

import java.util.List;

public interface CardService {
    List<Recipe> showOpenedCardList();
    Recipe showDetailedRecipe(Long recipeId);
    List<Recipe> clickLikeRecipe(Long recipeId);    //좋아요 1 상승 후, 공개 레시피 return
}
