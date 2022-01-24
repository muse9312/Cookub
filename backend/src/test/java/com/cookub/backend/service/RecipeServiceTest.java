package com.cookub.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RecipeServiceTest {

    @Autowired

    RecipeService recipeService;

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

}