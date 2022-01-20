package com.cookub.backend.service;

import com.cookub.backend.dto.UserDto;
import com.cookub.backend.entity.User;

public interface UserService {
    User signUp(UserDto userDto);
}
