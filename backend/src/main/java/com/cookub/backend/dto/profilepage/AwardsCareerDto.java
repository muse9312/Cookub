package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AwardsCareerDto {

    private Long awardsCareer_id;
    private String awdName;
    private String getAwdDate;

    private Long user_id;

}
