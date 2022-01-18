package com.cookub.backend.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
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
    private String career;
    private int workingYears;
    private String workPlace;
    private String workNation;
    @CreationTimestamp
    private LocalDateTime createdDate;

}
