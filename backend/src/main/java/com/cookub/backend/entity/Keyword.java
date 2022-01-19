package com.cookub.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
