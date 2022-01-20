package com.cookub.backend.controller;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.service.UserService;
import com.cookub.backend.util.JwtUtil;
import com.cookub.backend.util.ResultCode;
import com.cookub.backend.util.ResultJson;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    private final JwtUtil jwtUtil;

    @PostMapping("/signUp")
    public User signUp(UserDto userDto){
        return userService.signUp(userDto);
    }

    @PostMapping("/signIn")
    public ResultJson signIn(@RequestBody UserDto userDto){
        System.out.println("2. signIn : "+userDto.getEmail()+", "+userDto.getPassword());
        ResultJson resultJson = new ResultJson();
        User userEntity = userRepository.findByEmail(userDto.getEmail());
        String token = "";
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        if (userEntity != null && passwordEncoder.matches(userDto.getPassword(), userEntity.getPassword())) {
            System.out.println("3. ID 확인 후 token 발급");
            token = "Bearer "+jwtUtil.generateToken(userEntity);
            System.out.println("6. 토큰 완성:"+token);
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
}
