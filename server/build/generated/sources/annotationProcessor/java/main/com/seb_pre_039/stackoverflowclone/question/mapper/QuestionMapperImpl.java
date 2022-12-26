package com.seb_pre_039.stackoverflowclone.question.mapper;

import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-26T09:09:30+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.jar, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostToQuestion(QuestionDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.title( post.getTitle() );
        question.content( post.getContent() );

        return question.build();
    }

    @Override
    public Question questionPatchToQuestion(QuestionDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( patch.getQuestionId() );
        question.title( patch.getTitle() );
        question.content( patch.getContent() );

        return question.build();
    }

    @Override
    public QuestionDto.Response questionToQuestionResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        int questionId = 0;
        String title = null;
        String content = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;
        int commentCount = 0;
        int viewCount = 0;

        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();
        commentCount = question.getCommentCount();
        viewCount = question.getViewCount();

        boolean isChosen = false;

        QuestionDto.Response response = new QuestionDto.Response( questionId, title, content, createdAt, modifiedAt, isChosen, commentCount, viewCount );

        return response;
    }

    @Override
    public List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponse( question ) );
        }

        return list;
    }
}
