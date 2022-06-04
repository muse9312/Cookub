package com.cookub.backend.controller;

import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.service.CardService;
import com.cookub.backend.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/open")
public class CardController {
    @Autowired
    private CardService cardService;

    //공개 레시피 목록
    @GetMapping("/list")
    public Response cardList(){
        Response response = new Response();
        response.add("data",cardService.showOpenedCardList());
        return response;
    }

    //레시피 상세 조회
    @GetMapping("/detail/{recipeId}")
    public Response cardDetail(@PathVariable Long recipeId){
        Response response = new Response();
        response.add("data",cardService.showDetailedRecipe(recipeId));
        return response;
    }

    //좋아요 기능 해당하는 레시피 번호 받고-> +1한 후 공개레시피리스트 보내주기
    @GetMapping("/like/{recipeId}")
    public Response likeAdd(@PathVariable Long recipeId){
        Response response = new Response();
        response.add("data",cardService.clickLikeRecipe(recipeId));
        return response;
    }
    
}
