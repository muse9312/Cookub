package com.cookub.backend.entity.profilepage;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;

import com.cookub.backend.entity.user.User;

import org.springframework.data.annotation.Id;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkPlace {
    
    @Id
    @GeneratedValue
    @Column(name = "workPlace_id")
    private Long workPlace_Id;
    private String compName;
    private String location;
    private String jobPosition;
    private String period;

    @JoinColumn(name = "user_id")
    private User user_id;
}
