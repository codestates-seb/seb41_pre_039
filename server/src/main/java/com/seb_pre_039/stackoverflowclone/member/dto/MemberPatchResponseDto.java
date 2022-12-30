package com.seb_pre_039.stackoverflowclone.member.dto;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberPatchResponseDto {
    private long memberId;
    private String name;
    private String myTitle;
    private String aboutMe;
    private String region;
}
