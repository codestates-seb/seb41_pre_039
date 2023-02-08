package com.seb_pre_039.stackoverflowclone.auth.repository;

import com.seb_pre_039.stackoverflowclone.auth.entity.RefreshToken;
import org.springframework.data.repository.CrudRepository;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
}
