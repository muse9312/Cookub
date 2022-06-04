package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkCareerDto {
    
    private Long workPlaceId;
    private String compName;
    private String location;
    private String jobPosition;
    private String period;

    private Long userId;
}
