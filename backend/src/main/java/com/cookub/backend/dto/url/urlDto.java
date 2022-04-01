package com.cookub.backend.dto.url;

import java.util.Date;

import com.cookub.backend.entity.user.User;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UrlDto {
    
    private Long url_Id;
    private Date lastDate;
    //date type date는 "yyyy/MM/dd"
    //time은 "hh:mm:ss a"
    private String pirvateKey;

    private User user_id;
}