package com.cookub.backend.entity.user;

import com.cookub.backend.entity.profilepage.AwardsCareer;
import com.cookub.backend.entity.profilepage.Certification;
import com.cookub.backend.entity.profilepage.Degree;
import com.cookub.backend.entity.profilepage.WorkCareer;
import com.cookub.backend.entity.recipeE.Recipe;
import com.cookub.backend.entity.url.Url;
import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;


import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


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

    
    
    @JsonManagedReference
    @OneToMany(mappedBy = "careerUser", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<AwardsCareer> awardsCareers = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "certificationUser", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<Certification> certifications = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "degreeUser", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<Degree> degrees = new ArrayList<>();
    
    @JsonManagedReference
    @OneToMany(mappedBy = "workPlaceUser", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<WorkCareer> workCareers = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "urlUser", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<Url> urls = new ArrayList<>();
    
}