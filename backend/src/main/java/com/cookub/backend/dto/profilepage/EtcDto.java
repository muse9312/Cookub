package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EtcDto {
    
    private Long etcId;
    private String point;
    private String pointpicture;
  
    private Long userId;
}
