package com.seb_pre_039.stackoverflowclone.member.mapper;

import com.seb_pre_039.stackoverflowclone.member.dto.MemberPatchDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberPostDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberResponseDto;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-27T14:59:26+0900",
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
        member.setStatus( memberPatchDto.getStatus() );

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
        memberResponseDto.email( member.getEmail() );
        memberResponseDto.name( member.getName() );
        List<Question> list = member.getQuestions();
        if ( list != null ) {
            memberResponseDto.questions( new ArrayList<Question>( list ) );
        }
        memberResponseDto.myTitle( member.getMyTitle() );
        memberResponseDto.aboutMe( member.getAboutMe() );
        memberResponseDto.region( member.getRegion() );
        memberResponseDto.createdAt( member.getCreatedAt() );

        return memberResponseDto.build();
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
}
