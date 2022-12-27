package com.seb_pre_039.stackoverflowclone.tag.entity;

import com.seb_pre_039.stackoverflowclone.question.entity.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tagId;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();


}
