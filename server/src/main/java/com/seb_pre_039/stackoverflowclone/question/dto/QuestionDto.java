package com.seb_pre_039.stackoverflowclone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.util.List;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @Size(min = 15, max = 150, message = "15자 이상 150자 이하 입력 가능")
        private String title;
        @Size(min = 20, message = "20자 이상부터 입력 가능")
        private String content;

        private List<String> tags;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private int questionId;
        @Size(min = 15, max = 150, message = "15자 이상 150자 이하 입력 가능")
        private String title;
        @Size(min = 20, message = "20자 이상부터 입력 가능")
        private String content;

        private List<String> tags;

        public void setQuestionId(int questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private int questionId;
        private String title;
        private String content;
        private String createdAt;
        private String modifiedAt;
//        private boolean isChosen;
        private int commentCount;
        private int viewCount;
        private List<String> tags;

    }

}
