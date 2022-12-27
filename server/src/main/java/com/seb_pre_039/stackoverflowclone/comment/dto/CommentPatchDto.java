package com.seb_pre_039.stackoverflowclone.comment.dto;

import lombok.Getter;

import javax.persistence.Column;

@Getter
public class CommentPatchDto {
    private int commentId;

    private String content;

    private int adoption;

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }
}
