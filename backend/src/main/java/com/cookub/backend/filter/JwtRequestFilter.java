package com.cookub.backend.filter;

import com.cookub.backend.auth.UserDetailService;
import com.cookub.backend.util.JwtUtil;
import com.cookub.backend.util.ResultCode;
import com.cookub.backend.util.ResultJson;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {
    private final JwtUtil jwtUtil;
    private final UserDetailService userDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String path = request.getRequestURI();
        System.out.println("JwtRequestFilter 에서 Path 값 :"+path);
        //아래 경로는 이 필터가 적용되지 않는다.
        if (path.startsWith("/user/auth")|
        path.startsWith("/swagger")|
        path.startsWith("/test")|
        path.startsWith("/mypage")|
        path.startsWith("/v2")|
        path.startsWith("/open")|
        path.startsWith("/profile")|
        path.startsWith("/url")
        ) {
            System.out.println("1. user 경로 필터 적용 안하고 들어옴");
            filterChain.doFilter(request, response);
            return;
        }
        System.out.println("Authorization Header 점검::::");
        final String authorizationHeader = request.getHeader("Authorization");
        String username = null;
        String token = null;
        HttpSession session = request.getSession();
        System.out.println(authorizationHeader);
        //Header에서 Bearer 부분 이하로 붙은 token을 파싱한다.
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            System.out.println(token);
            System.out.println("Authorization Header 점검2-1::::");
            token = authorizationHeader.substring(7);
            System.out.println(token);


        }
        username = jwtUtil.extractUsername(token);
        System.out.println("Authorization Header 점검2-2::::");

        if (username == null) {
            exceptionCall(response, "invalidToken");
            return;
        }
        UserDetails userDetails = userDetailService.loadUserByUsername(username);
        System.out.println("Authorization Header 점검3::::");

        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
                    = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            session.setAttribute("email", username);
        }

        filterChain.doFilter(request, response);
    }

    private HttpServletResponse exceptionCall(HttpServletResponse response, String errorType) throws IOException {
      System.out.println("Authorization Header 점검4::::");
        
      ResultJson resultJson = new ResultJson();
        if (errorType.equals("invalidToken")) {
            resultJson.setCode(ResultCode.INVALID_TOKEN.getCode());
            resultJson.setMsg(ResultCode.INVALID_TOKEN.getMsg());
        }

        ObjectMapper objectMapper = new ObjectMapper();
        response.getWriter().write(objectMapper.writeValueAsString(resultJson));
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json");
        response.setStatus(403);
        return response;
    }
}
