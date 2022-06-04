package com.cookub.backend.repository;

import com.cookub.backend.dto.user.UserDto;
import com.cookub.backend.entity.user.User;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;
    //회원가입 테스트
    @Test
    public void signUp(){
        UserDto userDto = UserDto.builder()
                .email("commGom@test.com")
                .password("1234")
                .username("한국표준")
                .tel("010-1111-2222")
                .birth(LocalDate.of(2022,01,19))
                .profile("/profile/a.jpeg")
                .field("한중양식")
                .grade("세미프로")
                .tel("010-9875-1234")
                .career(3)
                .workPlace("가디역")
                .workNation("캐나다")
                .build();
        userDto.setRole("ROLE_USER");
        String rawPasswd=userDto.getPassword();
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        String encPassword = passwordEncoder.encode(rawPasswd);
        userDto.setPassword(encPassword);
        User userEntity = User.builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .birth(userDto.getBirth())
                .career(userDto.getCareer())
                .email(userDto.getEmail())
                .field(userDto.getField())
                .grade(userDto.getGrade())
                .profile(userDto.getProfile())
                .role(userDto.getRole())
                .workNation(userDto.getWorkNation())
                .workPlace(userDto.getWorkPlace())
                .build();
        userRepository.save(userEntity);
    }

    @Test
    @DisplayName("ID로 회원정보 찾기")
    public void findUserInfoById () {
    //Tip! RED->GREEN->Refactoring

    //given : 무언가가 주어졌을 때,

    //when : 이 상황에

    //then : 이 결과가 나와야한다.
    //assertThat("결과값").isEqualTo("예상결과값");
    }

    @Test
    @DisplayName("ID값으로 회원정보 삭제하기")
    public void deleteUserInfoById () {
    //Tip! RED->GREEN->Refactoring

    //given : 무언가가 주어졌을 때,

    //when : 이 상황에

    //then : 이 결과가 나와야한다.
    //assertThat("결과값").isEqualTo("예상결과값");
    }

    @Test
    @DisplayName("")
    public void gitTest () {
        //Tip! RED->GREEN->Refactoring

        //given : 무언가가 주어졌을 때,

        //when : 이 상황에

        //then : 이 결과가 나와야한다.
        //assertThat("결과값").isEqualTo("예상결과값");
        //assertTrue() assertEquals()
        System.out.println("2022-01-23 Git Test 코드 작성 중!!!");
    }
}