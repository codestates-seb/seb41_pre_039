package com.seb_pre_039.stackoverflowclone.Question;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Question {
    private int questionId;
    // Object -> ?? 수정 필요
    private Object image;
    private String title;
    private String content;
    private LocalDateTime createdAt = LocalDateTime.now();
    private boolean isChosen = false;

    private int totalVote = 0;

    private int commentCount = 0;

    private int viewCount = 0;

    private int questionVoteId;

    private int memberId;
}
