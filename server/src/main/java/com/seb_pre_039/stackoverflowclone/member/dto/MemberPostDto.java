package com.seb_pre_039.stackoverflowclone.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPostDto {
    @NotBlank
    @Email
    private String email;
    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String name;
    private String password;
}
