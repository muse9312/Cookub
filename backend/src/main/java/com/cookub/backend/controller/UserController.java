package com.cookub.backend.controller;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.exception.StorageException;
import com.cookub.backend.repository.UserRepository;
import com.cookub.backend.service.StorageService;
import com.cookub.backend.service.UserService;
import com.cookub.backend.util.JwtUtil;
import com.cookub.backend.util.Response;
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
    public Response signUp(UserDto userDto, @RequestParam("file") MultipartFile file){
        Response response = new Response();
        System.out.println(userDto.getBirth());
        userDto.setProfile(file.getOriginalFilename());
        String message = "You successfully uploaded " + file.getOriginalFilename() + "!";
        try {
            storageService.store(file);
        } catch (StorageException e) {
            message = "Something happened with file " + file.getOriginalFilename() + ".";
        }
        response.add("data",userService.signUp(userDto));
        return response;
    }

    @PostMapping("/auth/signIn")
    public Response signIn(@RequestBody UserDto userDto){
        Response response = new Response();

        response.add("data",userService.signIn(userDto));
        return response;
    }

    @PutMapping("/edit")
    public Response userEdit(UserDto userDto){
        Response response = new Response();

        response.add("data",userService.editUser(userDto));
        return response;
    }

    @DeleteMapping("/{userId}")
    public Response userDelete(@PathVariable Long userId){
        Response response = new Response();

        response.add("data",userService.deleteUser(userId));
        return response;
    }

    @PostMapping("/userCheck")
    public Response userCheck(UserDto userDto){
        Response response = new Response();

        response.add("data",userService.checkUser(userDto));
        return response;
    }
}
