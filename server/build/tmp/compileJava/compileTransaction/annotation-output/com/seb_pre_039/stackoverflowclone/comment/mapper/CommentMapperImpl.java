package com.seb_pre_039.stackoverflowclone.comment.mapper;

import com.seb_pre_039.stackoverflowclone.comment.dto.CommentDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPatchDto;
import com.seb_pre_039.stackoverflowclone.comment.dto.CommentPostDto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-26T10:41:54+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.jar, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment commentPostToComment(CommentPostDto post) {
        if ( post == null ) {
            return null;
        }

        Comment.CommentBuilder comment = Comment.builder();

        comment.content( post.getContent() );

        return comment.build();
    }

    @Override
    public Comment commentPatchToComment(CommentPatchDto patch) {
        if ( patch == null ) {
            return null;
        }

        Comment.CommentBuilder comment = Comment.builder();

        comment.commentId( patch.getCommentId() );
        comment.content( patch.getContent() );

        return comment.build();
    }

    @Override
    public CommentDto.Response commentToCommentResponse(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        int commentId = 0;
        String content = null;
        int totalVote = 0;
        LocalDateTime createdAt = null;

        commentId = comment.getCommentId();
        content = comment.getContent();
        totalVote = comment.getTotalVote();
        createdAt = comment.getCreatedAt();

        CommentDto.Response response = new CommentDto.Response( commentId, content, totalVote, createdAt );

        return response;
    }

    @Override
    public List<CommentDto.Response> commentsToCommentResponseDtos(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<CommentDto.Response> list = new ArrayList<CommentDto.Response>( comments.size() );
        for ( Comment comment : comments ) {
            list.add( commentToCommentResponse( comment ) );
        }

        return list;
    }
}
