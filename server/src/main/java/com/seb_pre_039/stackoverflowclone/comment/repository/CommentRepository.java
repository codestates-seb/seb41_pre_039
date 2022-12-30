package com.seb_pre_039.stackoverflowclone.comment.repository;

import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query(value = "select c from Comment c where c.member.memberId = :#{#memberId}")
    List<Comment> findByMemberId(@Param(value = "member") Long memberId);

    List<Comment> findByMember(Member member);

    Optional<Comment> findById(int commentId);
}
