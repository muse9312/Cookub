package com.cookub.backend.dto;

import com.cookub.backend.entity.User;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDto {

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


    private Long userId;
}
