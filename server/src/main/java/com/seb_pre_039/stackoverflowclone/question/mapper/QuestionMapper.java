package com.seb_pre_039.stackoverflowclone.question.mapper;

import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.dto.QuestionTagResponseDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.entity.QuestionTag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
//    Question questionPostToQuestion(QuestionDto.Post post);
    Question questionPatchToQuestion(QuestionDto.Patch patch);
    QuestionDto.Response questionToQuestionResponse(Question question);
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);

    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "tag.tagId", target = "tagId")
    @Mapping(source = "tag.name", target = "name")
    QuestionTagResponseDto QuestionTagToQuestionTagResponseDto(QuestionTag questionTag);

    List<QuestionTagResponseDto> QuestionTagToQuestionTagResponseDtos(List<QuestionTag> questionTags);

    default Question questionPostToQuestion(QuestionDto.Post post) {
        if(post == null) return null;
        else {
            Question.QuestionBuilder question = Question.builder();
            question.title(post.getTitle())
                    .content(post.getContent());

            return question.build();
        }



    }
}
