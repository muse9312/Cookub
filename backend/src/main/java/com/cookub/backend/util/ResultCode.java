package com.cookub.backend.util;

import lombok.Getter;

@Getter
public enum ResultCode {
    SUCCESS("200", "success"),
    CREATED("201", "created"),
    BAD_REQUEST("400","failed"),
    CONFLICT("409", "DB integrtiy broken"),
    LOGIN_FAIL("900", "login fail"),
    INVALID_TOKEN("403", "forbidden"),
    SERVER_ERROR("999", "server error");

    private String code;
    private String msg;

    ResultCode(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
