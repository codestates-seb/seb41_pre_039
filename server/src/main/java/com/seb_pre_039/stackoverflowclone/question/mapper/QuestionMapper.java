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
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);
    List<QuestionDto.Response> myPageQuestionResponseToQuestions(List<MyPageQuestionResponse> myPageQuestionResponses);
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

//    default List<QuestionDto.Response> myPageQuestionResponseToQuestions(List<MyPageQuestionResponse> myPageQuestionResponses) {
//        List<QuestionDto.Response> questions;
//        if(myPageQuestionResponses == null) return null;
//        else {
//            questions =
//                myPageQuestionResponses.stream().map(
//                            myPageQuestionResponse -> {
//                                QuestionDto.Response question  = new QuestionDto.Response();
//                                question.setCreatedAt(myPageQuestionResponse.getCreatedAt());
//                                question.setTitle(myPageQuestionResponse.getTitle());
//                                question.setTotalVote(myPageQuestionResponse.getTotalVote());
//                                question.setQuestionId(myPageQuestionResponse.getQuestionId());
//                                question.setMemberId(myPageQuestionResponse.getMemberId());
//
//                                return question;
//                            }
//                        ).collect(Collectors.toList());
//
//        }
//
//        return questions;
//    }
}
