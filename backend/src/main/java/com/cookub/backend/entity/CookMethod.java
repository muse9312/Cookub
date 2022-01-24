package com.cookub.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CookMethod {
    @Id
    @GeneratedValue
    @Column(name = "method_id")
    private Long methodId;
    private int step;
    private String description;
    private String picture;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe methodRecipe;
}
