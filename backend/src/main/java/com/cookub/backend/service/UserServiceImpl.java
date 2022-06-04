package com.cookub.backend.service;

import com.cookub.backend.dto.user.UserDto;
import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.util.JwtUtil;
import com.cookub.backend.util.ResultCode;
import com.cookub.backend.util.ResultJson;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final JwtUtil jwtUtil;
    @Autowired
    private UserRepository userRepository;

    @Override
    public User signUp(UserDto userDto) {
        //id 중복확인
        System.out.println("signUp email 확인 : " + userDto.getEmail());
        User checkUser = userRepository.findByEmail(userDto.getEmail());
        System.out.println("signUp user 확인 : " + checkUser);
        if (checkUser == null) {
            userDto.setRole("ROLE_USER");
            String rawPasswd = userDto.getPassword();
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
            User save = userRepository.save(userEntity);
            return save;
        } else {
            return null;
        }

    }

    @Override
    public Map<String,Object> signIn(UserDto userDto) {
        User userEntity = userRepository.findByEmail(userDto.getEmail());
        String token = "";
        HashMap<String, Object> map = new HashMap<>();
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        // userEntity = null => 
        if(userEntity == null){
            return null;
        }
        else if (userEntity != null && passwordEncoder.matches(userDto.getPassword(), userEntity.getPassword())) {
            System.out.println("3. ID 확인 후 token 발급");
            token = "Bearer " + jwtUtil.generateToken(userEntity);
            System.out.println("6. 토큰 완성:" + token);
            map.put("token",token);
            map.put("user",userEntity);
            return map;
        } else {
            return map;
        }
    }

    @Override
    public String deleteUser(Long userId) {
        ResultJson resultJson = new ResultJson();
        Optional<User> optionalUser = userRepository.findById(userId);
        String result="";
        if (optionalUser.isPresent()) {
            userRepository.delete(optionalUser.get());
            result="success";
        } else {
            result="fail";
        }
        return result;
    }

    @Override
    public User editUser(UserDto userDto) {
        Optional<User> byId = userRepository.findById(userDto.getUserId());
        if (byId.isPresent()) {
            User userEntity = byId.get();
            String rawPasswd = userDto.getPassword();
            PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
            String encPassword = passwordEncoder.encode(rawPasswd);
            userEntity.setPassword(encPassword);
            userEntity.setCareer(userDto.getCareer());
            userEntity.setField(userDto.getField());
            userEntity.setGrade(userDto.getGrade());
            userEntity.setWorkNation(userDto.getWorkNation());
            userEntity.setWorkPlace(userDto.getWorkPlace());
            userEntity.setTel(userDto.getTel());
            userRepository.save(userEntity);
            return userEntity;
        } else {
            return null;
        }
    }

    @Override
    public User checkUser(UserDto userDto) {
//        String rawPasswd=userDto.getPassword();
//        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        String encPassword = passwordEncoder.encode(rawPasswd);
//        User userEntity = userRepository.findByEmailAndPassword(userDto.getEmail(), encPassword);
        User userEntity = userRepository.findByEmail(userDto.getEmail());
        System.out.println(userEntity);
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        if (userEntity != null && passwordEncoder.matches(userDto.getPassword(), userEntity.getPassword())) {
            return userEntity;
        } else {
            return null;
        }

    }

}
