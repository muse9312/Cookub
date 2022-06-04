package com.cookub.backend.dto.recipe;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDto {

    private Long ingredientId;
    private String ingredientName;
    private String amount;

    private Long recipeId;
    
}
