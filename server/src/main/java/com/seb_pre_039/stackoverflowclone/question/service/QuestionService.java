package com.seb_pre_039.stackoverflowclone.question.service;


import com.seb_pre_039.stackoverflowclone.exception.BusinessLogicException;
import com.seb_pre_039.stackoverflowclone.exception.ExceptionCode;
import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.repository.QuestionRepository;
import com.seb_pre_039.stackoverflowclone.response.MyPageQuestionResponse;
import com.seb_pre_039.stackoverflowclone.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final TagRepository tagRepository;
//    private final MemberService memberService;

//    public QuestionService(QuestionRepository questionRepository, TagRepository tagRepository, MemberService memberService) {
//        this.questionRepository = questionRepository;
//        this.tagRepository = tagRepository;
//        this.memberService = memberService;
//    }

    public QuestionService(QuestionRepository questionRepository, TagRepository tagRepository) {
        this.questionRepository = questionRepository;
        this.tagRepository = tagRepository;
    }

    public Question createQuestion(Question question) {
        verifyExistQuestion(question.getQuestionId());
//        question.setMember(memberService.findMember(1));

        return questionRepository.save(question);
    }

    @Transactional(readOnly = true)
    public Question findQuestion(int questionId) {

        return findExistedQuestion(questionId);
    }

    @Transactional(readOnly = true)
    public Page<Question> findQuestions(int page, int size) {

        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public List<Question> searchQuestionByTitle(String title) {

        return questionRepository.findByTitleContaining(title);
    }



    public List<Question> findQuestions(Long memberId) {

        return questionRepository.findByMemberId(memberId);
    }

//    public List<>

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
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }

    private Question findExistedQuestion(int questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        return optionalQuestion.orElseThrow(
                ()-> new RuntimeException("QUESTION_NOT_FOUND")
        );
    }
}
