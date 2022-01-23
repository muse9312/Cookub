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

import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/auth/signUp")
    public ResultJson signUp(UserDto userDto){
        return userService.signUp(userDto);
    }

    @PostMapping("/auth/signIn")
    public ResultJson signIn(@RequestBody UserDto userDto){
        return userService.signIn(userDto);
    }

    @PutMapping("/edit")
    public ResultJson userEdit(UserDto userDto){
        return userService.editUser(userDto);
    }

    @DeleteMapping("/{userId}")
    public ResultJson userDelete(@PathVariable Long userId){
        return userService.deleteUser(userId);
    }

    @PostMapping("/userCheck")
    public ResultJson userCheck(UserDto userDto){
        return userService.checkUser(userDto);
    }
}
