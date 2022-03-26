package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EtcDto {
    
    private Long etc_Id;
    private String point;
    private String pointpicture;

    private Long user_id;
}
