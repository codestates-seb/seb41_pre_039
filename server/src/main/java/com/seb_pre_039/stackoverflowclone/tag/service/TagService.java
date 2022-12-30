package com.seb_pre_039.stackoverflowclone.tag.service;

import com.seb_pre_039.stackoverflowclone.exception.BusinessLogicException;
import com.seb_pre_039.stackoverflowclone.exception.ExceptionCode;
import com.seb_pre_039.stackoverflowclone.question.entity.Question;
import com.seb_pre_039.stackoverflowclone.question.entity.QuestionTag;
import com.seb_pre_039.stackoverflowclone.question.service.QuestionService;
import com.seb_pre_039.stackoverflowclone.tag.entity.Tag;
import com.seb_pre_039.stackoverflowclone.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TagService {
    private final TagRepository tagRepository;
    private final QuestionService questionService;



    public void createTag(List<QuestionTag> questionTags) {
//        questionTags.forEach(questionTag -> questionTag.getTag());
    }

    public List<QuestionTag> findQuestionTags(int questionId) {
//        Question question = questionService.findQuestion(questionId);

        return null;
    }

    private void verifyExistTag(String name) {
        Optional<Tag> optionalTag = tagRepository.findByName(name);
        if(optionalTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
        }
    }


}
