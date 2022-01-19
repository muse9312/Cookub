package com.cookub.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Ingredient {
    @Id
    @GeneratedValue
    @Column(name = "ingredient_id")
    private Long ingredientId;
    private String ingredientName;
    private int amount;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}
