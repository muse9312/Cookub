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
import com.cookub.backend.entity.User;
import com.cookub.backend.repository.CookMethodRepository;
import com.cookub.backend.repository.IngredientRepository;
import com.cookub.backend.repository.KeywordRepository;
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
    @Autowired
    private CookMethodRepository cookMethodRepository;
    @Autowired
    private IngredientRepository ingredientRepository;
    @Autowired
    private KeywordRepository keywordRepository;


    /////////////////////////////등록////////////////////////////
    // 레시피 등록 (레시피)
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

    // 레시피 등록 (방법)
    @Override
    public CookMethod setMethod(CookMethodDto cookMethodDto) {
        CookMethod methodEntity = CookMethod.builder()
                .description(cookMethodDto.getDescription())
                .picture(cookMethodDto.getPicture())
                .step(cookMethodDto.getStep())
                .build();
        cookMethodRepository.save(methodEntity);
        return null;
    }

    // 레시피 등록 (재료)
    @Override
    public Ingredient setIngredient(IngredientDto ingredientDto) {
        Ingredient ingredientEntity = Ingredient.builder()
                .amount(ingredientDto.getAmount())
                .ingredientName(ingredientDto.getIngredientName())
                .build();
        ingredientRepository.save(ingredientEntity);
        return null;
    }

    // 레시피 등록 (키워드)
    @Override
    public Keyword setKeyword(KeywordDto keywordDto) {
        Keyword keywordEntity = Keyword.builder()
                .keywordName(keywordDto.getKeywordName())
                .build();
        keywordRepository.save(keywordEntity);
        return null;
    }

    ///////////////////////////////// 수정 //////////////////////////
    // 레시피 수정 (레시피)
    @Override
    public Recipe putRecipe(RecipeDto recipeDto) {
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

    // 레시피 등록 (방법)
    @Override
    public CookMethod putMethod(CookMethodDto cookMethodDto) {
        CookMethod methodEntity = CookMethod.builder()
                .description(cookMethodDto.getDescription())
                .picture(cookMethodDto.getPicture())
                .step(cookMethodDto.getStep())
                .build();
        cookMethodRepository.save(methodEntity);
        return null;
    }

    // 레시피 등록 (재료)
    @Override
    public Ingredient putIngredient(IngredientDto ingredientDto) {
        Ingredient ingredientEntity = Ingredient.builder()
                .amount(ingredientDto.getAmount())
                .ingredientName(ingredientDto.getIngredientName())
                .build();
        ingredientRepository.save(ingredientEntity);
        return null;
    }

    // 레시피 등록 (키워드)
    @Override
    public Keyword putKeyword(KeywordDto keywordDto) {
        Keyword keywordEntity = Keyword.builder()
                .keywordName(keywordDto.getKeywordName())
                .build();
        keywordRepository.save(keywordEntity);
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

    // 내 레시피 상세 정보 조회
    @Override
    public Recipe findRecipe(Long recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).get();
        return recipe;
    }

}