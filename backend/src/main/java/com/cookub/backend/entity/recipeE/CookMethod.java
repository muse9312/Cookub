package com.cookub.backend.entity.recipeE;

import com.cookub.backend.entity.recipeE.Recipe;
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
public class CookMethod {
    @Id
    @GeneratedValue
    @Column(name = "method_id")
    private Long methodId;
    private int step;
    private String description;
    private String picture;
    @JsonBackReference 
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "recipe_id")
    private Recipe methodRecipe;
}