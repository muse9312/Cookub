package com.cookub.backend.controller;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.exception.StorageException;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.service.StorageService;
import com.cookub.backend.service.UserService;
import com.cookub.backend.util.JwtUtil;
import com.cookub.backend.util.ResultCode;
import com.cookub.backend.util.ResultJson;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private StorageService storageService;

    @PostMapping("/auth/signUp")
    public ResultJson signUp(UserDto userDto,@RequestParam("file") MultipartFile file){
        System.out.println(userDto.getBirth());
        userDto.setProfile(file.getOriginalFilename());
        String message = "You successfully uploaded " + file.getOriginalFilename() + "!";
        try {
            storageService.store(file);
        } catch (StorageException e) {
            message = "Something happened with file " + file.getOriginalFilename() + ".";
        }
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
