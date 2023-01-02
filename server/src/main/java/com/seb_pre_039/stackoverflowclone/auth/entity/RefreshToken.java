package com.seb_pre_039.stackoverflowclone.auth.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.redis.core.RedisHash;

import org.springframework.data.annotation.Id;

@Getter
@AllArgsConstructor
@RedisHash(value = "refreshToken", timeToLive = 6 * 60 * 60)
public class RefreshToken {
    @Id
    private String refreshToken;
    private Long memberId;

}
