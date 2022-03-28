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
public class Etc {
    
    @Id
    @GeneratedValue
    @Column(name = "etc_id")
    private Long etc_Id;
    private String point;
    private String pointpicture;

    @JoinColumn(name = "user_id")
    private User user_id;
}
