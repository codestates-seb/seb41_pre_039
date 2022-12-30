// package com.seb_pre_039.stackoverflowclone.restdocs.question;

// import com.google.gson.Gson;
// import com.seb_pre_039.stackoverflowclone.member.service.MemberService;
// import com.seb_pre_039.stackoverflowclone.question.controller.QuestionController;
// import com.seb_pre_039.stackoverflowclone.question.dto.QuestionDto;
// import com.seb_pre_039.stackoverflowclone.question.entity.Question;
// import com.seb_pre_039.stackoverflowclone.question.mapper.QuestionMapper;
// import com.seb_pre_039.stackoverflowclone.question.service.QuestionService;
// import org.junit.jupiter.api.Test;
// import org.mockito.Mockito;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
// import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
// import org.springframework.boot.test.mock.mockito.MockBean;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.PageImpl;
// import org.springframework.data.domain.PageRequest;
// import org.springframework.data.domain.Sort;
// import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
// import org.springframework.http.MediaType;
// import org.springframework.restdocs.payload.JsonFieldType;
// import org.springframework.test.web.servlet.MockMvc;
// import org.springframework.test.web.servlet.ResultActions;
// import org.springframework.util.LinkedMultiValueMap;
// import org.springframework.util.MultiValueMap;

// import java.util.List;

// import static com.seb_pre_039.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
// import static com.seb_pre_039.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
// import static org.mockito.BDDMockito.given;
// import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
// import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
// import static org.springframework.restdocs.payload.PayloadDocumentation.*;
// import static org.springframework.restdocs.request.RequestDocumentation.*;
// import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// @WebMvcTest(QuestionController.class)
// @MockBean(JpaMetamodelMappingContext.class)
// @AutoConfigureRestDocs
// public class QuestionControllerRestDocsTest {
//     @Autowired
//     private MockMvc mockMvc;

//     @Autowired
//     private Gson gson;

//     @MockBean
//     private QuestionService questionService;

//     @MockBean
//     private QuestionMapper questionMapper;

//     @MockBean
//     private MemberService memberService;

//     @Test
//     public void postQuestionTest() throws Exception {
//         // given
//         QuestionDto.Post post = new QuestionDto.Post("15자 이상의 문장을 짜내기 위해 몸부림 치는 글", "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장", List.of("Spring", "Java"));
//         String content = gson.toJson(post);

//         QuestionDto.Response response
//                 = new QuestionDto.Response(
//                         1,
//                         "15자 이상의 문장을 짜내기 위해 몸부림 치는 글",
//                         "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장",
//                         "2022-12-28 10:38:03",
//                         "2022-12-28 10:39:37",
//                         false,
//                         0,
//                         0,
//                         0,
//                         "홍길동",
//                         1L,
//                         List.of("Spring", "Java")
//                         );

//         given(questionMapper.questionPostToQuestion(Mockito.any(QuestionDto.Post.class))).willReturn(new Question());

//         Question mockResultQuestion = new Question();
//         mockResultQuestion.setQuestionId(1);
//         given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(mockResultQuestion);

//         given(questionMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

//         // when
//         ResultActions actions
//                 = mockMvc.perform(
//                 post("/questions")
//                         .accept(MediaType.APPLICATION_JSON)
//                         .contentType(MediaType.APPLICATION_JSON)
//                         .content(content)
//                );

//         // then
//         actions.andExpect(status().isCreated())
// //                .andExpect(header().string("Location", is(startsWith("/questions"))));
//                 .andDo(document(
//                         "post-question",
//                         getRequestPreProcessor(),
//                         getResponsePreProcessor(),
//                         requestFields(
//                                 List.of(
//                                 fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                                 fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
//                                 fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그")
//                                 )
//                         ),
//                         responseFields(
//                                 List.of(
//                                         fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
//                                         fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                                         fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
//                                         fieldWithPath("createdAt").type(JsonFieldType.STRING).description("등록 날짜"),
//                                         fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 날짜"),
//                                         fieldWithPath("commentCount").type(JsonFieldType.NUMBER).description("총 댓글 수"),
//                                         fieldWithPath("viewCount").type(JsonFieldType.NUMBER).description("조회수"),
//                                         fieldWithPath("totalVote").type(JsonFieldType.NUMBER).description("총 투표수"),
//                                         fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그"),
//                                         fieldWithPath("username").type(JsonFieldType.STRING).description("게시글 등록인 이름"),
//                                         fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("게시글 등록인 식별자"),
//                                         fieldWithPath("chosen").type(JsonFieldType.BOOLEAN).description("채택 여부")
//                                 )
//                         )
//                 ));
//     }

