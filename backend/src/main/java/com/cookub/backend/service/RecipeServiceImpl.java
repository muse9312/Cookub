package com.cookub.backend.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import com.cookub.backend.dto.recipe.CookMethodDto;
import com.cookub.backend.dto.recipe.IngredientDto;
import com.cookub.backend.dto.recipe.KeywordDto;
import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.dto.url.UrlDto;
import com.cookub.backend.entity.recipeE.*;
import com.cookub.backend.entity.recipeE.Ingredient;
import com.cookub.backend.entity.recipeE.Keyword;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.entity.url.Url;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.CookMethodRepository;
import com.cookub.backend.repository.IngredientRepository;
import com.cookub.backend.repository.KeywordRepository;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.UrlRepository;
import com.cookub.backend.repository.UserRepository;
import com.fasterxml.jackson.annotation.JsonCreator;

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
    @Autowired
    private UrlRepository urlRepository;

    // 레시피 등록 (레시피)
    @Override
    @Transactional
    @JsonCreator
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
                System.out.println(ingredient.getIngredientId());
                System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@");
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

    // private 레시피 조회
    @Override
    public List<Recipe> myPrivate(String key) {
        Url url = urlRepository.findByPrivateKey(key);
        if (url == null)
            return null;

        if (checkEnable(url)) {

            User user = url.getUrlUser();
            List<Recipe> list = recipeRepository.findByUser(user);
            return list;
        } else {
            return null;
        }

    }

    // 유효성 검사
    public boolean checkEnable(Url url) {
        Date currentDate = new Date();
        if (currentDate.getTime() > url.getLastDate().getTime())
            return false;
        else
            return true;
    }

    // 레시피 리스트 삭제
    @Override
    public String delRecipe(Long recipeId) {

        recipeRepository.deleteById(recipeId);
        return "del";

    }

    // 내 레시피 상세 정보 조회
    @Override
    public Recipe findRecipe(Long recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).get();
        return recipe;
    }

    // 레시피 검색
    @Override
    public List<Recipe> searchRecipe(String searchingName) {
        List<Recipe> searchRecipe = recipeRepository.findByisOpenable(1);
        List<Ingredient> searchIngredient = ingredientRepository.findByingredientName(searchingName);

        List<Recipe> recipeList1 = new ArrayList<Recipe>();
        List<Recipe> recipeList2 = new ArrayList<Recipe>();
        
        int u = 0;
        // searching the openable recipe
        for (int i = 0; i < searchRecipe.size(); i++) {

            int o = 0;
            
            // same Ingredient Test in recipeList
            for (o = 0; o < searchRecipe.get(i).getIngredients().size(); o++) {
                if (searchRecipe.get(i).getIngredients().get(o).getIngredientName().equals(searchingName)) {
                    recipeList1.add(searchRecipe.get(i));
                }
            }
        }
        // remove overlap

        // set in HashSet
        HashSet<Recipe> set = new HashSet<>();
        for (u=0; u < recipeList1.size() ; u++){
            set.addAll(recipeList1);
        }
        // set in Array
        recipeList2.addAll(set);

        return recipeList2;
    }

}