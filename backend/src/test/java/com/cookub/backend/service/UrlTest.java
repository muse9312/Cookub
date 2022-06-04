package com.cookub.backend.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.cookub.backend.entity.url.Url;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.UrlRepository;
import com.cookub.backend.repository.UserRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UrlTest {

    @Autowired
    private UrlRepository urlRepository;
    @Autowired
    private UserRepository userRepository;

     // Tip! RED->GREEN->Refactoring

        // given : 무언가가 주어졌을 때,

        // when : 이 상황에

        // then : 이 결과가 나와야한다.
        // assertThat("결과값").isEqualTo("예상결과값");
        // assertTrue() assertEquals()
    
    // Make Url
    @Test
    String makeUrl(){
        Long userId = 2L;
        String purpose = "삼성전자 미래전략팀 탕비실 요리사" ;
        User user = userRepository.findById(userId).get();

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.DATE, 7);
        Date lastDate = cal.getTime();

        String privateKey = UUID.randomUUID().toString();

        Url urlEntity = Url.builder()
                .purpose(purpose)
                .lastDate(lastDate)
                .privateKey(privateKey)
                .urlUser(user)
                .build();

        urlEntity = urlRepository.save(urlEntity); 

        return "";
    }

    // delete Url
    @Test
    String delUrl(){
        Long urlId = 3L;
        urlRepository.deleteById(urlId);
        return "del";
    }



    // List Url
    @Test
    List<Url> myUrl(){
        Long userId = 1L;
        User user = userRepository.findById(userId).get();
        List<Url> list = urlRepository.findByUrlUser(user);

        return list;
    }



    
}
