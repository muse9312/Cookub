package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkPlaceDto {
    private Long workplace_Id;
    private String compName;
    private String location;
    private String jobPosition;
    private String period;

    private Long user_id;
}
