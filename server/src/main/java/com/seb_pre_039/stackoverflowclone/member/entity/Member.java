package com.seb_pre_039.stackoverflowclone.member.entity;

import com.seb_pre_039.stackoverflowclone.audit.BaseTimeEntity;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false, updatable = true)
    private String name;
    @Column(nullable = false, updatable = true, unique = false)
    private String password;
    private String region;
    //private object image; //우선 생략

    @Column(length = 20, nullable = true, updatable = true)
    private String myTitle;
    @Column(length = 100, nullable = true, updatable = true)
    private String aboutMe;

    @Enumerated(EnumType.STRING)
    private MemberStatus Status = MemberStatus.MEMBER_ACTIVE;

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    /*
    @OneToMany(mappedBy = "member")
    private List<Comment> comments = new ArrayList<>();
    */
    public enum MemberStatus {
        MEMBER_ACTIVE(1, "활동중"),
        MEMBER_WITHDRAW(2, "탈퇴");
        @Getter
        private int stepNumber;

        @Getter
        private String stepDescription;

        MemberStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }
}
