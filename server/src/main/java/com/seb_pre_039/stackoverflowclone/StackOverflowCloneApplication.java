package com.seb_pre_039.stackoverflowclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class StackOverflowCloneApplication {

    public static void main(String[] args) {
        SpringApplication.run(StackOverflowCloneApplication.class, args);
    }

}
