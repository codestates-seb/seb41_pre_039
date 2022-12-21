package com.seb_pre_039.stackoverflowclone.Question;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private int questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private boolean isChosen;
        private int commentCount;
        private int viewCount;
    }
}
