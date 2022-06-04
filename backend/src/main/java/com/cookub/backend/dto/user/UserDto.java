package com.cookub.backend.dto.user;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.profilepage.WorkCareer;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long userId;
    private String email;
    private String password;
    private String username;
    private String tel;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birth;
    private String field;
    private String grade;   //수준
    private int career;     //경력년수
    private String workPlace;
    private String workNation;
    private String profile;
    private String role;
    @CreationTimestamp
    private LocalDateTime createdDate;

    List<AwardsCareer> awardsCareers = new ArrayList<>();
    List<Certification> certifications = new ArrayList<>();
    List<Degree> degrees = new ArrayList<>();
    List<WorkCareer> workPlaces = new ArrayList<>();

}