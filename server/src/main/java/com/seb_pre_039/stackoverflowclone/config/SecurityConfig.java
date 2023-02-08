package com.seb_pre_039.stackoverflowclone.config;

import com.seb_pre_039.stackoverflowclone.auth.filter.JwtAuthenticationFilter;
import com.seb_pre_039.stackoverflowclone.auth.filter.JwtVerificationFilter;
import com.seb_pre_039.stackoverflowclone.auth.handler.MemberAccessDeniedHandler;
import com.seb_pre_039.stackoverflowclone.auth.handler.MemberAuthenticationEntryPoint;
import com.seb_pre_039.stackoverflowclone.auth.handler.MemberAuthenticationFailureHandler;
import com.seb_pre_039.stackoverflowclone.auth.handler.MemberAuthenticationSuccessHandler;
import com.seb_pre_039.stackoverflowclone.auth.jwt.JwtTokenizer;
import com.seb_pre_039.stackoverflowclone.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;

    private final CustomAuthorityUtils customAuthorityUtils;

    public SecurityConfig(JwtTokenizer jwtTokenizer, CustomAuthorityUtils customAuthorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.customAuthorityUtils = customAuthorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize ->
                        authorize
                                .antMatchers(HttpMethod.POST, "/members").permitAll()
                                .antMatchers(HttpMethod.PATCH, "/members/*").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/members/*").permitAll()
                                .antMatchers(HttpMethod.GET, "/members").permitAll()
                                .antMatchers(HttpMethod.DELETE, "/members/*").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.POST, "/questions").hasRole("USER")
                                .antMatchers(HttpMethod.PATCH, "/questions/*").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
                                .antMatchers(HttpMethod.DELETE, "/questions/*").hasRole("USER")
                                .antMatchers(HttpMethod.DELETE, "/questions").hasRole("ADMIN")
                                .antMatchers(HttpMethod.POST, "/comments/*").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/comments/**").permitAll()
                                .antMatchers(HttpMethod.PATCH, "/comments/*").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/comments/*").hasAnyRole("USER", "ADMIN")
                );


        return http.build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {

        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, customAuthorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}

