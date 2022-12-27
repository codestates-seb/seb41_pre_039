package com.seb_pre_039.stackoverflowclone.comment.entity;

import com.seb_pre_039.stackoverflowclone.audit.BaseTimeEntity;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Comment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int totalVote;

    @Column(nullable = false)
    private int adoption;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addMember(Member member) {
        this.member = member;
    }

}
