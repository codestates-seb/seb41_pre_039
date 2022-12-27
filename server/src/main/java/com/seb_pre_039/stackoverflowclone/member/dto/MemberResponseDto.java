package com.seb_pre_039.stackoverflowclone.member.dto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class MemberResponseDto {
    //private blob image;
    private long memberId;
    private String email;
    private String name;
    private List<Question> questions;
    private List<Comment> comments;
    private String myTitle;
    private String aboutMe;
    private String region;
    private LocalDateTime createdAt;
}
