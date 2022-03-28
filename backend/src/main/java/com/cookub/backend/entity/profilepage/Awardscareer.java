package com.cookub.backend.entity.profilepage;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import com.cookub.backend.entity.user.User;

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
    private Long awardsCareer_id;
    private String awdName;
    private String getAwdDate;
    
    @JoinColumn(name = "user_id")
    private User user_id;

}
