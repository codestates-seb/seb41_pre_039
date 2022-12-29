package com.seb_pre_039.stackoverflowclone.question.mapper;

import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionDto.Post post);
    Question questionPatchToQuestion(QuestionDto.Patch patch);
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);

    default QuestionDto.Response questionToQuestionResponse(Question question) {
        if(question == null) return null;
        else {
            QuestionDto.Response response
                    = new QuestionDto.Response(
                    question.getQuestionId(),
                    question.getTitle(),
                    question.getContent(),
                    question.getCreatedAt(),
                    question.getModifiedAt(),
                    question.isChosen(),
                    question.getCommentCount(),
                    question.getViewCount(),
                    question.getTotalVote(),
                    question.getMember().getName(),
                    question.getMember().getMemberId(),
                    question.getTags());

            return response;
        }
    }
}
