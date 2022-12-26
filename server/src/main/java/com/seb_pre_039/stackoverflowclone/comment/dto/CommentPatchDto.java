package com.seb_pre_039.stackoverflowclone.comment.dto;

import lombok.Getter;

@Getter
public class CommentPatchDto {
    private int commentId;
    private String content;

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }
}
