package com.cookub.backend.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
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
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private String username;
    @NotNull
    private String tel;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birth;
    @NotNull
    private String field;

    private String profile; //프로필 사진
    @NotNull
    private String grade;   //수준
    @NotNull
    private int career;     //경력년수
    @NotNull
    private String workPlace;
    @NotNull
    private String workNation;
    private String role;
    @CreationTimestamp
    private LocalDateTime createdDate;

}
