package com.cookub.backend.util;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public class Response {

    @ApiModelProperty(example = "상태코드")
    public  int status;
    @ApiModelProperty(example = "메시지")
    public String message;
    @ApiModelProperty(example = "응답데이터")
    public Map<String,Object> data=new HashMap<>();
    @ApiModelProperty(example = "시간")
    public LocalDateTime timestamp;

    public Response(){
        this(HttpStatus.OK);
    }

    public Response(HttpStatus httpStatus) {
        this.status=httpStatus.value();
        this.message=httpStatus.getReasonPhrase();
        this.data = new HashMap<>();
        this.timestamp = LocalDateTime.now();
    }

    public void add(String key,Object value){
        this.data.put(key, value);
    }
}
