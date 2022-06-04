package com.cookub.backend.controller;

import java.util.ArrayList;
import java.util.List;

import com.cookub.backend.dto.recipe.IngredientDto;
import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.entity.recipeE.Ingredient;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.repository.CookMethodRepository;
import com.cookub.backend.repository.IngredientRepository;
import com.cookub.backend.repository.KeywordRepository;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.UrlRepository;
import com.cookub.backend.repository.UserRepository;
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
    @Autowired
    private UrlRepository urlRepository;

    @PostMapping("/recipe/{userId}")
    public Response registerRecipe(@RequestBody RecipeDto recipeDto,@PathVariable Long userId){
        System.out.println(recipeDto);
        Response response = new Response();
        recipeService.setRecipe(recipeDto, userId);
        response.add("recipe",recipeDto);
        return response;
    }

    // Post Test (returnType Test)
    @PostMapping(value = "/search")
    public boolean searchRecipe(@RequestBody IngredientDto ingDto) {
        String ingredientN = ingDto.getIngredientName();
        
        List<Recipe> searchRecipe = recipeRepository.findByisOpenable(1);
        List<Ingredient> searchIngredient = ingredientRepository.findByingredientName(ingredientN);

        List<Recipe> recipeList = new ArrayList<Recipe>();
        List<Ingredient> findIngredient = new ArrayList<Ingredient>();

        // searching the openable recipe
        for (int i = 0; i < searchRecipe.size(); i++) {

            // same Ingredient Test in recipeList
            System.out.println(searchRecipe.get(i).getIngredients());
            System.out.println(searchIngredient);
            
            if (searchRecipe.get(i).getIngredients().equals(searchIngredient)) {
                System.out.println(searchRecipe.get(i).getIngredients());
                recipeList.add(searchRecipe.get(i));
            }
        }

        for (int u = 0; u < recipeList.size(); u++) {
            System.out.println(recipeList.indexOf(u));
        }

        return (searchRecipe.get(3).getIngredients().equals(searchIngredient));
    }
    
}