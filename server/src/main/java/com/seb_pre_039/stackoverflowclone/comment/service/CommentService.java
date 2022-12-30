package com.seb_pre_039.stackoverflowclone.comment.service;

import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.repository.CommentRepository;
import com.seb_pre_039.stackoverflowclone.exception.BusinessLogicException;
import com.seb_pre_039.stackoverflowclone.exception.ExceptionCode;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.member.repository.MemberRepository;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;
    private final QuestionRepository questionRepository;
    public CommentService(CommentRepository commentRepository, MemberRepository memberRepository, QuestionRepository questionRepository) {
        this.commentRepository = commentRepository;
        this.memberRepository = memberRepository;
        this.questionRepository = questionRepository;
    }

    public Comment createComment(Comment comment) {
        verifyExistComment(comment.getCommentId());
//        verifyExistQuestion(comment.getQuestion().getQuestionId());
        return commentRepository.save(comment);
    }


    public Comment updateComment(Comment comment) {
        Comment findComment = findExistedComment(comment.getCommentId());

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        Optional.ofNullable(comment.isAdoption())
                .ifPresent(adoption -> findComment.setAdoption(adoption));

        Optional.ofNullable(comment.getTotalVote())
                .ifPresent(totalVote -> findComment.setTotalVote(totalVote));

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

//    public List<Comment> findComments(Long memberId) {
//
//        return commentRepository.findByMemberId(memberId);
//    }

    public List<Comment> findComments(Member member) {
        return commentRepository.findByMember(member);
    }

    private void verifyExistComment(int commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        if(optionalComment.isPresent()){
            throw new RuntimeException("Comment_ALREADY_EXIST");
        }
    }


    private void verifyExistQuestion(int questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        if(optionalQuestion.isPresent()){
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }
//
    private Comment findExistedComment(int commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        return optionalComment.orElseThrow(
                ()-> new RuntimeException("COMMENT_NOT_FOUND")
        );
    }
}
