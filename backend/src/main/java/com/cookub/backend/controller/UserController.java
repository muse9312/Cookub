package com.cookub.backend.controller;

import com.cookub.backend.dto.user.UserDto;
import com.cookub.backend.entity.user.User;
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
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<User> signUp(@RequestBody UserDto userDto){
        Response response = new Response();
        User user = userService.signUp(userDto);
        if (user==null){
            new ResponseEntity<>(userService.signUp(userDto),null,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.signUp(userDto),null,HttpStatus.CREATED);
    }

    @PostMapping("/auth/signUp/multiPartFile")
    public ResponseEntity<User> signUpFile(UserDto userDto, @RequestParam("file") MultipartFile file){
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

        User user = userService.signUp(userDto);
        if (user==null){  
            new ResponseEntity<>(userService.signUp(userDto),null,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.signUp(userDto),null,HttpStatus.CREATED);

    }

    @PostMapping("/auth/signIn")
    public ResponseEntity<Map<String,Object>> signIn(@RequestBody UserDto userDto){
        Response response = new Response();
        HttpHeaders headers = new HttpHeaders();
        Map<String, Object> map = userService.signIn(userDto);
        if (!map.containsKey("user")){
            return new ResponseEntity<>(null,headers, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userService.signIn(userDto),headers, HttpStatus.OK);
    }

    @PostMapping("/auth/edit")
    public ResponseEntity<User> userEdit(@RequestBody UserDto userDto){
        Response response = new Response();
        User user = userService.editUser(userDto);
        if (user==null){
            return new ResponseEntity<>(user,null,HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(user,null,HttpStatus.OK);
        }
    }

    @DeleteMapping("/auth/{userId}")
    public ResponseEntity userDelete(@PathVariable Long userId){
        String result = userService.deleteUser(userId);
        if (result.equals("success")){
            return new ResponseEntity(null, null, HttpStatus.OK);
        }else{
            return new ResponseEntity(null, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/userCheck")
    public ResponseEntity<User> userCheck(@RequestBody UserDto userDto){
        User user = userService.checkUser(userDto);
        if (user==null){
            return new ResponseEntity<>(user,null,HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(user,null,HttpStatus.OK);
        }

    }
}
