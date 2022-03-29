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
public class WorkCareer {
    
    @Id
    @GeneratedValue
    @Column(name = "workPlace_id")
    private Long workPlaceId;
    private String compName;
    private String location;
    private String jobPosition;
    private String period;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User workPlaceUser;

}