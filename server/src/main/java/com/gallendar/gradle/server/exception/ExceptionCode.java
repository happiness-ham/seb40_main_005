package com.gallendar.gradle.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_EXISTS(404, "Member exists");

    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }
}