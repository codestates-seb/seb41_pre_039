package com.seb_pre_039.stackoverflowclone.member.service;


import com.seb_pre_039.stackoverflowclone.comment.service.CommentService;
import com.seb_pre_039.stackoverflowclone.exception.BusinessLogicException;
import com.seb_pre_039.stackoverflowclone.exception.ExceptionCode;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.member.repository.MemberRepository;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final QuestionService questionService;
    private final CommentService commentService;

    public MemberService(MemberRepository memberRepository, QuestionService questionService, CommentService commentService) {
        this.memberRepository = memberRepository;
        this.questionService = questionService;
        this.commentService = commentService;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());
        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getRegion())
                .ifPresent(region -> findMember.setRegion(region));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(member.getMyTitle())
                .ifPresent(myTitle -> findMember.setMyTitle(myTitle));
        Optional.ofNullable(member.getAboutMe())
                .ifPresent(aboutMe -> findMember.setAboutMe(aboutMe));
        Optional.ofNullable(member.getStatus())
                .ifPresent(memberStatus -> findMember.setStatus(memberStatus));

        return memberRepository.save(findMember);
    }


    public Member showMemberPage(long memberId) {
       Member findMember = findVerifiedMember(memberId);
        List<Question> questionList = findMember.getQuestions();
        //List<Comment> commentList = findMember.getComments();
        questionList.add(questionService.findQuestion(1));
        findMember.setQuestions(questionList);
        return findMember;
    }


    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
