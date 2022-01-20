package com.cookub.backend.service;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User signUp(UserDto userDto) {
        //id 중복확인
        User checkUser = userRepository.findByEmail(userDto.getEmail());
        System.out.println("signUp user 확인 : "+checkUser);
        if (checkUser==null){
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
                    .tel(userDto.getTel())
                    .build();
            return userRepository.save(userEntity);
        }

        return null;
    }
}
