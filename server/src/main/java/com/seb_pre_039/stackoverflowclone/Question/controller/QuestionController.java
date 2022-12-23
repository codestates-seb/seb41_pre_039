package com.seb_pre_039.stackoverflowclone.Question.controller;

import com.seb_pre_039.stackoverflowclone.Question.QuestionMapper;
import com.seb_pre_039.stackoverflowclone.Question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.Question.entity.Question;
import com.seb_pre_039.stackoverflowclone.Question.service.QuestionService;
import com.seb_pre_039.stackoverflowclone.response.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionMapper mapper, QuestionService questionService) {
        this.questionService = questionService;
        this.mapper = mapper;

    }

    @PostMapping
    public ResponseEntity<?> postQuestion(@Valid @RequestBody QuestionDto.Post post) {
        Question createdQuestion = questionService.createQuestion(mapper.questionPostToQuestion(post));

        return new ResponseEntity<>(mapper.questionToQuestionResponse(createdQuestion), HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") int questionId) {
        Question findQuestion = questionService.findQuestion(questionId);
        return new ResponseEntity<>(mapper.questionToQuestionResponse(findQuestion), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam @Positive int page,
                                       @RequestParam @Positive int size) {
        Page<Question> questionPage = questionService.findQuestions(page-1, size);
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
