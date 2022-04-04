package com.cookub.backend.entity.profilepage;

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
public class Degree {
    
    @Id
    @GeneratedValue
    @Column(name = "degree_id")
    private Long degreeId;
    private String education;
    private String major;
    private String graduation;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User degreeUser;

}
