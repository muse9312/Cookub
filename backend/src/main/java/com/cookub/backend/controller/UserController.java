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
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/signUp")
    public User signUp(UserDto userDto){
        return userService.signUp(userDto);
    }

    @PostMapping("/signIn")
    public ResultJson signIn(@RequestBody UserDto userDto){
        return userService.signIn(userDto);
    }
}
