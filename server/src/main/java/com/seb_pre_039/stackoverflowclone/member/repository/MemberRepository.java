package com.seb_pre_039.stackoverflowclone.member.repository;

import com.seb_pre_039.stackoverflowclone.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
}
