package com.cookub.backend.service;

import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class CardServiceImpl implements CardService{
    @Autowired
    private CardRepository cardRepository;
    
    @Override
    public List<Recipe> showOpenedCardList() {
        return cardRepository.findAllByIsOpenable(1);
    }

    @Override
    public Recipe showDetailedRecipe(Long recipeId) {
        return cardRepository.findById(recipeId).get();
    }

    @Override
    public List<Recipe> clickLikeRecipe(Long recipeId) {
        Recipe recipe = cardRepository.findById(recipeId).get();
        recipe.setLikeCnt(recipe.getLikeCnt()+1);
        return cardRepository.findAllByIsOpenable(1);
    }
}
