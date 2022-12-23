package com.seb_pre_039.stackoverflowclone.question.repository;


import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
    Optional<Question> findById(int questionId);
}
