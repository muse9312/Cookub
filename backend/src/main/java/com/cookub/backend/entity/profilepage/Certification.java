package com.cookub.backend.entity.profilepage;

import javax.persistence.*;

import com.cookub.backend.entity.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.*;

@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Certification {
    
    @Id
    @GeneratedValue
    @Column(name = "certification_id")
    private Long certificationId;
    private String certName;
    private String getCertDate;
    private String issuedCert;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User certificationUser;

}