package com.seb_pre_039.stackoverflowclone.comment.service;

import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.repository.CommentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        verifyExistComment(comment.getCommentId());

        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findExistedComment(comment.getCommentId());

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        Optional.ofNullable(comment.getAdoption())
                .ifPresent(adoption -> findComment.setAdoption(adoption));

        return commentRepository.save(findComment);
    }

    public void deleteComment(int commentId) {

        commentRepository.delete(findExistedComment(commentId));
    }

    public void deleteComments() {

        commentRepository.deleteAll();
    }

    public Comment findComment(int commentId) {

        return findExistedComment(commentId);
    }

    public Page<Comment> findComments(int page, int size) {

        return commentRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public List<Comment> findComments(Long memberId) {

        return commentRepository.findByMemberId(memberId);
    }

    private void verifyExistComment(int commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        if(optionalComment.isPresent()){
            throw new RuntimeException("Comment_ALREADY_EXIST");
        }
    }

    private Comment findExistedComment(int commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        return optionalComment.orElseThrow(
                ()-> new RuntimeException("COMMENT_NOT_FOUND")
        );
    }
}
