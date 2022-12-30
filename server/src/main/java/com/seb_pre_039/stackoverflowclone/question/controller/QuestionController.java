package com.seb_pre_039.stackoverflowclone.question.controller;

import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.mapper.QuestionMapper;
import com.seb_pre_039.stackoverflowclone.question.service.QuestionService;
import com.seb_pre_039.stackoverflowclone.response.MultiResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final MemberService memberService;


    public QuestionController(QuestionService questionService, QuestionMapper mapper, MemberService memberService) {
        this.questionService = questionService;
        this.mapper = mapper;
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {
        Question question = mapper.questionPostToQuestion(post);
        question.setMember(memberService.findMember(1));
        questionService.createQuestion(question);

        return new ResponseEntity<>(mapper.questionToQuestionResponse(question), HttpStatus.CREATED);
    }


    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") int questionId) {
        Question findQuestion = questionService.findQuestion(questionId);

        findQuestion.setViewCount(questionService.updateViewCount(questionId));

        return new ResponseEntity<>(mapper.questionToQuestionResponse(findQuestion), HttpStatus.OK);
    }


    @GetMapping("/main")
    public ResponseEntity getQuestions(@RequestParam @Positive int page,
                                       @RequestParam @Positive int size,
                                       @RequestParam String sort) {
        Page<Question> questionPage = questionService.findQuestions(page-1, size, sort);
        List<Question> questionList = questionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        mapper.questionsToQuestionResponseDtos(questionList), questionPage),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions() {

        return new ResponseEntity<>(questionService.findQuestions(), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity sortQuestions(@RequestParam @Positive int page,
                                       @RequestParam @Positive int size,
                                       @RequestParam String search,
                                       @RequestParam String sort) {
        Page<Question> questionPage = questionService.sortQuestions(page-1, size, search, sort);
        List<Question> questionList = questionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        mapper.questionsToQuestionResponseDtos(questionList), questionPage),
                HttpStatus.OK);
    }


    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") int questionId,
                                        @Valid @RequestBody QuestionDto.Patch patch) {
        patch.setQuestionId(questionId);
        Question updatedQuestion = questionService.updateQuestion(mapper.questionPatchToQuestion(patch));

        return new ResponseEntity<>(mapper.questionToQuestionResponse(updatedQuestion), HttpStatus.OK);
    }


    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") int questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @DeleteMapping
    public ResponseEntity deleteQuestions() {
        questionService.deleteQuestions();

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
