package com.seb_pre_039.stackoverflowclone.question.entity;

import com.seb_pre_039.stackoverflowclone.audit.BaseTimeEntity;
import com.seb_pre_039.stackoverflowclone.member.entitiy.Member;
import lombok.*;

import javax.persistence.*;
import java.util.List;

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

    private String image;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false)
    private String content;

//    @Column(nullable = false)
//    private boolean isChosen;

    @Column(nullable = false)
    private int totalVote;

    @Column(nullable = false)
    private int commentCount;

    @Column(nullable = false)
    private int viewCount;


    private int questionVoteId;


    @ElementCollection
    @CollectionTable(name = "tags", joinColumns = @JoinColumn(name = "QUESTION_ID"))
    private List<String> tags;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }

}