//     @Test
//     public void patchQuestionTest() throws Exception {
//         // given
//         int questionId = 1;
//         QuestionDto.Patch patch
//                 = new QuestionDto.Patch(
//                         questionId,
//                 "15자 이상의 문장을 짜내기 위해 몸부림 치는 글",
//                 "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장",
//                 List.of("Python", "Django"),
//                 0
//                 );

//         String content = gson.toJson(patch);

//         QuestionDto.Response response
//                 = new QuestionDto.Response(
//                 1,
//                 "15자 이상의 문장을 짜내기 위해 몸부림 치는 글",
//                 "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장",
//                 "2022-12-29 11:18:00",
//                 "2022-12-29 11:19:00",
//                 false,
//                 0,
//                 0,
//                 0,
//                 "홍길동",
//                 1L,
//                 List.of("Python", "Django")
//         );

//         given(questionMapper.questionPatchToQuestion(Mockito.any(QuestionDto.Patch.class))).willReturn(new Question());
//         given(questionService.updateQuestion(Mockito.any(Question.class))).willReturn(new Question());
//         given(questionMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

//         // when
//         ResultActions actions =
//                 mockMvc .perform(
//                     patch("/questions/{question-id}", questionId)
//                             .accept(MediaType.APPLICATION_JSON)
//                             .contentType(MediaType.APPLICATION_JSON)
//                             .content(content)
//                 );

//         // then
//         actions.andExpect(status().isOk())
// //                .andExpect(jsonPath("$.title").value(patch.getTitle()))
//                 .andDo(document(
//                         "patch-question",
//                         getRequestPreProcessor(),
//                         getResponsePreProcessor(),
//                         pathParameters(
//                                 parameterWithName("question-id").description("Question 식별자")
//                         ),
//                         requestFields(
//                                 List.of(
//                                         fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자").ignored(),
//                                         fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                                         fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
//                                         fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그"),
//                                         fieldWithPath("totalVote").type(JsonFieldType.NUMBER).description("총 투표수")
//                                 )
//                         ),
//                         responseFields(
//                                 List.of(
//                                         fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
//                                         fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                                         fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
//                                         fieldWithPath("createdAt").type(JsonFieldType.STRING).description("등록 날짜"),
//                                         fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 날짜"),
//                                         fieldWithPath("commentCount").type(JsonFieldType.NUMBER).description("총 댓글 수"),
//                                         fieldWithPath("viewCount").type(JsonFieldType.NUMBER).description("조회수"),
//                                         fieldWithPath("totalVote").type(JsonFieldType.NUMBER).description("총 투표수"),
//                                         fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그"),
//                                         fieldWithPath("username").type(JsonFieldType.STRING).description("게시글 등록인 이름"),
//                                         fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("게시글 등록인 식별자"),
//                                         fieldWithPath("chosen").type(JsonFieldType.BOOLEAN).description("채택 여부")
//                                 )
//                         )
//                 ));
//     }

//     @Test
//     public void getQuestionTest() throws Exception {
//         // given
//         int questionId = 1;
//         QuestionDto.Response response =
//                 new QuestionDto.Response(
//                         1,
//                         "15자 이상의 문장을 짜내기 위해 몸부림 치는 글",
//                         "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장",
//                         "2222-12-31 23:59:59",
//                         "2223-01-01 00:00:00",
//                         false,
//                         0,
//                         0,
//                         0,
//                         "홍길동",
//                         1L,
//                         List.of("WebFlux", "Lambda", "Stream")
//                 );

//         given(questionService.findQuestion(Mockito.anyInt())).willReturn(new Question());
//         given(questionMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

//         // when
//         ResultActions actions = mockMvc.perform(
//                 get("/questions/{question-id}", questionId)
//                         .accept(MediaType.APPLICATION_JSON)
//         );

