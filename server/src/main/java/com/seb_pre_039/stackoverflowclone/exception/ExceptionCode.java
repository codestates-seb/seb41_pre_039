package com.seb_pre_039.stackoverflowclone.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    
    MEMBER_EXISTS(409, "Member exists"),
    
    QUESTION_NOT_FOUND(404, "Question Not Found"),

    QUESTION_EXISTS(409, "Question Exists"),

    TAG_NOT_FOUND(404, "Tag Not Found"),

    TAG_EXISTS(409, "Tag Exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
