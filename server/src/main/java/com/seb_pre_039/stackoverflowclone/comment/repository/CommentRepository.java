package com.seb_pre_039.stackoverflowclone.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    Optional<Comment> findById(int commentId);
}
