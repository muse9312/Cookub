package com.cookub.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import com.cookub.backend.dto.url.UrlDto;
import com.cookub.backend.entity.url.Url;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface UrlService {

    // url 발급( 등록 ) 
    void setUrl(UrlDto urlDto, Long userId);

    // url 접속 ( 확인 )
    List<Url> getUrl( Long userId);

}   
