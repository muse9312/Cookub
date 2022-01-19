package com.cookub.backend.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long userId;
    private String email;
    private String password;
    private String username;
    private String tel;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime birth;
    private String field;
    private String profile; //프로필 사진
    private String grade;   //수준
    private int career;     //경력년수
    private String workPlace;
    private String workNation;
    @CreationTimestamp
    private LocalDateTime createdDate;

}
