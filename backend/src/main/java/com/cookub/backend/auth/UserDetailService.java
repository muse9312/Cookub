package com.cookub.backend.auth;


import com.cookub.backend.entity.user.User;
import com.cookub.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("UsernameNotFound [" + username + "]");
        }
        return createUser(user);
    }

    private UserDetail createUser(User user) {
        UserDetail userDetail = new UserDetail(user);
        userDetail.setRoles(Collections.singletonList(userDetail.getRole()));
        System.out.println(userDetail.getRoles().stream().collect(Collectors.toList()));
        return userDetail;
    }
}
