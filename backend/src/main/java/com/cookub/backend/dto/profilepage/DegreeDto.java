package com.cookub.backend.dto.profilepage;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DegreeDto {
    
    private Long degreeId;
    private String education;
    private String major;
    private String graduation;

    private Long userId;
}