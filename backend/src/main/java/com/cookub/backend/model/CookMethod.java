package com.cookub.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class CookMethod {
    @Id
    @GeneratedValue
    @Column(name = "method_id")
    private Long methodId;
    private int step;
    private String description;
    private String picture;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}
