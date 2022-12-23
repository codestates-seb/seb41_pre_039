package com.seb_pre_039.stackoverflowclone.member.dto;
import com.seb_pre_039.stackoverflowclone.member.entitiy.Member;
import lombok.Builder;
import lombok.Getter;

// TODO 변경: Builder 패턴 적용
@Builder
@Getter
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String name;
}
