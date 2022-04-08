package com.cookub.backend.service;

import java.util.Optional;

import com.cookub.backend.dto.recipe.RecipeDto;
import com.cookub.backend.entity.recipeE.*;
import com.cookub.backend.repository.CookMethodRepository;
import com.cookub.backend.repository.IngredientRepository;
import com.cookub.backend.repository.KeywordRepository;
import com.cookub.backend.repository.RecipeRepository;
import com.cookub.backend.repository.UserRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class RecipeServiceImplTest {

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
    UserRepository userRepository;

    // Tip! RED->GREEN->Refactoring

    // given : 무언가가 주어졌을 때,

    // when : 이 상황에

    // then : 이 결과가 나와야한다.
    // assertThat("결과값").isEqualTo("예상결과값");
    // assertTrue() assertEquals()

    // 레시피 등록 테스트
    @Test
    void setRecipe(RecipeDto recipeDto) {

        // cookMethod 객체 생성
        CookMethod cookMethodObj = CookMethod.builder()
                .description("description1")
                .picture("picture1")
                .step(1)
                .build();

        CookMethod cookMethodObj2 = CookMethod.builder()
                .description("description2")
                .picture("picture2")
                .step(2)
                .build();

        List<CookMethod> cookMethodsTest = null;

        cookMethodsTest.add(0, cookMethodObj);
        cookMethodsTest.add(1, cookMethodObj2);

        // keyword 객체 생성
        Keyword keywordObj = Keyword.builder()
                .keywordName("keywordName1")
                .build();
        Keyword keywordObj2 = Keyword.builder()
                .keywordName("keywordName2")
                .build();

        List<Keyword> keywordsTest = null;

        keywordsTest.add(0, keywordObj);
        keywordsTest.add(1, keywordObj2);

        // ingredient 객체 생성
        Ingredient ingredientObj1 = Ingredient.builder()
                .amount("amount1")
                .ingredientName("ingredientName1")
                .build();

        Ingredient ingredientObj2 = Ingredient.builder()
                .amount("amount2")
                .ingredientName("ingredientName2")
                .build();

        List<Ingredient> ingredientsTest = null;
        ingredientsTest.add(0, ingredientObj1);
        ingredientsTest.add(1, ingredientObj2);

        Recipe recipeEntity = Recipe.builder()
                .title("dd")
                .keypoint("20d")
                .isOpenable(1)
                .level("상")
                .cookingTime(1)
                .likeCnt("asd")
                .views(0)
                .ingredients(ingredientsTest)
                .keywordList(keywordsTest)
                .cookMethods(cookMethodsTest)
                // ingredients:[{"ingredientName":"재료1","amount":10},{"ingredientName":"재료2","amount":50}],
                // keywordList:[{"keywordName":"키워드1"},{"keywordName":"키워드2"}]
                // .cookMethods(recipeDto.getCookMethods();
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
    }

    // 레시피 수정 테스트
    @Test
    void editRecipe() {
        Long testId = 3L;
        Optional<Recipe> byId = recipeRepository.findById(testId);
        if (byId.isPresent()) {

            // cookMethod 객체 생성
            CookMethod cookMethodObj = CookMethod.builder()
                    .methodId(7L)
                    // meyhod table id 값 받아서 진행
                    .description("description1")
                    .picture("picture1")
                    .step(1)
                    .build();

            CookMethod cookMethodObj2 = CookMethod.builder()
                    .methodId(8L)
                    .description("description2")
                    .picture("picture2")
                    .step(2)
                    .build();

            List<CookMethod> cookMethodsTest = new ArrayList<CookMethod>();

            cookMethodsTest.add(0, cookMethodObj);
            cookMethodsTest.add(1, cookMethodObj2);

            // keyword 객체 생성
            Keyword keywordObj = Keyword.builder()
                    .keywordId(5L)
                    .keywordName("keywordName1")
                    .build();
            Keyword keywordObj2 = Keyword.builder()
                    .keywordId(6L)
                    .keywordName("keywordName2")
                    .build();

            List<Keyword> keywordsTest = new ArrayList<Keyword>();

            keywordsTest.add(0, keywordObj);
            keywordsTest.add(1, keywordObj2);

            // ingredient 객체 생성
            Ingredient ingredientObj1 = Ingredient.builder()
                    .ingredientId(5L)
                    .amount("amount1")
                    .ingredientName("ingredientName1")
                    .build();

            Ingredient ingredientObj2 = Ingredient.builder()
                    .ingredientId(6L)
                    .amount("amount2")
                    .ingredientName("ingredientName2")
                    .build();

            List<Ingredient> ingredientsTest = new ArrayList<Ingredient>();

            ingredientsTest.add(0, ingredientObj1);
            ingredientsTest.add(1, ingredientObj2);

            Recipe recipeEntity = byId.get();
            recipeEntity.setTitle("recipeDto.getTitle()");
            recipeEntity.setKeypoint("recipeDto.getKeypoint()");
            recipeEntity.setIsOpenable(1);
            recipeEntity.setLevel("recipeDto.getLevel()");
            recipeEntity.setCookingTime(1);
            recipeEntity.setLikeCnt("recipeDto.getLikeCnt()");
            recipeEntity.setViews(0);
            recipeEntity.setFoodImage("recipeDto.getFoodImage()");
            recipeEntity.setCookMethods(cookMethodsTest);
            recipeEntity.setKeywordList(keywordsTest);
            recipeEntity.setIngredients(ingredientsTest);
            // .cookMethods(recipeDto.getCookMethods())

            recipeRepository.save(recipeEntity);

            for (CookMethod cookMethod : recipeEntity.getCookMethods()) {
                cookMethod.setMethodRecipe(recipeEntity);
                cookMethodRepository.save(cookMethod);
            }
            for (Keyword keyword : recipeEntity.getKeywordList()) {
                keyword.setKeywordRecipe(recipeEntity);
                keywordRepository.save(keyword);
            }
            for (Ingredient ingredient : recipeEntity.getIngredients()) {
                ingredient.setIngredientRecipe(recipeEntity);
                ingredientRepository.save(ingredient);
            }

        } else {
        }

    }

    // 레시피 목록 조회 테스트
    @Test
    void myRecipe() {

        // Tip! RED->GREEN->Refactoring

        // given : 무언가가 주어졌을 때,

        // when : 이 상황에

        // then : 이 결과가 나와야한다.
        // assertThat("결과값").isEqualTo("예상결과값");
        // assertTrue() assertEquals()

    }

    // 레시피 상세 정보 조회 테스트
    @Test
    void findRecipe() {

        Recipe recipe = recipeRepository.findById(2L).get();

        System.out.println(recipe);
        // Tip! RED->GREEN->Refactoring

        // given : 무언가가 주어졌을 때,

        // when : 이 상황에

        // then : 이 결과가 나와야한다.
        // assertThat("결과값").isEqualTo("예상결과값");
        // assertTrue() assertEquals()

    }

    // 레시피 삭제 테스트
    @Test
    void delRecipe() {

        recipeRepository.deleteById(30L);
        // cascade 사용하였을 경우, 삭제 완료 되었음.
        // 이후, 값 다시 넣을 경우, null로 입력되므로, 점검 필요

        // Tip! RED->GREEN->Refactoring

        // given : 무언가가 주어졌을 때,

        // when : 이 상황에

        // then : 이 결과가 나와야한다.
        // assertThat("결과값").isEqualTo("예상결과값");
        // assertTrue() assertEquals()

    }

    // 레시피 검색 테스트
    @Test
    void searchRecipe() {
        String searchingName = "양파";

        List<Recipe> searchRecipe = recipeRepository.findByisOpenable(1);
        List<Ingredient> searchIngredient = ingredientRepository.findByingredientName(searchingName);

        List<Recipe> recipeList = new ArrayList<Recipe>();
        List<Ingredient> findIngredient = new ArrayList<Ingredient>();

        // searching the openable recipe
        for (int i = 0; i < searchRecipe.size(); i++) {

            // same Ingredient Test in recipeList
            if (searchRecipe.get(i).getIngredients().iterator().equals(searchIngredient.iterator())) {
                recipeList.add(searchRecipe.get(i));
            }

        }
        for (int u = 0; u < recipeList.size(); u++) {
            System.out.println(recipeList.indexOf(u));
        }
        
    }
    // Tip! RED->GREEN->Refactoring

    // given : 무언가가 주어졌을 때,

    // when : 이 상황에

    // then : 이 결과가 나와야한다.
    // assertThat("결과값").isEqualTo("예상결과값");
    // assertTrue() assertEquals()

    @Test
    void simpleTest() {
        
    }

}