//         // then
//         actions
//                 .andExpect(status().isOk())
//                 .andDo(document(
//                         "get-question",
//                         getRequestPreProcessor(),
//                         getResponsePreProcessor(),
//                         pathParameters(
//                                 parameterWithName("question-id").description("Question 식별자")
//                         ),
//                         responseFields (
//                             List.of(
//                                     fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
//                                     fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                                     fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
//                                     fieldWithPath("createdAt").type(JsonFieldType.STRING).description("등록 날짜"),
//                                     fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 날짜"),
//                                     fieldWithPath("commentCount").type(JsonFieldType.NUMBER).description("총 댓글 수"),
//                                     fieldWithPath("viewCount").type(JsonFieldType.NUMBER).description("조회수"),
//                                     fieldWithPath("totalVote").type(JsonFieldType.NUMBER).description("총 투표수"),
//                                     fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그"),
//                                     fieldWithPath("username").type(JsonFieldType.STRING).description("게시글 등록인 이름"),
//                                     fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("게시글 등록인 식별자"),
//                                     fieldWithPath("chosen").type(JsonFieldType.BOOLEAN).description("채택 여부")
//                             )
//                         )
//                 ));
//     }

//     @Test
//     public void getQuestionsTest() throws Exception {
//         // given
//         String page = "1";
//         String size = "10";
//         String sort = "createdAt";

//         MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
//         queryParams.add("page", page);
//         queryParams.add("size", size);
//         queryParams.add("sort", sort);

//         Question question1 = Question.builder()
//                 .questionId(1)
//                 .title("15자 이상의 문장을 짜내기 위해 몸부림 치는 글")
//                 .content("20자 이상의 문장을 짜내기 위해 몸부림 치는 문장")
//                 .totalVote(0)
//                 .commentCount(0)
//                 .viewCount(0)
//                 .tags(List.of("Java", "RestDocs"))
//                 .build();

//         Question question2 = Question.builder()
//                 .questionId(2)
//                 .title("15자 이상의 문장을 짜내기 위해 열심히 고뇌하는 글")
//                 .content("20자 이상의 문장을 짜내기 위해 열심히 고뇌하는 문장")
//                 .totalVote(0)
//                 .commentCount(0)
//                 .viewCount(0)
//                 .tags(List.of("Python", "Anaconda"))
//                 .build();

//         Question question3 = Question.builder()
//                 .questionId(3)
//                 .title("15자 이상의 문장을 적기 위해서 몸부림 치는 글")
//                 .content("20자 이상의 문장을 적기 위해서 몸부림 치는 문장")
//                 .totalVote(0)
//                 .commentCount(0)
//                 .viewCount(0)
//                 .tags(List.of("Java", "RestDocs"))
//                 .build();




//         Page<Question> questions = new PageImpl<>(
//                 List.of(question1, question2, question3),
//                 PageRequest.of(0, 10, Sort.by(sort).descending()),
//                 3);

//         List<QuestionDto.Response> responses =
//                 List.of(
//                     new QuestionDto.Response(
//                     1,
//                     "15자 이상의 문장을 짜내기 위해 몸부림 치는 글",
//                     "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장",
//                     "0000-00-00 00:00:00",
//                     "0000-00-00 00:00:00",
//                             false,
//                             0,
//                             0,
//                             0,
//                             "홍길동",
//                             1L,
//                     List.of("Java", "RestDocs")
//                     ),
//                     new QuestionDto.Response(
//                         2,
//                         "15자 이상의 문장을 짜내기 위해 열심히 고뇌하는 글",
//                         "20자 이상의 문장을 짜내기 위해 열심히 고뇌하는 문장",
//                         "0000-00-00 00:00:00",
//                         "0000-00-00 00:00:00",
//                             false,
//                             0,
//                             0,
//                             0,
//                             "김철수",
//                             1L,
//                         List.of("Python", "Anaconda")
//                     ),
//                     new QuestionDto.Response(
//                         3,
//                         "15자 이상의 문장을 적기 위해서 몸부림 치는 글",
//                         "20자 이상의 문장을 적기 위해서 몸부림 치는 문장",
//                         "0000-00-00 00:00:00",
//                         "0000-00-00 00:00:00",
//                             false,
//                             0,
//                             0,
//                             0,
//                             "신짱구",
//                             1L,
//                         List.of("Java", "RestDocs")
//                 )
//         );

