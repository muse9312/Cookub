package com.cookub.backend.entity.recipeE;

import com.cookub.backend.entity.recipeE.*;
import com.cookub.backend.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Recipe {
    
    @Id
    @GeneratedValue
    @Column(name = "recipe_id")
    private Long recipeId;
    private String title;
    private String level;
    private String keypoint;
    @Column(name = "is_openable")
    private int isOpenable;
    private int cookingTime;
    private String likeCnt;
    private int views;
    @CreationTimestamp
    private LocalDateTime writtenDate;
    @UpdateTimestamp
    private LocalDateTime updatedDate;
    private String foodImage;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @JsonManagedReference
    @OneToMany(mappedBy = "ingredientRecipe", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<Ingredient> ingredients = new ArrayList<>();
    @JsonManagedReference
    @OneToMany(mappedBy = "keywordRecipe", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<Keyword> keywordList = new ArrayList<>();
    @JsonManagedReference
    @OneToMany(mappedBy = "methodRecipe", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<CookMethod> cookMethods = new ArrayList<>();
    
    //    , cascade = CascadeType.PERSIST, orphanRemoval = true
    
}