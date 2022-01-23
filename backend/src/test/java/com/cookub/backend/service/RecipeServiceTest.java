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

}
