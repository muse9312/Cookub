package com.cookub.backend.controller;

import com.cookub.backend.dto.RecipeDto;
import com.cookub.backend.entity.Recipe;
import com.cookub.backend.service.RecipeService;
import com.cookub.backend.util.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    RecipeService recipeService;

    @PostMapping("/recipe/{userId}")
    public Response registerRecipe(@RequestBody RecipeDto recipeDto,@PathVariable Long userId){
        System.out.println(recipeDto);
        Response response = new Response();
        recipeService.setRecipe(recipeDto, userId);
        response.add("recipe",recipeDto);
        return response;
    }
}