package com.cookub.backend.service;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;
import com.cookub.backend.util.ResultJson;
import org.springframework.web.bind.annotation.RequestBody;

public interface UserService {
    ResultJson signUp(UserDto userDto);
    ResultJson signIn(UserDto userDto);
    ResultJson deleteUser(Long userId);
    ResultJson editUser(UserDto userDto);
    ResultJson checkUser(UserDto userDto);
}
