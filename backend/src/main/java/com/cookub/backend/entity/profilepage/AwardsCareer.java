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
public class AwardsCareer {

    @Id
    @GeneratedValue
    @Column(name = "awardsCareer_id")
    private Long awardsCareerId;
    private String awdName;
    private String getAwdDate;
    private String issuedAwd;
    private String compName;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User careerUser;

}
