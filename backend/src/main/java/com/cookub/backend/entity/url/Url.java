package com.cookub.backend.entity.url;


import javax.persistence.*;

import com.cookub.backend.entity.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.*;
@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Url {

    @Id
    @GeneratedValue
    private Long url_Id;
    private String recipeList;
    private String key;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User urlUser;

}