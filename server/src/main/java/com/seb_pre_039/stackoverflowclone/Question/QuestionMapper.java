package com.seb_pre_039.stackoverflowclone.Question;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionDto.Post post);
    QuestionDto.Response questionToQuestionResponse(Question question);
}