//         given(questionService.findQuestions(Mockito.anyInt(), Mockito.anyInt(), Mockito.anyString())).willReturn(questions);
//         given(questionMapper.questionsToQuestionResponseDtos(Mockito.anyList())).willReturn(responses);

//         // when
//         ResultActions actions = mockMvc.perform(
//                 get("/questions/main")
//                         .accept(MediaType.APPLICATION_JSON)
//                         .params(queryParams)
//         );

//         // then
//         actions.andExpect(status().isOk())
//                 .andDo(document(
//                         "get-questions",
//                         getRequestPreProcessor(),
//                         getResponsePreProcessor(),
//                         requestParameters(
//                                 List.of(
//                                         parameterWithName("page").description("표시할 Page 번호"),
//                                         parameterWithName("size").description("표시할 Page 당 질문 수"),
//                                         parameterWithName("sort").description("정렬 기준(createdAt or totalVote)")
//                                 )
//                         ),
//                         responseFields(
//                                 List.of(
//                                         fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
//                                         fieldWithPath("data[].title").type(JsonFieldType.STRING).description("제목"),
//                                         fieldWithPath("data[].content").type(JsonFieldType.STRING).description("내용"),
//                                         fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("등록 날짜"),
//                                         fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("수정 날짜"),
//                                         fieldWithPath("data[].commentCount").type(JsonFieldType.NUMBER).description("총 댓글 수"),
//                                         fieldWithPath("data[].viewCount").type(JsonFieldType.NUMBER).description("조회수"),
//                                         fieldWithPath("data[].totalVote").type(JsonFieldType.NUMBER).description("총 투표수"),
//                                         fieldWithPath("data[].tags").type(JsonFieldType.ARRAY).description("태그"),
//                                         fieldWithPath("data[].username").type(JsonFieldType.STRING).description("게시글 등록인 이름"),
//                                         fieldWithPath("data[].memberId").type(JsonFieldType.NUMBER).description("게시글 등록인 식별자"),
//                                         fieldWithPath("data[].chosen").type(JsonFieldType.BOOLEAN).description("채택 여부"),

//                                         fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("Page 정보"),
//                                         fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("표시할 Page 번호"),
//                                         fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("표시할 Page 당 질문 수"),
//                                         fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 질문 수"),
//                                         fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 Page 수")
//                                 )
//                         )
//                         ));
//     }

//     @Test
//     public void sortQuestions() throws Exception {
//         String page = "1";
//         String size = "10";
//         String sort = "createdAt";
//         String search = "title";

//         MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
//         queryParams.add("page", page);
//         queryParams.add("size", size);
//         queryParams.add("sort", sort);
//         queryParams.add("search", search);

//         Question question1 = Question.builder()
//                 .questionId(1)
//                 .title("title: 15자 이상의 문장을 짜내기 위해 몸부림 치는 글")
//                 .content("20자 이상의 문장을 짜내기 위해 몸부림 치는 문장")
//                 .totalVote(0)
//                 .commentCount(0)
//                 .viewCount(0)
//                 .tags(List.of("Java", "RestDocs"))
//                 .build();

//         Question question2 = Question.builder()
//                 .questionId(2)
//                 .title("15자 이상의 문장을 짜내기 위해 열심히 고뇌하는 글")
//                 .content("20자 이상의 문장을 짜내기 위해 열심히 고뇌하는 문장")
//                 .totalVote(0)
//                 .commentCount(0)
//                 .viewCount(0)
//                 .tags(List.of("Python", "Anaconda"))
//                 .build();

//         Question question3 = Question.builder()
//                 .questionId(3)
//                 .title("15자 이상의 문장을 적기 위해서 몸부림 치는 글 - title")
//                 .content("20자 이상의 문장을 적기 위해서 몸부림 치는 문장")
//                 .totalVote(0)
//                 .commentCount(0)
//                 .viewCount(0)
//                 .tags(List.of("Java", "RestDocs"))
//                 .build();

