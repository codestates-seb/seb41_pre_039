package com.seb_pre_039.stackoverflowclone.Question.service;


import com.seb_pre_039.stackoverflowclone.Question.entity.Question;
import com.seb_pre_039.stackoverflowclone.Question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        verifyExistQuestion(question.getQuestionId());

        return questionRepository.save(question);
    }

    public Question findQuestion(int questionId) {

        return findExistedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {

        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public Question updateQuestion(Question question) {
        Question foundQuestion =findExistedQuestion(question.getQuestionId());
        Optional.ofNullable(question.getContent()).ifPresent(foundQuestion::setContent);
        Optional.ofNullable(question.getTitle()).ifPresent(foundQuestion::setTitle);

        return questionRepository.save(foundQuestion);
    }

    public void deleteQuestion(int questionId) {

        questionRepository.delete(findExistedQuestion(questionId));
    }

    public void deleteQuestions() {

        questionRepository.deleteAll();
    }

    private void verifyExistQuestion(int questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        if(optionalQuestion.isPresent()){
            throw new RuntimeException("QUESTION_ALREADY_EXIST");
        }
    }

    private Question findExistedQuestion(int questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        return optionalQuestion.orElseThrow(
                ()-> new RuntimeException("QUESTION_NOT_FOUND")
        );
    }
}
