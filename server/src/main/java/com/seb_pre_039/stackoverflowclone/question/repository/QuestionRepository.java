package com.seb_pre_039.stackoverflowclone.question.repository;


import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
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


    List<Question> findByMember(Member member);


    @Modifying
    @Query("update Question q set q.viewCount = q.viewCount+1 where q.questionId = :id")
    int updateViewCount(int id);

    Page<Question> findByTitleContainingOrderByCreatedAtDesc(String title, Pageable pageable);

    Page<Question> findByTitleContainingOrderByTotalVoteDesc(String title, Pageable pageable);

    List<Question> findTop10ByOrderByCreatedAtDesc();

    Optional<Question> findById(int questionId);
}
