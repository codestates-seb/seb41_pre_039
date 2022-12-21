package com.seb_pre_039.stackoverflowclone.Question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionMapper mapper;

    public QuestionController(QuestionMapper mapper) {
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity<?> postQuestion(@RequestBody QuestionDto.Post post) {
        Question question = mapper.questionPostToQuestion(post);
        return new ResponseEntity<>(mapper.questionToQuestionResponse(question), HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") int questionId) {

        return null;
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        return null;
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") int questionId) {
        return null;
    }

    @DeleteMapping("/{question-id}")
    public void deleteQuestion(@PathVariable("question-id") int questionId) {

    }

    @DeleteMapping
    public void deleteQuestions() {

    }
}
