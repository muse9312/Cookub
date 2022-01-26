package com.cookub.backend.dto;

import com.cookub.backend.entity.Recipe;
import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDto {

    private Long ingredientId;
    private String ingredientName;
    private int amount;

    private Long recipeId;
    
}
