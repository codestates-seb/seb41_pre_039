package com.seb_pre_039.stackoverflowclone.member.dto;

import com.seb_pre_039.stackoverflowclone.member.entitiy.Member;
import com.seb_pre_039.stackoverflowclone.validator.NotSpace;
import lombok.Getter;

import javax.validation.constraints.Pattern;

@Getter
public class MemberPatchDto {
    private long memberId;

    @NotSpace(message = "회원 이름은 공백이 아니어야 합니다")
    private String name;

    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }

}
