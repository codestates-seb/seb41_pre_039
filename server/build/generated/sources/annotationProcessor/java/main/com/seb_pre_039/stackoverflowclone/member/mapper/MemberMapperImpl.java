package com.seb_pre_039.stackoverflowclone.member.mapper;

import com.seb_pre_039.stackoverflowclone.comment.dto.CommentResponseDto;
import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberPatchDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberPatchResponseDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberPostDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberResponseDto;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-30T14:31:27+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.jar, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPostDto.getEmail() );
        member.setName( memberPostDto.getName() );
        member.setPassword( memberPostDto.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchDto.getMemberId() );
        member.setName( memberPatchDto.getName() );
        member.setRegion( memberPatchDto.getRegion() );
        member.setMyTitle( memberPatchDto.getMyTitle() );
        member.setAboutMe( memberPatchDto.getAboutMe() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDto.MemberResponseDtoBuilder memberResponseDto = MemberResponseDto.builder();

        if ( member.getMemberId() != null ) {
            memberResponseDto.memberId( member.getMemberId() );
        }
        memberResponseDto.name( member.getName() );
        memberResponseDto.questions( questionListToResponseList( member.getQuestions() ) );
        memberResponseDto.comments( commentListToCommentResponseDtoList( member.getComments() ) );
        memberResponseDto.myTitle( member.getMyTitle() );
        memberResponseDto.aboutMe( member.getAboutMe() );
        memberResponseDto.region( member.getRegion() );
        memberResponseDto.createdAt( member.getCreatedAt() );

        return memberResponseDto.build();
    }

    @Override
    public MemberPatchResponseDto memberToMemberPatchResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberPatchResponseDto.MemberPatchResponseDtoBuilder memberPatchResponseDto = MemberPatchResponseDto.builder();

        if ( member.getMemberId() != null ) {
            memberPatchResponseDto.memberId( member.getMemberId() );
        }
        memberPatchResponseDto.name( member.getName() );
        memberPatchResponseDto.myTitle( member.getMyTitle() );
        memberPatchResponseDto.aboutMe( member.getAboutMe() );
        memberPatchResponseDto.region( member.getRegion() );

        return memberPatchResponseDto.build();
    }

    @Override
    public List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberResponseDto> list = new ArrayList<MemberResponseDto>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponseDto( member ) );
        }

        return list;
    }

    protected QuestionDto.Response questionToResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.Response response = new QuestionDto.Response();

        response.setQuestionId( question.getQuestionId() );
        response.setTitle( question.getTitle() );
        response.setContent( question.getContent() );
        response.setCreatedAt( question.getCreatedAt() );
        response.setModifiedAt( question.getModifiedAt() );
        response.setChosen( question.isChosen() );
        response.setCommentCount( question.getCommentCount() );
        response.setViewCount( question.getViewCount() );
        response.setTotalVote( question.getTotalVote() );
        List<String> list = question.getTags();
        if ( list != null ) {
            response.setTags( new ArrayList<String>( list ) );
        }

        return response;
    }

    protected List<QuestionDto.Response> questionListToResponseList(List<Question> list) {
        if ( list == null ) {
            return null;
        }

        List<QuestionDto.Response> list1 = new ArrayList<QuestionDto.Response>( list.size() );
        for ( Question question : list ) {
            list1.add( questionToResponse( question ) );
        }

        return list1;
    }

    protected CommentResponseDto commentToCommentResponseDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentResponseDto commentResponseDto = new CommentResponseDto();

        commentResponseDto.setCommentId( comment.getCommentId() );
        commentResponseDto.setContent( comment.getContent() );
        commentResponseDto.setCreatedAt( comment.getCreatedAt() );
        commentResponseDto.setModifiedAt( comment.getModifiedAt() );
        commentResponseDto.setTotalVote( comment.getTotalVote() );
        commentResponseDto.setAdoption( comment.isAdoption() );

        return commentResponseDto;
    }

    protected List<CommentResponseDto> commentListToCommentResponseDtoList(List<Comment> list) {
        if ( list == null ) {
            return null;
        }

        List<CommentResponseDto> list1 = new ArrayList<CommentResponseDto>( list.size() );
        for ( Comment comment : list ) {
            list1.add( commentToCommentResponseDto( comment ) );
        }

        return list1;
    }
}
