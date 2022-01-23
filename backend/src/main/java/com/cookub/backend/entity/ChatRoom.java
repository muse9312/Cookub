package com.cookub.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
