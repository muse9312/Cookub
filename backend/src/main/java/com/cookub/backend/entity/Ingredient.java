package com.cookub.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Ingredient {
    @Id
    @GeneratedValue
    @Column(name = "ingredient_id")
    private Long ingredientId;
    private String ingredientName;
    private int amount;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe ingredientRecipe;
}