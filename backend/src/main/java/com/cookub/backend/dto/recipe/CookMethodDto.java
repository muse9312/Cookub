package com.cookub.backend.dto.recipe;

import lombok.*;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CookMethodDto {

    private Long methodId;
    private int step;
    private String description;
    private String picture;

    private Long recipeId;
    
}
