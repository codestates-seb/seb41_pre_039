package com.seb_pre_039.stackoverflowclone.comment.mapper;

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
//    CommentResponseDto commentToCommentResponse(Comment comment);
    List<CommentResponseDto> commentsToCommentResponseDtos(List<Comment> comments);

    default CommentResponseDto commentToCommentResponse(Comment comment){
        if(comment == null) return null;
        else {
            CommentResponseDto response
                    = new CommentResponseDto(
                            comment.getCommentId(),
                            comment.getContent(),
                            comment.getCreatedAt(),
                            comment.getModifiedAt(),
                            comment.getTotalVote(),
                            comment.isAdoption(),
                            comment.getMember().getName(),
                            comment.getMember().getMemberId(),
                            comment.getQuestion().getQuestionId()
            );
            return response;
        }
    }
}
