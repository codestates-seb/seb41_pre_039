package com.seb_pre_039.stackoverflowclone.comment.controller;

import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPatchDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPostDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentResponseDto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.mapper.CommentMapper;
import com.seb_pre_039.stackoverflowclone.comment.service.CommentService;
import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.repository.QuestionRepository;
import com.seb_pre_039.stackoverflowclone.question.service.QuestionService;
import com.seb_pre_039.stackoverflowclone.response.MultiResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@Validated
@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;

    private final MemberService memberService;

    private final QuestionService questionService;
    private final QuestionRepository questionRepository;
    private final CommentMapper mapper;
    public CommentController(CommentService commentService, MemberService memberService,
                             QuestionService questionService, QuestionRepository questionRepository,
                             CommentMapper mapper) {
        this.commentService = commentService;
        this.memberService = memberService;
        this.questionService = questionService;
        this.questionRepository = questionRepository;
        this.mapper = mapper;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto post,
                                      @PathVariable("question-id") int question_id){
        Comment comment = mapper.commentPostToComment(post);
        comment.setMember(memberService.findMember(1));
        Question question = questionService.findQuestion(question_id);
        comment.setQuestion(question);
        commentService.createComment(comment);

        CommentResponseDto commentResponseDto = mapper.commentToCommentResponse(comment);

        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") int commentId,
                                       @Valid @RequestBody CommentPatchDto patch) {
        patch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchToComment(patch));
        System.out.println(comment.getContent());
        System.out.println(comment.getMember().getName());
        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.OK);
    }



    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") int commentId) {
        Comment comment = commentService.findComment(commentId);

        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getComments(@Positive @RequestParam int page,
                                      @Positive @RequestParam int size) {
        Page<Comment> findComments = commentService.findComments(page - 1, size);
        List<Comment> comments = findComments.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.commentsToCommentResponseDtos(comments), findComments), HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") int commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity deleteComments() {
        commentService.deleteComments();

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
