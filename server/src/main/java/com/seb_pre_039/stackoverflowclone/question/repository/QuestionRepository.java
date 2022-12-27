package com.seb_pre_039.stackoverflowclone.question.repository;


import com.seb_pre_039.stackoverflowclone.member.entitiy.Member;
import com.seb_pre_039.stackoverflowclone.response.MyPageQuestionResponse;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
    @Query(value = "select q.title as title, q.createdAt as createdAt, q.totalVote as totalVote from Question q where q.member.memberId = :#{#member.memberId}")
    List<MyPageQuestionResponse> findByMemberId(@Param(value = "member") Member member);

    Optional<Question> findById(int questionId);
}
