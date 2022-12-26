package com.seb_pre_039.stackoverflowclone.comment.controller;

import com.seb_pre_039.stackoverflowclone.comment.dto.CommentDto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.mapper.CommentMapper;
import com.seb_pre_039.stackoverflowclone.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Validated
@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentMapper mapper, CommentService commentService) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post post){
        Comment comment = commentService.createComment(mapper.commentPostToComment(post));

        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") int commentId,
                                       @Valid @RequestBody CommentDto.Patch patch) {
        patch.setCommentId(commentId);
        Comment comment = commentService.updateComment(mapper.commentPatchToComment(patch));

        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("comment-id") int commentId) {
        Comment comment = commentService.findComment(commentId);

        return new ResponseEntity<>(mapper.commentToCommentResponse(comment), HttpStatus.OK);
    }
//
//    @GetMapping
//    public ResponseEntity getAnswers() {
//        System.out.println("# get Answers");
//
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
