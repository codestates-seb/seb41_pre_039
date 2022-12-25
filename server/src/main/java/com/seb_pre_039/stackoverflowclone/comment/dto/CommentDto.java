package com.seb_pre_039.stackoverflowclone.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private int commentId;
        private String content;

        public void setCommentId(int commentId) {
            this.commentId = commentId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private int commentId;
        private String content;
        private int totalVote;
        private LocalDateTime createdAt;
    }
}
