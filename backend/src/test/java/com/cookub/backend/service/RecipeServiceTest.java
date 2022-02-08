package com.cookub.backend.service;

import com.cookub.backend.dto.IngredientDto;
import com.cookub.backend.entity.Ingredient;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.entity.Ingredient.IngredientBuilder;
import com.cookub.backend.repository.IngredientRepository;
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
    

    @Test
    void delete() {
        recipeService.delRecipe(6L);
    }

    @Test
    public void search() {

        for (int i=0 ; i < recipeService.myRecipe(1L).size() ; i++) {
            System.out.println(recipeService.myRecipe(1L).get(i));
        }
    }

    @Test
    public void putIngredient1() {
        IngredientDto ingredientDto =IngredientDto.builder()
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

        // 내 레시피 상세 정보 조회


}