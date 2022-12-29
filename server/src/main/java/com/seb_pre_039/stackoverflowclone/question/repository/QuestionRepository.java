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
//    @Query(value = "select q from Question q where q.member.memberId = :#{#memberId}")
//    List<Question> findByMemberId(@Param(value = "memberId") Long memberId);


//    @Query(value = "select q.questionId as questionId, q.title as title, q.content as content," +
//            "q.createdAt as createdAt, q.modifiedAt as modifiedAt, " +
//            "q.isChosen as chosen, q.commentCount as commentCount," +
//            "q.viewCount as viewCount, q.totalVote as totalVote, q.member as member, q.tags as tags " +
//            "from Question q where q.member.memberId = :#{#memberId}")


//    @Query(value = "select new com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto.Response" +
//            "(q.questionId, q.title, q.content, q.createdAt, q.modifiedAt," +
//            " q.isChosen, q.commentCount, q.viewCount, q.totalVote, q.member.name," +
//            " q.member.memberId, q.tags)" +
//            " from Question q " +
//            "where q.questionId = #{#memberId}")
//    List<QuestionDto.Response> findByMemberId(@Param(value = "memberId") Long memberId);

    List<Question> findByMember(Member member);


    @Modifying
    @Query("update Question q set q.viewCount = q.viewCount+1 where q.questionId = :id")
    int updateViewCount(int id);

    Page<Question> findByTitleContainingOrderByCreatedAtDesc(String title, Pageable pageable);

    Page<Question> findByTitleContainingOrderByTotalVoteDesc(String title, Pageable pageable);

    Optional<Question> findById(int questionId);
}
