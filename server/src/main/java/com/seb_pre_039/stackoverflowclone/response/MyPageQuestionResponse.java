package com.seb_pre_039.stackoverflowclone.response;

import com.seb_pre_039.stackoverflowclone.member.entity.Member;

import java.util.List;

public interface MyPageQuestionResponse {
    int getQuestionId();
    String getTitle();
    String getContent();
    String getCreatedAt();
    String getModifiedAt();
    boolean isChosen();
    int getCommentCount();
    int getViewCount();
    int getTotalVote();

    Member getMember();

    interface Member {
        String getUsername();
        Long getMemberId();

    }
    List<String> getTags();

}
