package com.gallendar.gradle.server.domain.board.dto;

import com.gallendar.gradle.server.domain.board.entity.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class BoardPostDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title; // 게시글 제목

    @NotBlank(message = "내용을 입력하세요.")
    private String content; // 게시글 본문

    @NotBlank(message = "사진을 첨부하세요")
    private MultipartFile photo;

    private String music;

    @Builder
    public void boardPostDto(String title, String content, MultipartFile photo, String music){
        this.title = title;
        this.content = content;
        this.photo = photo;
        this.music = music;
    }

    public Board toBoard(){
        return Board.builder()
                .title(title)
                .content(content)
                .photo(photo)
                .music(music)
                .build();
    }
}