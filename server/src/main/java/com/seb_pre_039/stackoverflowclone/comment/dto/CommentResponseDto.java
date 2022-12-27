package com.seb_pre_039.stackoverflowclone.comment.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommentResponseDto {

    private int commentId;
    private String content;
    private String createdAt;
    private int totalVote;
    private int adoption;
    private int memberId;

}
