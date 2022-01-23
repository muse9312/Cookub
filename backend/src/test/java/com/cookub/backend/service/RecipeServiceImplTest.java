package com.cookub.backend.service;

import java.util.List;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.RecipeRepositoryTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class RecipeServiceImplTest implements RecipeServiceTest {

    @Autowired
    RecipeRepository recipeRepository;
    

    @Override
    public String myRecipe(Model model) {

        List<Recipe> list = recipeRepository.findAll();
        model.addAttribute("list", list);

        System.out.println(list);
        return "";

    }

}