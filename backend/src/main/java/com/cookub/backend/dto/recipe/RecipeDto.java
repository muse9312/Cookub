package com.cookub.backend.dto.recipe;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.OneToMany;

import com.cookub.backend.entity.recipeE.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDto {

    private String title;
    private Long recipeId;
    private String level;
    private String keypoint;
    private int isOpenable;
    private int cookingTime;
    private String likeCnt;
    private int views;
    private String foodImage;
    @CreationTimestamp
    private LocalDateTime writtenDate;
    @UpdateTimestamp
    private LocalDateTime updatedDate;

    private Long userId;

    List<Ingredient> ingredients = new ArrayList<>();
    List<Keyword> keywordList = new ArrayList<>();
    List<CookMethod> cookMethods = new ArrayList<>();

}