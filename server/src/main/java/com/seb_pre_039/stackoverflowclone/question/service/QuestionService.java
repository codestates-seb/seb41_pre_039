package com.seb_pre_039.stackoverflowclone.question.service;


import com.seb_pre_039.stackoverflowclone.comment.entity.Comment;
import com.seb_pre_039.stackoverflowclone.comment.service.CommentService;
import com.seb_pre_039.stackoverflowclone.exception.BusinessLogicException;
import com.seb_pre_039.stackoverflowclone.exception.ExceptionCode;
import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.mapper.QuestionMapper;
import com.seb_pre_039.stackoverflowclone.question.repository.QuestionRepository;
import com.seb_pre_039.stackoverflowclone.response.MyPageQuestionResponse;
import com.seb_pre_039.stackoverflowclone.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    private final QuestionMapper questionMapper;

    private final CommentService commentService;

    public QuestionService(QuestionRepository questionRepository, TagRepository tagRepository,
                           QuestionMapper questionMapper, CommentService commentService) {
        this.questionRepository = questionRepository;
        this.tagRepository = tagRepository;
        this.questionMapper = questionMapper;
        this.commentService = commentService;
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
    public Page<Question> sortQuestions(int page, int size, String search, String sort) {
        if(sort.equals("totalVote"))
            return questionRepository.findByTitleContainingOrderByTotalVoteDesc(search, PageRequest.of(page, size));

        return questionRepository.findByTitleContainingOrderByCreatedAtDesc(search, PageRequest.of(page, size));
    }

    public Page<Question> findQuestions(int page, int size, String sort) {
        if(sort.equals("totalVote"))
            return questionRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));

        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("totalVote").descending()));
    }


    public List<Question> findQuestions(Member member) {

        return questionRepository.findByMember(member);
    }

    public List<Question> findQuestions() {

        return questionRepository.findTop10ByOrderByCreatedAtDesc();
    }


    public int updateViewCount(int questionId) {

        return questionRepository.updateViewCount(questionId);
    }

    public Question updateQuestion(Question question) {
        Question foundQuestion =findExistedQuestion(question.getQuestionId());
        Optional.ofNullable(question.getContent()).ifPresent(foundQuestion::setContent);
        Optional.ofNullable(question.getTitle()).ifPresent(foundQuestion::setTitle);
        Optional.ofNullable(question.getTotalVote()).ifPresent(foundQuestion::setTotalVote);

        return questionRepository.save(foundQuestion);
    }

    public Question updateTotalVote(Question question) {
        Question foundQuestion = findExistedQuestion(question.getQuestionId());


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
                ()-> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND)
        );
    }
}
