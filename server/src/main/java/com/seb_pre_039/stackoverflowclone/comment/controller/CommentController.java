package com.seb_pre_039.stackoverflowclone.comment.controller;

import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPatchDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPostDto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.mapper.CommentMapper;
import com.seb_pre_039.stackoverflowclone.comment.service.CommentService;
import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
import com.seb_pre_039.stackoverflowclone.response.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Validated
@RestController
@RequestMapping("/comments")
public class CommentController {
    private final static String MEMBER_DEFAULT_URL = "/members";
    private final CommentService commentService;

    private final MemberService memberService;
    private final CommentMapper mapper;

    public CommentController(CommentMapper mapper, CommentService commentService, MemberService memberService) {
        this.commentService = commentService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto post){
        Comment comment = mapper.commentPostToComment(post);
        comment.setMember(memberService.findMember(1));
        commentService.createComment(comment);

        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") int commentId,
                                       @Valid @RequestBody CommentPatchDto patch) {
        patch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchToComment(patch));

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
