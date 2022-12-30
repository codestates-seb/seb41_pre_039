package com.seb_pre_039.stackoverflowclone.comment.entity;

import com.seb_pre_039.stackoverflowclone.audit.BaseTimeEntity;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import lombok.*;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
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
    private boolean adoption;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void setMember(Member member) {
        this.member = member;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
