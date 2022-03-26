package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CertificationDto {
    private Long certification_id;
    private String certName;
    private String getcertdate;

    private Long user_id;
}
