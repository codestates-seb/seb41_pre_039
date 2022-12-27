package com.seb_pre_039.stackoverflowclone.comment.mapper;

import com.seb_pre_039.stackoverflowclone.comment.dto.CommentDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPatchDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPostDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentResponseDto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface CommentMapper {
    Comment commentPostToComment(CommentPostDto post);
    Comment commentPatchToComment(CommentPatchDto patch);
    CommentDto.Response commentToCommentResponse(Comment comment);
    List<CommentResponseDto> commentsToCommentResponseDtos(List<Comment> comments);
}
