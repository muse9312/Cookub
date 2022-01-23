package com.cookub.backend.service;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.util.JwtUtil;
import com.cookub.backend.util.ResultCode;
import com.cookub.backend.util.ResultJson;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final JwtUtil jwtUtil;
    @Autowired
    private UserRepository userRepository;

    @Override
    public ResultJson signUp(UserDto userDto) {
        ResultJson resultJson = new ResultJson();
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
            resultJson.setCode(ResultCode.CREATED.getCode());
            resultJson.setMsg(ResultCode.CREATED.getMsg());
            resultJson.setResult(save);
            return resultJson;
        } else {
            resultJson.setCode(ResultCode.CONFLICT.getCode());
            resultJson.setMsg(ResultCode.CONFLICT.getMsg());
        }

        return resultJson;
    }

    @Override
    public ResultJson signIn(UserDto userDto) {
        ResultJson resultJson = new ResultJson();
        User userEntity = userRepository.findByEmail(userDto.getEmail());
        String token = "";
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        if (userEntity != null && passwordEncoder.matches(userDto.getPassword(), userEntity.getPassword())) {
            System.out.println("3. ID 확인 후 token 발급");
            token = "Bearer " + jwtUtil.generateToken(userEntity);
            System.out.println("6. 토큰 완성:" + token);
        } else {
            resultJson.setCode(ResultCode.LOGIN_FAIL.getCode());
            resultJson.setMsg(ResultCode.LOGIN_FAIL.getMsg());
            return resultJson;
        }
        resultJson.setCode(ResultCode.SUCCESS.getCode());
        resultJson.setMsg(ResultCode.SUCCESS.getMsg());
        resultJson.setToken(token);
        return resultJson;
    }

    @Override
    public ResultJson deleteUser(Long userId) {
        ResultJson resultJson = new ResultJson();
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            resultJson.setCode(ResultCode.SUCCESS.getCode());
            resultJson.setMsg(ResultCode.SUCCESS.getMsg());
            userRepository.delete(optionalUser.get());
        } else {
            resultJson.setCode(ResultCode.BAD_REQUEST.getCode());
            resultJson.setMsg(ResultCode.BAD_REQUEST.getMsg());
        }
        return resultJson;
    }

    @Override
    public ResultJson editUser(UserDto userDto) {
        ResultJson resultJson = new ResultJson();
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
            resultJson.setCode(ResultCode.CREATED.getCode());
            resultJson.setMsg(ResultCode.CREATED.getMsg());
            resultJson.setResult(userEntity);
        } else {
            resultJson.setCode(ResultCode.BAD_REQUEST.getCode());
            resultJson.setMsg(ResultCode.BAD_REQUEST.getMsg());
        }
        return resultJson;
    }

    @Override
    public ResultJson checkUser(UserDto userDto) {
        ResultJson resultJson = new ResultJson();
//        String rawPasswd=userDto.getPassword();
//        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        String encPassword = passwordEncoder.encode(rawPasswd);
//        User userEntity = userRepository.findByEmailAndPassword(userDto.getEmail(), encPassword);
        User userEntity = userRepository.findByEmail(userDto.getEmail());
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        if (userEntity != null && passwordEncoder.matches(userDto.getPassword(), userEntity.getPassword())) {

            resultJson.setCode(ResultCode.SUCCESS.getCode());
            resultJson.setMsg(ResultCode.SUCCESS.getMsg());
            resultJson.setResult(userEntity);
        } else {
            resultJson.setCode(ResultCode.BAD_REQUEST.getCode());
            resultJson.setMsg(ResultCode.BAD_REQUEST.getMsg());
        }
        return resultJson;
    }

}
