package com.devyne.board.boardback.VO;

import lombok.Data;

@Data
public class BoardVO {

    private int boardIdx;
    
    private String title;

    private int type;

    private String author;

    private String regDate;

    private String modDate;

    private String contents;

}
