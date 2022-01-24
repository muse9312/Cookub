package com.cookub.backend.entity;

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

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}