package com.cookub.backend.controller;

import com.cookub.backend.entity.Recipe;
import com.cookub.backend.util.Response;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
    @PostMapping("/")
    public Response registerRecipe(@RequestBody Recipe recipe){
        System.out.println(recipe);
        Response response = new Response();
        response.add("recipe",recipe);
        return response;
    }
}
