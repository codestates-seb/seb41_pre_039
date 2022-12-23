package com.seb_pre_039.stackoverflowclone.member.mapper;

import com.seb_pre_039.stackoverflowclone.member.dto.MemberPatchDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberPostDto;
import com.seb_pre_039.stackoverflowclone.member.dto.MemberResponseDto;
import com.seb_pre_039.stackoverflowclone.member.entitiy.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
