package com.seb_pre_039.stackoverflowclone.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommentPatchDto {
    private int commentId;

    private String content;

    private boolean adoption;

    private int totalVote;

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }
}
