package com.cookub.backend.dto;

import com.cookub.backend.entity.Recipe;
import lombok.*;

import javax.persistence.*;


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
