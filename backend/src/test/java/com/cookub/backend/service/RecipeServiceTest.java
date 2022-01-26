package com.cookub.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;


@Service
@SpringBootTest

public interface RecipeServiceTest {
    
    @Test
    String myRecipe (Model model);

}