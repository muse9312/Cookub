package com.cookub.backend.dto.url;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class urlDto {
    private Long url_Id;
    private String recipeList;
    private String key;

    private Long user_id;
}
