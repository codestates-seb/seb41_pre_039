package com.seb_pre_039.stackoverflowclone.comment.entity;

import com.seb_pre_039.stackoverflowclone.audit.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Comment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentId;

    private String content;

    @Column(nullable = false)
    private int totalVote;

    private int postId;

    private int memberId;

}
