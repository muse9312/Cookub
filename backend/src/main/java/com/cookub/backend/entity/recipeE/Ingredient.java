package com.cookub.backend.entity.recipeE;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Ingredient {
    @Id
    @GeneratedValue
    @Column(name = "ingredient_id")
    private Long ingredientId;
    private String ingredientName;
    private String amount;
    @JsonBackReference
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "recipe_id")
    private Recipe ingredientRecipe;
}