//         Page<Question> questions = new PageImpl<>(
//                 List.of(question1, question3),
//                 PageRequest.of(0, 10, Sort.by(sort).descending()),
//                 2);

//         List<QuestionDto.Response> responses =
//                 List.of(
//                         new QuestionDto.Response(
//                                 1,
//                                 "title: 15자 이상의 문장을 짜내기 위해 몸부림 치는 글",
//                                 "20자 이상의 문장을 짜내기 위해 몸부림 치는 문장",
//                                 "0000-00-00 00:00:00",
//                                 "0000-00-00 00:00:00",
//                                 false,
//                                 0,
//                                 0,
//                                 0,
//                                 "홍길동",
//                                 1L,
//                                 List.of("Java", "RestDocs")
//                         ),

//                         new QuestionDto.Response(
//                                 3,
//                                 "15자 이상의 문장을 적기 위해서 몸부림 치는 글 - title",
//                                 "20자 이상의 문장을 적기 위해서 몸부림 치는 문장",
//                                 "0000-00-00 00:00:00",
//                                 "0000-00-00 00:00:00",
//                                 false,
//                                 0,
//                                 0,
//                                 0,
//                                 "신짱구",
//                                 1L,
//                                 List.of("Java", "RestDocs")
//                         )
//                 );

//         given(questionService.sortQuestions(Mockito.anyInt(), Mockito.anyInt(), Mockito.anyString(), Mockito.anyString())).willReturn(questions);
//         given(questionMapper.questionsToQuestionResponseDtos(Mockito.anyList())).willReturn(responses);

//         // when
//         ResultActions actions = mockMvc.perform(
//                 get("/questions")
//                         .accept(MediaType.APPLICATION_JSON)
//                         .params(queryParams)
//         );

//         // then
//         actions.andExpect(status().isOk())
//                 .andDo(document(
//                         "sort-questions",
//                         getRequestPreProcessor(),
//                         getResponsePreProcessor(),
//                         requestParameters(
//                                 List.of(
//                                         parameterWithName("page").description("표시할 Page 번호"),
//                                         parameterWithName("size").description("표시할 Page 당 질문 수"),
//                                         parameterWithName("sort").description("정렬 기준(createdAt or totalVote)"),
//                                         parameterWithName("search").description("제목에 포함되는 단어")
//                                 )
//                         ),
//                         responseFields(
//                                 List.of(
//                                         fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
//                                         fieldWithPath("data[].title").type(JsonFieldType.STRING).description("제목"),
//                                         fieldWithPath("data[].content").type(JsonFieldType.STRING).description("내용"),
//                                         fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("등록 날짜"),
//                                         fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("수정 날짜"),
//                                         fieldWithPath("data[].commentCount").type(JsonFieldType.NUMBER).description("총 댓글 수"),
//                                         fieldWithPath("data[].viewCount").type(JsonFieldType.NUMBER).description("조회수"),
//                                         fieldWithPath("data[].totalVote").type(JsonFieldType.NUMBER).description("총 투표수"),
//                                         fieldWithPath("data[].tags").type(JsonFieldType.ARRAY).description("태그"),
//                                         fieldWithPath("data[].username").type(JsonFieldType.STRING).description("게시글 등록인 이름"),
//                                         fieldWithPath("data[].memberId").type(JsonFieldType.NUMBER).description("게시글 등록인 식별자"),
//                                         fieldWithPath("data[].chosen").type(JsonFieldType.BOOLEAN).description("채택 여부"),

//                                         fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("Page 정보"),
//                                         fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("표시할 Page 번호"),
//                                         fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("표시할 Page 당 질문 수"),
//                                         fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 질문 수"),
//                                         fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 Page 수")
//                                 )
//                         )
//                 ));

//     }

//     @Test
//     public void deleteTest() throws Exception {
//         int questionId = 1;
//         ResultActions actions =
//                 mockMvc .perform(
//                         delete("/questions/{question-id}", questionId))
//                         .andExpect(status().isNoContent())
//                         .andDo(document
//                                 ("delete-question",
//                                 pathParameters(
//                                         parameterWithName("question-id").description("Question 식별자")
//                                 )
//                                 )
//                         );


//     }


// }
