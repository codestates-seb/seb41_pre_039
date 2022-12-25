package com.seb_pre_039.stackoverflowclone.comment.service;

import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.repository.CommentRepository;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import org.springframework.stereotype.Service;

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

    public Comment findComment(int commentId) {

        return findExistedComment(commentId);
    }

    public Comment updateComment(Comment comment) {
        Comment foundComment = findExistedComment(comment.getCommentId());
        Optional.ofNullable(comment.getContent()).ifPresent(foundComment::setContent);

        return commentRepository.save(foundComment);
    }

    public void deleteComment(int commentId) {

        commentRepository.delete(findExistedComment(commentId));
    }

    public void deleteComments() {

        commentRepository.deleteAll();
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
