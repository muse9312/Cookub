package com.cookub.backend.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private String level;
    private String keypoint;
    private boolean isOpenable;
    private int cookingTime;
    private int likeCnt;
    private int views;
    @CreationTimestamp
    private LocalDateTime writtenDate;
    @UpdateTimestamp
    private LocalDateTime updatedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
