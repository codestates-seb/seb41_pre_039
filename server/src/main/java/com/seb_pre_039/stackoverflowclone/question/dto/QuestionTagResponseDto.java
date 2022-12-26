package com.seb_pre_039.stackoverflowclone.question.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionTagResponseDto {

    private int questionId;
    private int tagId;

    private String name;


}
