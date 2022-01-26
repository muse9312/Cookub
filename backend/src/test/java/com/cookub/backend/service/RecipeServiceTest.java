package com.cookub.backend.service;

import java.util.ArrayList;
import java.util.List;

import com.cookub.backend.dto.IngredientDto;
import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.CookMethod;
import com.cookub.backend.entity.Ingredient;
import com.cookub.backend.entity.Keyword;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.entity.Ingredient.IngredientBuilder;
import com.cookub.backend.repository.CookMethodRepository;
import com.cookub.backend.repository.IngredientRepository;
import com.cookub.backend.repository.KeywordRepository;
import com.cookub.backend.repository.RecipeRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RecipeServiceTest {

    @Autowired
    RecipeService recipeService;

    @Autowired
    IngredientRepository ingredientRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    CookMethodRepository cookMethodRepository;

    @Autowired
    KeywordRepository keywordRepository;

    @Autowired
    RecipeDto recipeDto;

    @Test
    void delete() {
        recipeService.delRecipe(6L);
    }

    @Test
    public void search() {

        for (int i = 0; i < recipeService.myRecipe(1L).size(); i++) {
            System.out.println(recipeService.myRecipe(1L).get(i));
        }
    }

    @Test
    public void putIngredient1() {
        IngredientDto ingredientDto = IngredientDto.builder()
                .ingredientId(1l)
                .amount(15)
                .ingredientName("신라면 2 ")
                .build();

        Ingredient ingredientEntity = Ingredient.builder()
                .amount(ingredientDto.getAmount())
                .ingredientName(ingredientDto.getIngredientName())
                .build();
        ingredientRepository.save(ingredientEntity);
    }

    // @Test
    // public void setTest() {

    //     List<Ingredient> ingredients = new ArrayList<>();
    //     List<Keyword> keywordList = new ArrayList<>();
    //     List<CookMethod> cookMethods = new ArrayList<>();
        
    //     RecipeDto reicpeEntity = RecipeDto.builder()
    //             .keypoint("asdasd")
    //             .isOpenable(1)
    //             .level("상")
    //             .cookingTime(15)
    //             .likeCnt(5213)
    //             .views(53412)
    //             // .cookMethods(recipeDto.getCookMethods())
    //             .build();


    //     reicpeEntity = recipeRepository.save(reicpeEntity);

    //     for (CookMethod cookMethod : recipeDto.getCookMethods()) {
    //         cookMethod.setMethodRecipe(reicpeEntity);
    //         cookMethodRepository.save(cookMethod);
    //     }
    //     for (Keyword keyword : recipeDto.getKeywordList()) {
    //         keyword.setKeywordRecipe(reicpeEntity);
    //         keywordRepository.save(keyword);
    //     }
    //     for (Ingredient ingredient : recipeDto.getIngredients()) {
    //         ingredientRepository.save(ingredient);
    //     }
    // }

}