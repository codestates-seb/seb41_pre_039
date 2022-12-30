package com.seb_pre_039.stackoverflowclone.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
//@Builder
public class CommentResponseDto {

    private int commentId;

    private String content;
    private String createdAt;
    private String modifiedAt;

    private int totalVote;

    private boolean adoption;

    private String username;

    private Long memberId;

    private int questionId;

    public void setUsername(String username) {
        this.username = username;
    }


}
