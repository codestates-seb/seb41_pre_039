package com.seb_pre_039.stackoverflowclone.member.dto;

import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.validator.NotSpace;
import lombok.Getter;

@Getter
public class MemberPatchDto {
    private long memberId;

    //private object image;

    @NotSpace(message = "회원 이름은 공백이 아니어야 합니다")
    private String name;

    private String myTitle;

    private String aboutMe;

    private String region;

    private Member.MemberStatus Status;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
}
