package com.seb_pre_039.stackoverflowclone.auth.controller;

import com.seb_pre_039.stackoverflowclone.auth.dto.RefreshTokenDto;
import com.seb_pre_039.stackoverflowclone.auth.jwt.JwtTokenizer;
import com.seb_pre_039.stackoverflowclone.auth.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    private final JwtTokenizer tokenizer;
    private final AuthService authService;

    public AuthController(JwtTokenizer tokenizer, AuthService authService) {
        this.tokenizer = tokenizer;
        this.authService = authService;
    }

    @PostMapping("/auth/refresh-token")
    public ResponseEntity<?> generateAccessToken(@RequestBody RefreshTokenDto.Request request) {

        return new ResponseEntity<>(
                authService.generateAccessTokenWithRefreshToken(request.getRefreshToken()), HttpStatus.OK);
    }
}
