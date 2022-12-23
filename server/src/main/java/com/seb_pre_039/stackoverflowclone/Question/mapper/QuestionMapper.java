package com.seb_pre_039.stackoverflowclone.Question.mapper;

import com.seb_pre_039.stackoverflowclone.Question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.Question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionDto.Post post);
    Question questionPatchToQuestion(QuestionDto.Patch patch);
    QuestionDto.Response questionToQuestionResponse(Question question);
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);
}
