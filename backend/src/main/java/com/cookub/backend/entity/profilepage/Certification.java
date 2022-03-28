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
public class Certification {
    
    @Id
    @GeneratedValue
    @Column(name = "certification_id")
    private Long certification_id;
    private String certName;
    private String getcertdate;

    @JoinColumn(name = "user_id")
    private User user_id;
}
