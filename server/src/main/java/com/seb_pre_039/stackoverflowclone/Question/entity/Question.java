package com.seb_pre_039.stackoverflowclone.Question.entity;

import com.seb_pre_039.stackoverflowclone.audit.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Question extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int questionId;

    /* Object -> ?? 수정 필요
     Object는 mapping되는 타입이 없어서 일단 String으로 대체
    */
    private String image;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private boolean isChosen;

    @Column(nullable = false)
    private int totalVote;

    @Column(nullable = false)
    private int commentCount;

    @Column(nullable = false)
    private int viewCount;


    private int questionVoteId;

    private int memberId;

}
