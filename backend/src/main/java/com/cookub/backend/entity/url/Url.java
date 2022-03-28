package com.cookub.backend.entity.url;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Url {
    
    @Id
    @GeneratedValue
    @Column(name = "url_Id")
    private Long url_Id;
    private String recipeList;
    private String key;

    private Long user_id;
}
