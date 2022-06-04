package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CertificationDto {
    private Long certificationId;
    private String certName;
    private String getCertDate;
    private String issuedCert;
    
    private Long userId;
}
