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
public class Etc {
    
    @Id
    @GeneratedValue
    @Column(name = "etc_id")
    private Long etcId;
    private String point;
    private String pointpicture;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User etcUser;

}
