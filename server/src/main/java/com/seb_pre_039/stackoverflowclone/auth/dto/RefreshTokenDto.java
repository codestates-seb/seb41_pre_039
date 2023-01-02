package com.seb_pre_039.stackoverflowclone.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class RefreshTokenDto {

    @Getter
    @NoArgsConstructor
    public static class Request {
        private String refreshToken;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long memberId;
        private String accessToken;
    }



}
