package com.seb_pre_039.stackoverflowclone.member.dto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentResponseDto;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class MemberResponseDto {
    //private blob image;
    private long memberId;
    private String name;
    private List<QuestionDto.Response> questions;
    private List<CommentResponseDto> comments;
    private String myTitle;
    private String aboutMe;
    private String region;
    private String createdAt;
    public void setQuestions(List<QuestionDto.Response> questions) {
        this.questions = questions;
    }
    public void setComments(List<CommentResponseDto> comments) {this.comments = comments;}
}
