package com.cookub.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.cookub.backend.dto.recipe.CookMethodDto;
import com.cookub.backend.dto.recipe.IngredientDto;
import com.cookub.backend.dto.recipe.KeywordDto;
import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.entity.recipeE.*;
import com.cookub.backend.entity.recipeE.Ingredient;
import com.cookub.backend.entity.recipeE.Keyword;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.CookMethodRepository;
import com.cookub.backend.repository.IngredientRepository;
import com.cookub.backend.repository.KeywordRepository;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CookMethodRepository cookMethodRepository;
    @Autowired
    private IngredientRepository ingredientRepository;
    @Autowired
    private KeywordRepository keywordRepository;

    // 레시피 등록 (레시피)
    @Override
    @Transactional
    public void setRecipe(RecipeDto recipeDto, Long userId) {
        User user = userRepository.findById(userId).get();
        Recipe recipeEntity = Recipe.builder()
                .title(recipeDto.getTitle())
                .keypoint(recipeDto.getKeypoint())
                .isOpenable(recipeDto.getIsOpenable())
                .level(recipeDto.getLevel())
                .cookingTime(recipeDto.getCookingTime())
                .likeCnt(recipeDto.getLikeCnt())
                .views(recipeDto.getViews())
                .foodImage(recipeDto.getFoodImage())
                .user(user)
                // .cookMethods(recipeDto.getCookMethods())
                .build();
        recipeEntity = recipeRepository.save(recipeEntity);

        for (CookMethod cookMethod : recipeDto.getCookMethods()) {
            cookMethod.setMethodRecipe(recipeEntity);
            cookMethodRepository.save(cookMethod);
        }
        for (Keyword keyword : recipeDto.getKeywordList()) {
            keyword.setKeywordRecipe(recipeEntity);
            keywordRepository.save(keyword);
        }
        for (Ingredient ingredient : recipeDto.getIngredients()) {
            ingredient.setIngredientRecipe(recipeEntity);
            ingredientRepository.save(ingredient);
        }

        // for (int i = 0; i < recipeDto.getCookMethods().size(); i++) {
        // CookMethod cookMethod=recipeDto.getCookMethods().get(i);
        // cookMethod=cookMethodRepository.save(cookMethod);
        // }
    }

    // 레시피 수정 (레시피)
    @Override
    public String editRecipe(RecipeDto recipeDto, Long recipeId) {
        Optional<Recipe> byId = recipeRepository.findById(recipeDto.getRecipeId());
        if (byId.isPresent()) {
            Recipe recipeEntity = byId.get();
            recipeEntity.setTitle(recipeDto.getTitle());
            recipeEntity.setKeypoint(recipeDto.getKeypoint());
            recipeEntity.setIsOpenable(recipeDto.getIsOpenable());
            recipeEntity.setLevel(recipeDto.getLevel());
            recipeEntity.setCookingTime(recipeDto.getCookingTime());
            recipeEntity.setLikeCnt(recipeDto.getLikeCnt());
            recipeEntity.setViews(recipeDto.getViews());
            recipeEntity.setFoodImage(recipeDto.getFoodImage());
            // .cookMethods(recipeDto.getCookMethods())

            recipeRepository.save(recipeEntity);

            for (CookMethod cookMethod : recipeDto.getCookMethods()) {
                cookMethod.setMethodRecipe(recipeEntity);
                cookMethodRepository.save(cookMethod);
            }
            for (Keyword keyword : recipeDto.getKeywordList()) {
                keyword.setKeywordRecipe(recipeEntity);
                keywordRepository.save(keyword);
            }
            for (Ingredient ingredient : recipeDto.getIngredients()) {
                ingredient.setIngredientRecipe(recipeEntity);
                ingredientRepository.save(ingredient);
            }
            return null;
        } else {
            return "modifying";
        }
    }

    // 레시피 목록 조회
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
        return "del";

        // Recipe recipeEntity = Recipe.builder()
        // .cookMethods(recipeDto.getCookMethods())
        // .keywordList(recipeDto.getKeywordList())
        // .ingredients(recipeDto.getIngredients())
        // .build();

        // for (CookMethod cookMethod : recipeDto.getCookMethods()) {
        // cookMethod.setMethodRecipe(recipeEntity);
        // cookMethodRepository.delete(cookMethod);
        // }

        // for (Keyword keyword : recipeDto.getKeywordList()) {
        // keyword.setKeywordRecipe(recipeEntity);
        // keywordRepository.delete(keyword);
        // }

        // for (Ingredient ingredient : recipeDto.getIngredients()) {
        // ingredient.setIngredientRecipe(recipeEntity);
        // ingredientRepository.delete(ingredient);
        // }

    }

    // 내 레시피 상세 정보 조회
    @Override
    public Recipe findRecipe(Long recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).get();
        return recipe;
    }

}