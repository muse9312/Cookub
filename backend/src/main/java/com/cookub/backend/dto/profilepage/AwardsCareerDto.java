package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AwardsCareerDto {

    private Long awardsCareerId;
    private String awdName;
    private String getAwdDate;
    private String issuedAwd;
    private String compName;

    private Long userId;

}
