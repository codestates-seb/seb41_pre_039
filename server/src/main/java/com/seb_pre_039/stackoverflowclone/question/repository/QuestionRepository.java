package com.seb_pre_039.stackoverflowclone.question.repository;


import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.response.MyPageQuestionResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
//    @Query(value = "select q from Question q where q.member.memberId = :#{#memberId}")
//    List<Question> findByMemberId(@Param(value = "memberId") Long memberId);

    @Query(value = "select q.title as title, q.createdAt as createdAt, q.totalVote as totalVote, q.questionId as questionId " +
            "from Question q where q.member.memberId = :#{#memberId}")
    List<MyPageQuestionResponse> findByMemberId(@Param(value = "memberId") Long memberId);

    @Modifying
    @Query("update Question q set q.viewCount = q.viewCount+1 where q.questionId = :id")
    int updateViewCount(int id);

    Page<Question> findByTitleContainingOrderByCreatedAtDesc(String title, Pageable pageable);

    Page<Question> findByTitleContainingOrderByTotalVoteDesc(String title, Pageable pageable);

    Optional<Question> findById(int questionId);
}
