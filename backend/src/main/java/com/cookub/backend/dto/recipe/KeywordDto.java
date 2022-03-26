package com.cookub.backend.dto.recipe;

import lombok.*;

import javax.persistence.*;

import com.cookub.backend.entity.recipeE.Recipe;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class KeywordDto {

    private Long keywordId;
    private String keywordName;

    private Long recipeId;
    
}