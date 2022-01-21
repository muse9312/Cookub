package com.cookub.backend.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class ResultJson {
    private String code;
    private String msg;
    private Object result;
    private String token;
}
