package com.cookub.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Keyword {
    @Id
    @GeneratedValue
    @Column(name = "keyword_id")
    private Long keywordId;
    private String keywordName;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}
