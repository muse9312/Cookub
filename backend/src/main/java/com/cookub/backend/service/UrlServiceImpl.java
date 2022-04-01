package com.cookub.backend.service;

import java.util.List;
import java.util.Optional;

import com.cookub.backend.dto.url.UrlDto;
import com.cookub.backend.entity.url.Url;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.UrlRepository;
import com.cookub.backend.repository.UserRepository;

import org.hibernate.annotations.FetchProfile.FetchOverride;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UrlServiceImpl implements UrlService {
    
    @Autowired
    private UrlRepository urlRepository;
    @Autowired
    private UserRepository userRepository;

    //url 발급 (등록)
    @Override
    @Transactional
    public void setUrl(UrlDto urlDto, Long userId) {
        User user = userRepository.findById(userId).get();
        Url urlEntity = Url.builder()
                .lastDate(urlDto.getLastDate())
                .privateKey(urlDto.getPirvateKey())
                .urlUser(user)
                .build();

        urlEntity = urlRepository.save(urlEntity); 
    }
    //url 접속 (확인)

    @Override
    @Transactional
    public List<Url> getUrl(Long userId) {
        User user = userRepository.findById(userId).get();
        List<Url> url = urlRepository.findByUser(user);
        return url;
    }

}