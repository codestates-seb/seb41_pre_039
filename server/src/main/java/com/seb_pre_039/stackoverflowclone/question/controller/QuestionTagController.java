package com.seb_pre_039.stackoverflowclone.question.controller;


import com.seb_pre_039.stackoverflowclone.question.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionTagController {
    private final QuestionService questionService;

    public QuestionTagController(QuestionService questionService) {
        this.questionService = questionService;
    }

//    @GetMapping("/tag/{tag-name}")
//    public ResponseEntity getQuestionsByTagName(@PathVariable("tag-name") String tagName) {
//
//    }
}
