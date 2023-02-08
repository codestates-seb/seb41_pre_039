package com.seb_pre_039.stackoverflowclone.auth.service;

import com.seb_pre_039.stackoverflowclone.auth.dto.RefreshTokenDto;
import com.seb_pre_039.stackoverflowclone.auth.entity.RefreshToken;
import com.seb_pre_039.stackoverflowclone.auth.jwt.JwtTokenizer;
import com.seb_pre_039.stackoverflowclone.auth.repository.RefreshTokenRepository;
import com.seb_pre_039.stackoverflowclone.exception.BusinessLogicException;
import com.seb_pre_039.stackoverflowclone.exception.ExceptionCode;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {
    private final MemberService memberService;
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtTokenizer jwtTokenizer;

    public AuthService(MemberService memberService, RefreshTokenRepository refreshTokenRepository, JwtTokenizer jwtTokenizer) {
        this.memberService = memberService;
        this.refreshTokenRepository = refreshTokenRepository;
        this.jwtTokenizer = jwtTokenizer;
    }


    public RefreshTokenDto.Response generateAccessTokenWithRefreshToken(String value) {
        RefreshToken refreshToken =
                refreshTokenRepository.findById(value)
                        .orElseThrow(
                                ()->new BusinessLogicException(ExceptionCode.REFRESHTOKEN_NOT_EXISTS)
                        );
        Long memberId =refreshToken.getMemberId();

        Member member = memberService.findMember(memberId);
        Map<String ,Object> claims = new HashMap<>();
        claims.put("username", member.getEmail());
        claims.put("roles", member.getRoles());

        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        String accessToken = "Bearer " + jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        RefreshTokenDto.Response response = new RefreshTokenDto.Response(memberId, accessToken);
        return response;
    }
}
