package com.seb_pre_039.stackoverflowclone.tag.repository;

import com.seb_pre_039.stackoverflowclone.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Integer> {
    Optional<Tag> findByName(String name);
}
