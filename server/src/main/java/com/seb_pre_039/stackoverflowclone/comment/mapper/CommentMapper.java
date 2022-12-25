package com.seb_pre_039.stackoverflowclone.comment.mapper;

import org.mapstruct.Mapper;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentDto;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostToComment(CommentDto.Post post);
    Comment commentPatchToComment(CommentDto.Patch patch);
    CommentDto.Response commentToCommentResponse(Comment comment);
    List<CommentDto.Response> commentsToCommentResponseDtos(List<Comment> comments);
}
