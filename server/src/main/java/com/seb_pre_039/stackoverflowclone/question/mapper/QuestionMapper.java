package com.seb_pre_039.stackoverflowclone.question.mapper;

import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.response.MyPageQuestionResponse;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionDto.Post post);
    Question questionPatchToQuestion(QuestionDto.Patch patch);
    QuestionDto.Response questionToQuestionResponse(Question question);
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);

    default List<Question> myPageQuestionResponseToQuestions(List<MyPageQuestionResponse> myPageQuestionResponses) {
        List<Question> questions;
        if(myPageQuestionResponses == null) return null;
        else {
            questions =
                myPageQuestionResponses.stream().map(
                            myPageQuestionResponse -> {
                                Question question  = new Question();
                                question.setCreatedAt(myPageQuestionResponse.getCreatedAt());
                                question.setTitle(myPageQuestionResponse.getTitle());
                                question.setTotalVote(myPageQuestionResponse.getTotalVote());
                                question.setQuestionId(myPageQuestionResponse.getQuestionId());

                                return question;
                            }
                        ).collect(Collectors.toList());

        }

        return questions;
    }
}
