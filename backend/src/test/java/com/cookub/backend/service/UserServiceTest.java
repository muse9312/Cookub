package com.cookub.backend.service;

import com.cookub.backend.dto.user.UserDto;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.UserRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Test
    void signUp() {
        //Tip! RED->GREEN->Refactoring

        //given : 무언가가 주어졌을 때,

        //when : 이 상황에

        //then : 이 결과가 나와야한다.
        //assertThat("결과값").isEqualTo("예상결과값");
        //assertTrue() assertEquals()

    }

    @Test
    void signIn() {
        String email="commGom@test.com";
        String password="1234";
        UserDto userDto = new UserDto();
        userDto.setEmail(email);
        userDto.setPassword(password);
        Map<String, Object> map = userService.signIn(userDto);
    }

    @Test
    void deleteUser() {
        Long userId=7L;
        userService.deleteUser(userId);
    }

    @Test
    void editUser() {

    }

    @Test
    void checkUser() {
    }
}