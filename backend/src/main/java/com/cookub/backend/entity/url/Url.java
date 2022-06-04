package com.cookub.backend.entity.url;


import java.util.Date;

import javax.persistence.*;

import com.cookub.backend.entity.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Url {

    @Id
    @GeneratedValue
    @Column(name = "url_Id")
    private Long urlId;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date lastDate;
    private String privateKey;
    private String purpose;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    
    private User urlUser;

}