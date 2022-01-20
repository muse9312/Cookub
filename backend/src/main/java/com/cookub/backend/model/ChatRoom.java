package com.cookub.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class ChatRoom {
    @Id
    @GeneratedValue
    @Column(name = "room_id")
    private Long roomId;

    @ManyToOne
    @JoinColumn(name = "requester")
    private User requester;

    @ManyToOne
    @JoinColumn(name = "respondent")
    private User respondent;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}
