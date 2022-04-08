package com.cookub.backend.dto.url;

import java.util.Date;

import com.cookub.backend.entity.user.User;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UrlDto {
    
    private Long url_Id;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date lastDate;
    //date type date는 "yyyy/MM/dd"
    private String pirvateKey;
    private String purpose; 

    private User user_id;
}
