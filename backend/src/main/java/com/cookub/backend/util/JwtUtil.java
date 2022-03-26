package com.cookub.backend.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.cookub.backend.entity.user.User;

@Component
public class JwtUtil {
    @Value("${jwt.secret-key}")
    private String secretKey;


    private String createToken(Map<String, Object> claims) {
        System.out.println("5. 입력 받은 claims을 이용하여 토큰 생성하러 옴");
        String secretKeyEncodeBase64 = Encoders.BASE64.encode(secretKey.getBytes());
        byte[] keyBytes = Decoders.BASE64.decode(secretKeyEncodeBase64);
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return Jwts.builder()
                .signWith(key)
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
                .compact();

    }

    private Claims extractAllClaims(String token) {
        if (StringUtils.isEmpty(token)) return null;
        String secretKeyEncodeBase64 = Encoders.BASE64.encode(secretKey.getBytes());
        Claims claims = null;
        try {
            claims = Jwts.parserBuilder().setSigningKey(secretKeyEncodeBase64).build().parseClaimsJws(token).getBody();
        } catch (JwtException e) {
            claims = null;
        }
        return claims;
    }



    public String extractUsername(String token) {
        final Claims claims = extractAllClaims(token);
        if (claims == null) return null;
        else return claims.get("email",String.class);
    }

    public String generateToken(User user) {
        System.out.println("generateToken User의 email : "+user.getEmail());
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", user.getEmail());
        System.out.println("4. email key값에, email넣으면서 token 생성 중");
        return createToken(claims);
    }
}
