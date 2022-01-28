package com.cookub.backend.service;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.util.ResultJson;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

public interface UserService {
    User signUp(UserDto userDto);
    Map<String,Object> signIn(UserDto userDto);
    ResultJson deleteUser(Long userId);
    User editUser(UserDto userDto);
    User checkUser(UserDto userDto);
}
