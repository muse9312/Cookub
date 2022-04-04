package com.cookub.backend.service;

import java.util.List;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

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

    // Make Url (등록)
    @Override
    @Transactional
    public String setUrl(Long userId, UrlDto urlDto) {

        User user = userRepository.findById(userId).get();

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.DATE, 7);
        Date lastDate = cal.getTime();


        String privateKey = UUID.randomUUID().toString();

        Url urlEntity = Url.builder()
                .purpose(urlDto.getPurpose())
                .lastDate(lastDate)
                .privateKey(privateKey)
                .urlUser(user)
                .build();

        urlEntity = urlRepository.save(urlEntity); 

        return "";
    }

    // delete Url
    public String delUrl(Long urlId){
        urlRepository.deleteById(urlId);
        return "del";
    }

    // list Url 
    public List<Url> myUrl(Long userId){
        User user = userRepository.findById(userId).get();
        List<Url> list = urlRepository.findByUrlUser(user);

        return list;
    }

}