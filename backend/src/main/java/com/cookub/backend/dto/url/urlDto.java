package com.cookub.backend.dto.url;

import com.cookub.backend.entity.user.User;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UrlDto {
    
    private Long url_Id;
    private String recipeList;
    private String key;

    private User user_id;
}
